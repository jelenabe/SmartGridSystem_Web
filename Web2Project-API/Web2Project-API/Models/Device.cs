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
        public int? LocationId { get; set; }
        public Location Location { get; set; }
        private String name;
        private DeviceType type;
        public IList<IncidentDevices> IncidentsDevices { get; set; }
        public Device()
        {

        }      
        public string Name { get => name; set => name = value; }
        public DeviceType Type { get => type; set => type = value; }
    }
}
