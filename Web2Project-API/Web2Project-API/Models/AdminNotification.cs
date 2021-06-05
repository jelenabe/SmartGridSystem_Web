using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class AdminNotification
    {
        [Key]
        public int NotificationId { get; set; }

        public string Type { get; set; }

        public bool Display { get; set; }

        public AdminNotification()
        {
        }
    }
}
