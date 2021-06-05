using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.DTOs
{
    public class NotificationDto
    {
        public int NotificationId { get; set; }
        public bool Display { get; set; }
        public string Type { get; set; }

        public NotificationDto()
        {
        }
    }
}
