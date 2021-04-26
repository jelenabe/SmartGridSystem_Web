using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class Crew
    {
        [Key]
        public int CrewId { get; set; }
        private String name;
        public ICollection<Incident>Incidents { get; set; }
        public ICollection<User> Users { get; set; }
        public ICollection<WorkPlan>WorkPlans { get; set; }
        public Crew()
        {

        }

        public string Name { get => name; set => name = value; }
    }
}
