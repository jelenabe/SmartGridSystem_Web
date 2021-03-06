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

        IEnumerable<DeviceDTO> GetIncidentDevices(int incidentId);
        void AddDeviceToIncident(int incidentId, int deviceId);
        List<DeviceDTO> GetUnconnectedDevices();
        void RemoveDeviceFromIncindet(int incidentId, int deviceId);
        void AddResolution(int incidentId, ResolutionDTO resolution);
        ResolutionDTO GetResolutionOfIncidentById(int incidentId);
        IEnumerable<IncidentDto> GetMineIncidents(string logUserId);

    }
}
