using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class AdminFieldsSettings
    {
        [Key]
        public int FieldId {get; set;}
        public string Name { get; set; }
        public bool Display { get; set; }

        public AdminFieldsSettings()
        {
        }
    }
}
