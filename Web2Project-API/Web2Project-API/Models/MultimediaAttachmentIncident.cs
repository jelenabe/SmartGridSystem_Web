using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class MultimediaAttachmentIncident
    {
        [Key]
        public int MultimediaAttachmentId { get; set; }
        public string Url { get; set; }

        public int IncidentId { get; set; }
        public Incident Incident { get; set; }

    }
}
