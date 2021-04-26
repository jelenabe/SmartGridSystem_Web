using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.Models;

namespace Web2Project_API.DTOs
{
    public class UserForRegisterDTO
    {
        public string Name {get; set;}
        public string Lastname {get; set;}
        public string Username {get; set;}
        public string Email {get; set;}
        public string Password {get; set;}
        public DateTime BirthDay  {get; set;}
        public string Picture { get; set; }
        public string UserType { get; set; }
        public int crewId { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public int PostNumber { get; set; }
        //public bool CheckEmail { get; set; } // ?!

    }
}
