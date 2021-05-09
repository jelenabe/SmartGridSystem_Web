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

            //dodati validacije za polja

            Incident incident = _mapper.Map<Incident>(newIncident);

            incident.IncidentId = 0;
            incident.Priority = 0;


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

            //dodati validacije za polja

            Incident oldIncident = _dbContext.Incidents.Find(updated.IncidentId);

            if (oldIncident == null)
                throw new Exception($"Incident with id {updated.IncidentId} does not exist");


            oldIncident.Priority = updated.Priority;
            oldIncident.Confirmed = updated.Confirmed;
            oldIncident.ETA = updated.ETA;
            oldIncident.ATA = updated.ATA;
            oldIncident.ETR = updated.ETR;
            oldIncident.OutageTime = updated.OutageTime;
            oldIncident.ScheduedTime = updated.ScheduedTime;
            oldIncident.IncidentType = updated.IncidentType;
            oldIncident.IncidentStatus = updated.IncidentStatus;      
            oldIncident.VoltageLevel = updated.VoltageLevel;
            oldIncident.ResolutionCauses = updated.ResolutionCauses;
            oldIncident.ResolutionSubcauses = updated.ResolutionSubcauses;
            oldIncident.ResolutionConstructionTypes = updated.ResolutionConstructionTypes;
            oldIncident.ResolutionMaterials = updated.ResolutionMaterials;

           

            _dbContext.SaveChanges();

            return _mapper.Map<IncidentDto>(oldIncident);
        }
    }
}
