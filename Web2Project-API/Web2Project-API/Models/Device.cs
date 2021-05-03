using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class Device
    {
        [Key]
        public int DeviceId { get; set; }
        public string Name { get; set; }
        public DeviceType Type { get; set; }
        public int DeviceCounter { get; set; }  // treba mi za name

        public int LocationId { get; set; }
        public Location Location { get; set; }
        public int? IncidentId { get; set; }
        public Incident Incident { get; set; }
        public int? SafetyDocumentId { get; set; }
        public SafetyDocument SafetyDocument { get; set; }
        public int? WorkPlanId { get; set; }
        public WorkPlan WorkPlan { get; set; }


        public Device()
        {

        }      
        
    }
}
