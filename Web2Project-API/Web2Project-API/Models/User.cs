using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        private String username;
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        private String name;
        private String lastname;
        private String email;
        private DateTime birthday;
        private bool approved;
        //private bool checkEmal; // da li treba na back-u ?!

        public int LocationId { get; set; }
        public Location Location { get; set; }
        public int? CrewId { get; set; }
        public Crew Crew { get; set; }
        public int ConsumerId { get; set; }
        public Consumer Consumer { get; set; }
        public ICollection<WorkPlan> CreatedWorkPlans { get; set; }
        public ICollection<WorkPlan> ChangedWorkPlans { get; set; }
        public ICollection<SafetyDocument> SafetyDocuments { get; set; }
        public ICollection<Incident> Incidents { get; set; }
        public ICollection<WorkRequest> ChangedWorkRequest { get; set; }
        public ICollection<WorkRequest> CreatedWorkRequest { get; set; }
        public ICollection<HistoryOfStateChanges> HistoryOfStateChanges { get; set; }


        private String picture;
        private UserType userType;

        public User()
        {
        }

        public string Username { get => username; set => username = value; }
        public string Name { get => name; set => name = value; }
        public string Lastname { get => lastname; set => lastname = value; }
        public string Email { get => email; set => email = value; }
        public DateTime Birthday { get => birthday; set => birthday = value; }
        public string Picture { get => picture; set => picture = value; }
        public UserType UserType { get => userType; set => userType = value; }
        public bool Approved { get => approved; set => approved = value; }
    }
}
