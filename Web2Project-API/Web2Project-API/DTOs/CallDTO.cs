using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.Models;

namespace Web2Project_API.DTOs
{
    public class CallDTO
    {
        public int CallId { get; set; }
        public CallReasons Reason { get; set; }
        public string Comment { get; set; }
        public string HazardName { get; set; }
        public int LocationId { get; set; }
        public int ConsumerId { get; set; }
        public int IncidentId { get; set; }
        public LocationDTO Location { get; set; }
        public ConsumerDTO Consumer { get; set; }
        //public IncidentDto Incident { get; set; }

    }
}
