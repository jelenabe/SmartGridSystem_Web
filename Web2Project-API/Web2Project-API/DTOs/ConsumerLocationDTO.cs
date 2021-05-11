using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.DTOs
{
    public class ConsumerLocationDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string Phone { get; set; }
        public string Type { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string PostNumber { get; set; }
    }
}
