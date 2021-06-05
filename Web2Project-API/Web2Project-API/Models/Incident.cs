using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class Incident
    {
        [Key]
        public int IncidentId { get; set; }
        public IncidentType IncidentType { get; set; }
        public int? Priority { get; set; }
        public bool Confirmed { get; set; }
        public IncidentStatus IncidentStatus { get; set; }
        public DateTime ETA { get; set; }
        public DateTime? ATA { get; set; }
        public DateTime ETR { get; set; }
        public DateTime? OutageTime { get; set; }
        public DateTime ScheduledTime { get; set; }
        public double? VoltageLevel { get; set; }
        public int? CallNumber { get; set; }  // moze se izvaditi iz liste poziva: Calls.Count
        public int? AffectedCustomers { get; set; }  // moze se izvaditi iz liste uredjaja-lokacije-potrosaci...
        public bool? Assigned { get; set; }  // mozda i ne mora
        public CausesType? ResolutionCauses { get; set; }
        public SubcausesType? ResolutionSubcauses { get; set; }
        public ConstructionTypes? ResolutionConstructionTypes { get; set; }
        public MaterialType? ResolutionMaterials { get; set; }

        public int? UserId { get; set; }  // user koji ga je uzeo na resavanje
        public User User { get; set; }
        public int? CrewId { get; set; }
        public Crew Crew { get; set; }
        public List<Device> Devices { get; set; }
        public List<Call> Calls { get; set; }
        public List<MultimediaAttachmentIncident> MultimediaAttachmentIncidents { get; set; }

        /*-------------------------------------------------*/
        public WorkRequest WorkRequest { get; set; }
        public int? WorkPlanId { get; set; }
        public WorkPlan WorkPlan { get; set; }
        

    }
}
