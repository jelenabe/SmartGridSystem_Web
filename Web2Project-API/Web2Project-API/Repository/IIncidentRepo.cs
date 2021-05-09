using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DTOs;
using Web2Project_API.Models;

namespace Web2Project_API.Repository
{
    public interface IIncidentRepo
    {
        IEnumerable<IncidentDto> GetAllIncidents();
        IncidentDto AddIncident(IncidentDto newIncident);
        IncidentDto GetIncidentById(int incidentId);
        IncidentDto UpdateIncident(IncidentDto updated);
        void DeleteIncident(int incidentId);
    }
}
