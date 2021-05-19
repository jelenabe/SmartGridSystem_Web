using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.DTOs
{
    public class OutageDTO
    {
        public string Comment { get; set; }
        public string Reason { get; set; }
        public string Hazard { get; set; }
        public string ConsumerId { get; set; }
        public string LocationId { get; set; }
    }
}
