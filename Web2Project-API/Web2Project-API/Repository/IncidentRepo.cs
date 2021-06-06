using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DbConfigurations;
using Web2Project_API.DTOs;
using Web2Project_API.Models;

namespace Web2Project_API.Repository
{
    public class IncidentRepo : IIncidentRepo
    {
        private readonly ModelDbContext _dbContext;
        private readonly IMapper _mapper;
        private readonly IOutageRepo _callRepo;
        private readonly IDeviceRepo _deviceRepo;

        public IncidentRepo(ModelDbContext dbContext, IMapper mapper, IOutageRepo callRepo, IDeviceRepo deviceRepo)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _callRepo = callRepo;
            _deviceRepo = deviceRepo;
        }

        public void AddDeviceToIncident(int incidentId, int deviceId)
        {
            Incident incident = _dbContext.Incidents.Include(x => x.Devices)
                                                    .ThenInclude(o => o.Location)
                                                    .FirstOrDefault(x => x.IncidentId == incidentId);
            if (incident == null)
            {
                throw new Exception($"Incident with id {incidentId} does not exist.");
            }

            Device device = _dbContext.Devices.Include(x => x.Location).FirstOrDefault(x => x.DeviceId == deviceId);
            if (device == null)
            {
                throw new Exception($"Device with id = { deviceId} does not exists!");
            }

            // svaki sledeci device mora biti na istoj lokaciji kao prethodni device-ovi:
            foreach (Device d in incident.Devices)
            {
                if ((d.Location.PostNumber == device.Location.PostNumber) && 
                    (d.Location.Street.Equals(device.Location.Street)) &&
                        (d.Location.City.Equals(device.Location.City)))
                {
                    throw new Exception($"Device has to be on {d.Location.Street}, {d.Location.City}, {d.Location.PostNumber}!");
                }
                    
            }

            // pozivi vezani za odabrane uredjaje, preko adrese:
            // pozivi koji nisu ni u jednom incidentu do sada, a kojima je lokacija ista kao odabranim device-ovima, vezujemo za dati incident:
            List<Call> callWithoutIncident = _dbContext.Calls.Include("Location").Where(x => x.IncidentId == null).ToList();
            foreach (Call c in callWithoutIncident)
            {
                if ((c.Location.PostNumber == device.Location.PostNumber) &&
                    (c.Location.Street.Equals(device.Location.Street)) &&
                        (c.Location.City.Equals(device.Location.City)))
                {
                    c.IncidentId = incidentId;
                    _callRepo.UpdateCall(c);
                }

            }

            
            if (incident.Devices.Find(x => x.DeviceId == deviceId) != null)
                throw new Exception($"Device with id = {deviceId} is already added to incident!");

            device.IncidentId = incidentId;
            _deviceRepo.UpdateDevice(_mapper.Map<DeviceDTO>(device));

            _dbContext.SaveChanges();
            
        }

        public IncidentDto AddIncident(IncidentDto newIncident)
        {
            if (!Enum.IsDefined(typeof(IncidentType), newIncident.IncidentType))
                throw new Exception("Undefined incident type!");

            if (!Enum.IsDefined(typeof(IncidentStatus), newIncident.IncidentStatus))
                throw new Exception("Undefined incident status!");

            if (newIncident.VoltageLevel <= 0)
                throw new Exception("Voltage level have to be greater than 0!");

            if (newIncident.OutageTime > newIncident.ETA)
                throw new Exception($"ETA date can not be before outage time!");

            if (newIncident.OutageTime > newIncident.ATA)
                throw new Exception($"ATA date can not be before outage time!");

            if (newIncident.OutageTime > newIncident.ScheduledTime)
                throw new Exception($"ScheduledTime time can not be before outage time!");


            Incident incident = _mapper.Map<Incident>(newIncident);

            incident.IncidentId = 0;
            incident.Priority = 0;

            if (incident.ETR != null)
            {
                incident.ETR = incident.ETR.AddHours(2);
            }
            if (incident.ATA != null)
            {
                incident.ATA = incident.ATA.Value.AddHours(2);
            }
            if (incident.ETA != null)
            {
                incident.ETA = incident.ETA.AddHours(2);
            }
            if (incident.OutageTime != null)
            {
                incident.OutageTime = incident.OutageTime.Value.AddHours(2);
            }
            if (incident.ScheduledTime != null)
            {
                incident.ScheduledTime = incident.ScheduledTime.AddHours(2);
            }


            _dbContext.Incidents.Add(incident);
            _dbContext.SaveChanges();

            return _mapper.Map<IncidentDto>(incident);
        }

        public void AddResolution(int incidentId, ResolutionDTO resolution)
        {
            if (!Enum.IsDefined(typeof(CausesType), resolution.ResolutionCauses))
                throw new Exception("Undefined resolution cause!");

            if (!Enum.IsDefined(typeof(ConstructionTypes), resolution.ResolutionConstructionTypes))
                throw new Exception("Undefined resolution construction type!");

            if (!Enum.IsDefined(typeof(MaterialType), resolution.ResolutionMaterials))
                throw new Exception("Undefined resolution material!");

            if (!Enum.IsDefined(typeof(SubcausesType), resolution.ResolutionSubcauses))
                throw new Exception("Undefined resolution subcase!");


            if (resolution.ResolutionCauses.ToString().Equals("FAILURE"))
            {
                if (!resolution.ResolutionSubcauses.ToString().Equals("BURNED_OUT") && !resolution.ResolutionSubcauses.ToString().Equals("SHORT_CIRCUIT") && !(resolution.ResolutionSubcauses.ToString().Equals("MECHANICAL_FAILURE")))
                    throw new Exception($"{resolution.ResolutionSubcauses} is not subcase of Failure!");
            }
            else if (resolution.ResolutionCauses.ToString().Equals("WEATHER"))
            {
                if (!resolution.ResolutionSubcauses.ToString().Equals("STORM") && !resolution.ResolutionSubcauses.ToString().Equals("RAIN") && !resolution.ResolutionSubcauses.ToString().Equals("WIND") && !resolution.ResolutionSubcauses.ToString().Equals("SNOW") && !resolution.ResolutionSubcauses.ToString().Equals("LIGHTING") && !resolution.ResolutionSubcauses.ToString().Equals("HURRICANE") && !resolution.ResolutionSubcauses.ToString().Equals("HAIL"))
                    throw new Exception($"{resolution.ResolutionSubcauses} is not subcase of Weather!");
            }else
            {
                if (!resolution.ResolutionSubcauses.ToString().Equals("BAD_INSTALL") && !resolution.ResolutionSubcauses.ToString().Equals("NO_SUPERVISION"))
                    throw new Exception($"{resolution.ResolutionSubcauses} is not subcase of Human error!");
            }

            if (_dbContext.Incidents.Any(x => x.IncidentId == incidentId) == false)
                throw new Exception($"Incident with id = {incidentId} does not exists!");


            Incident incident = _dbContext.Incidents.Include(x => x.Devices)
                                                    .ThenInclude(o => o.Location)
                                                    .FirstOrDefault(x => x.IncidentId == incidentId);

            incident.ResolutionCauses = (CausesType)Enum.Parse(typeof(CausesType), resolution.ResolutionCauses);
            incident.ResolutionSubcauses = (SubcausesType)Enum.Parse(typeof(SubcausesType), resolution.ResolutionSubcauses);
            incident.ResolutionMaterials = (MaterialType)Enum.Parse(typeof(MaterialType), resolution.ResolutionMaterials);
            incident.ResolutionConstructionTypes = (ConstructionTypes)Enum.Parse(typeof(ConstructionTypes), resolution.ResolutionConstructionTypes);

            _dbContext.SaveChanges();

        }

        public void DeleteIncident(int incidentId)
        {
            Incident incident = _dbContext.Incidents.FirstOrDefault(x => x.IncidentId == incidentId); // dodati logiku za kaskadno brisanje

            if (incident == null)
                throw new Exception($"Incident with id = {incidentId} dos not exist.");

            _dbContext.Incidents.Remove(incident);
            _dbContext.SaveChanges();
        }

        public IEnumerable<IncidentDto> GetAllIncidents()
        {
            return _mapper.Map<List<IncidentDto>>(_dbContext.Incidents.ToList());
        }

        public IncidentDto GetIncidentById(int incidentId)
        {
            Incident incident = _dbContext.Incidents.Find(incidentId);

            if (incident == null)
                throw new Exception($"Incident with id {incidentId} does not exist.");

            return _mapper.Map<IncidentDto>(incident);
        }

        public IEnumerable<DeviceDTO> GetIncidentDevices(int incidentId)
        {
            Incident incident = _dbContext.Incidents.Include(x => x.Devices)
                                                   .ThenInclude(o => o.Location)
                                                   .FirstOrDefault(x => x.IncidentId == incidentId);
            if (incident == null)
            {
                throw new Exception($"Incident with id {incidentId} does not exist!");
            }

            List<Device> incidentDevices = new List<Device>();

            foreach (Device d in incident.Devices)
            {
                incidentDevices.Add(d);
            }

            return _mapper.Map<IEnumerable<DeviceDTO>>(incidentDevices);

        }

        public ResolutionDTO GetResolutionOfIncidentById(int incidentId)
        {
            Incident incident = _dbContext.Incidents.Include(x => x.Devices)
                                                  .ThenInclude(o => o.Location)
                                                  .FirstOrDefault(x => x.IncidentId == incidentId);

            if(incident.ResolutionCauses == null || incident.ResolutionSubcauses == null || incident.ResolutionMaterials == null || incident.ResolutionConstructionTypes == null)
            {
                return null;
            }

            ResolutionDTO resolution = new ResolutionDTO();
            resolution.ResolutionCauses = ((CausesType)Enum.Parse(typeof(CausesType), incident.ResolutionCauses.ToString())).ToString();
            resolution.ResolutionSubcauses = ((SubcausesType)Enum.Parse(typeof(SubcausesType), incident.ResolutionSubcauses.ToString())).ToString();
            resolution.ResolutionConstructionTypes = ((ConstructionTypes)Enum.Parse(typeof(ConstructionTypes), incident.ResolutionConstructionTypes.ToString())).ToString();
            resolution.ResolutionMaterials = ((MaterialType)Enum.Parse(typeof(MaterialType), incident.ResolutionMaterials.ToString())).ToString();

            return resolution;
        }

        public List<DeviceDTO> GetUnconnectedDevices(int incidentId)
        {
            Incident incident = _dbContext.Incidents.Include(x => x.Devices)
                                                  .ThenInclude(o => o.Location)
                                                  .FirstOrDefault(x => x.IncidentId == incidentId);
            if (incident == null)
                throw new Exception($"Incident with id {incidentId} does not exist.");

            List<Device> allDevices = _dbContext.Devices.Include("Location").ToList();
            List<Device> unconnectedDevices = new List<Device>();

            foreach(Device d in allDevices)
            {
                if(d.IncidentId != incidentId)
                {
                    unconnectedDevices.Add(d);
                }
            }

            return _mapper.Map<List<DeviceDTO>>(unconnectedDevices);

        }

        public void RemoveDeviceFromIncindet(int incidentId, int deviceId)
        {
            Incident incident = _dbContext.Incidents.Include(x => x.Devices)
                                                   .ThenInclude(o => o.Location)
                                                   .FirstOrDefault(x => x.IncidentId == incidentId);
            if (incident == null)
                throw new Exception($"Incident with id {incidentId} does not exist.");

            Device device = _dbContext.Devices.Find(deviceId);

            if (device == null)
                throw new Exception($"Device with id = { deviceId} does not exists!");

            Device device_for_remove = incident.Devices.Find(x => x.DeviceId == deviceId);

            if (device_for_remove == null)
                throw new Exception($"Device with id = {deviceId} is not connected with incident with id = {incidentId}");

            incident.Devices.Remove(device_for_remove);
            UpdateIncident(_mapper.Map<IncidentDto>(incident));  // probati bez ove linije  !!!!!!!!!!!!!!!!!!!!!!

            _dbContext.SaveChanges();
        }

        public IncidentDto UpdateIncident(IncidentDto updated)
        {
            if (!Enum.IsDefined(typeof(IncidentType), updated.IncidentType))
                throw new Exception("Undefined incident type!");

            if (!Enum.IsDefined(typeof(IncidentStatus), updated.IncidentStatus))
                throw new Exception("Undefined incident status!");

            if (updated.VoltageLevel <= 0)
                throw new Exception("Voltage level have to be greater than 0!");

            if (updated.OutageTime > updated.ETA)
                throw new Exception($"ETA date cannot be before outage time!");

            if (updated.OutageTime > updated.ATA)
                throw new Exception($"ATA date cannot be before outage time!");

            if (updated.OutageTime > updated.ScheduledTime)
                throw new Exception($"ScheduledTime time cannot be before outage time!");


            Incident oldIncident = _dbContext.Incidents.Find(updated.IncidentId);

            if (oldIncident == null)
                throw new Exception($"Incident with id {updated.IncidentId} does not exist");


            oldIncident.Priority = updated.Priority;
            oldIncident.Confirmed = updated.Confirmed;
            oldIncident.ETA = updated.ETA;
            oldIncident.ATA = updated.ATA;
            oldIncident.ETR = updated.ETR;
            oldIncident.OutageTime = updated.OutageTime;
            oldIncident.ScheduledTime = updated.ScheduledTime;
            oldIncident.IncidentType = updated.IncidentType;
            oldIncident.IncidentStatus = updated.IncidentStatus;
            oldIncident.VoltageLevel = updated.VoltageLevel;
            oldIncident.ResolutionCauses = updated.ResolutionCauses;
            oldIncident.ResolutionSubcauses = updated.ResolutionSubcauses;
            oldIncident.ResolutionConstructionTypes = updated.ResolutionConstructionTypes;
            oldIncident.ResolutionMaterials = updated.ResolutionMaterials;

            if (oldIncident.ETR != null)
            {
                oldIncident.ETR = oldIncident.ETR.AddHours(2);
            }
            if (oldIncident.ATA != null)
            {
                oldIncident.ATA = oldIncident.ATA.Value.AddHours(2);
            }
            if (oldIncident.ETA != null)
            {
                oldIncident.ETA = oldIncident.ETA.AddHours(2);
            }
            if (oldIncident.OutageTime != null)
            {
                oldIncident.OutageTime = oldIncident.OutageTime.Value.AddHours(2);
            }
            if (oldIncident.ScheduledTime != null)
            {
                oldIncident.ScheduledTime = oldIncident.ScheduledTime.AddHours(2);
            }

            _dbContext.SaveChanges();

            return _mapper.Map<IncidentDto>(oldIncident);
        }
    }
}
