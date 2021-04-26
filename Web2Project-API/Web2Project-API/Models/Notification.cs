using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class Notification
    {
        [Key]
        public int NotificationId { get; set; }
        private DateTime date;
        private String details;
        private bool read;
        private NotificationType type;

        public Notification()
        {
        }

        public DateTime Date { get => date; set => date = value; }
        public string Details { get => details; set => details = value; }
        public bool Read { get => read; set => read = value; }
        public NotificationType Type { get => type; set => type = value; }
    }
}
