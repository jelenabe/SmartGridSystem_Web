using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class Location
    { 
        [Key]
        public int LocationId { get; set; }

        private String city;
        private String street;
        private int postNumber;
        private String lat;
        private String lon;
        private int priority;

        public ICollection<User> Users { get; set; }
        public ICollection<Consumer> Consumers { get; set; }
        public ICollection<Device> Devices { get; set; }
        public ICollection<Call> Calls { get; set; }
        public ICollection<WorkPlan> WorkPlans { get; set; }
        public ICollection<WorkRequest> WorkRequests { get; set; }

        public Location()
        {

        }
        public string City { get => city; set => city = value; }
        public string Street { get => street; set => street = value; }
        public int PostNumber { get => postNumber; set => postNumber = value; }
        public string Lat { get => lat; set => lat = value; }
        public string Lon { get => lon; set => lon = value; }
        public int Priority { get => priority; set => priority = value; }
    }
}
