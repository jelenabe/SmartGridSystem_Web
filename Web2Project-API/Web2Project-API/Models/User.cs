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
        public int? LocationId { get; set; }
        public Location Location { get; set; }
        public IList<UserCrews> UserCrews { get; set; }
        public ICollection<Call> Calls { get; set; }
        public ICollection<WorkPlan> CreatedWorkPlans { get; set; }
        public ICollection<WorkPlan> ChangedWorkPlans { get; set; }
        public ICollection<SafetyDocs> CreatedSafetyDocs { get; set; }
        public ICollection<SafetyDocs> ChangedSafetyDocs { get; set; }
        public ICollection<WorkRequest> ChangedWorkRequest { get; set; }
        public ICollection<WorkRequest> CreatedWorkRequest { get; set; }


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
    }
}
