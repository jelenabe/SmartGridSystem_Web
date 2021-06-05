using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.DTOs
{
    public class FieldDto
    {
        public int FieldId { get; set; }
        public string Name { get; set; }
        public bool Display { get; set; }

        public FieldDto()
        {
        }
    }
}
