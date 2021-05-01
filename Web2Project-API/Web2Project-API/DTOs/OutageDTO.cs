﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.DTOs
{
    public class OutageDTO
    {
        public string Comment { get; set; }
        public string Reason { get; set; }
        public string Hazard { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string PhoneNumber { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public int PostNumber { get; set; }
    }
}
