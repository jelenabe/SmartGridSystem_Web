using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class IncidentDevices
    {
        public int IncidentId { get; set; }
        public Incident Incident { get; set; }
        public int DeviceId { get; set; }
        public Device Device { get; set; }
    }
}
