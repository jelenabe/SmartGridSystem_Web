using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.Models;

namespace Web2Project_API.DTOs
{
    public class ResolutionDTO
    {
        public string ResolutionCauses { get; set; }
        public string ResolutionSubcauses { get; set; }
        public string ResolutionConstructionTypes { get; set; }
        public string ResolutionMaterials { get; set; }

    }
}
