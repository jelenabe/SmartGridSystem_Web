using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.Models;

namespace Web2Project_API.DTOs
{
    public class LocationDTO
    {
        public int LocationId { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public int PostNumber { get; set; }
        public string Lat { get; set; }
        public string Lon { get; set; }
        public int Priority { get; set; }

        /*
        public ICollection<User> Users { get; set; }
        public ICollection<Consumer> Consumers { get; set; }
        public ICollection<Device> Devices { get; set; }
        public ICollection<Call> Calls { get; set; }
        */

    }
}
