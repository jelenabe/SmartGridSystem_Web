using AutoMapper;
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

        public IncidentRepo(ModelDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
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
            incident.Priority = 0;  // videti...

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
