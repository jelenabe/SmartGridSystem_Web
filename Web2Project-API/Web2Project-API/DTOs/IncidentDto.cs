using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.Models;

namespace Web2Project_API.DTOs
{
    public class IncidentDto
    {
        public int IncidentId { get; set; }
        public int? Priority { get; set; }
        public IncidentType IncidentType { get; set; }  
        public bool Confirmed { get; set; }
        public IncidentStatus IncidentStatus { get; set; }
        public DateTime ETA { get; set; }
        public DateTime? ATA { get; set; }
        public DateTime ETR { get; set; }
        public DateTime? OutageTime { get; set; }
        public DateTime ScheduledTime { get; set; }
        public double? VoltageLevel { get; set; }
        public int? CallNumber { get; set; }
        public int? AffectedCustomers { get; set; }
        public bool? Assigned { get; set; }
        public CausesType? ResolutionCauses { get; set; }
        public SubcausesType? ResolutionSubcauses { get; set; }
        public ConstructionTypes? ResolutionConstructionTypes { get; set; }
        public MaterialType? ResolutionMaterials { get; set; }

        public int? UserId { get; set; }  // user koji ga je uzeo na resavanje
       // public User User { get; set; }
        public int? CrewId { get; set; }
      //  public Crew Crew { get; set; }
       
    }
}
