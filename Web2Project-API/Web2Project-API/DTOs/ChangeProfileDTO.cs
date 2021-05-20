using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.DTOs
{
    public class ChangeProfileDTO
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public DateTime Birthday { get; set; }
        public int LocationId { get; set; }
        public string Picture { get; set; }
    }
}
