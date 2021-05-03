using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class MultimediaAttachmentSafetyDocument
    {
        [Key]
        public int MultimediaAttachmentSafetyDocumentId { get; set; }
        public string Url { get; set; }

        public int SafetyDocumentId { get; set; }
        public SafetyDocument SafetyDocument { get; set; }
    }
}
