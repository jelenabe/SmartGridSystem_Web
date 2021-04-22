using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class Call
    {
        [Key]
        public int CallId { get; set; }
        private String comment;
        private String hazardName;
        private int hazardPriority;
        private String reason;
        public int? UserId { get; set; }
        public User User { get; set; }
        public int? ConsumerId { get; set; }
        public Consumer Consumer { get; set; }
        public int? IncidentId { get; set; }
        public  Incident Incident { get; set; }

        public Call()
        {

        }
        public string Comment { get => comment; set => comment = value; }
        public string HazardName { get => hazardName; set => hazardName = value; }
        public int HazardPriority { get => hazardPriority; set => hazardPriority = value; }
        public string Reason { get => reason; set => reason = value; }
    }
}
