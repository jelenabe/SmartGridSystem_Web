using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.DTOs
{
    public class CrewDto
    {
        public string Name { get; set; }
        public List<int> UserIds { get; set; }
    }
}
