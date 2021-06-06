using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.Models;

namespace Web2Project_API.DTOs
{
    public class DeviceDTO
    {
        public int DeviceId { get; set; }
        public string Name { get; set; }
        public DeviceType Type { get; set; }
        public DateTime Timestamp { get; set; }
        public int LocationId { get; set; }
        public LocationDTO Location { get; set; }
        public int? IncidentId { get; set; }
        // Incident Incident { get; set; }
        public int? SafetyDocumentId { get; set; }
        //public SafetyDocument SafetyDocument { get; set; }
        public int? WorkPlanId { get; set; }
        //public WorkPlan WorkPlan { get; set; }
    }
}
