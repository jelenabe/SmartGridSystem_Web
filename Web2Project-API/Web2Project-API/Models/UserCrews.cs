using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class UserCrews
    {
        public int UserId { get; set; }
        public User User { get; set; }
         public int CrewId { get; set; }
        public Crew Crew { get; set; }
    }
}
