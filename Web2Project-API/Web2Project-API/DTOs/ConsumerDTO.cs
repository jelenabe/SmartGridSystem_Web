using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.Models;

namespace Web2Project_API.DTOs
{
    public class ConsumerDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string Phone{ get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public int PostNumber { get; set; }
        public string Type { get; set; }
    }
}
