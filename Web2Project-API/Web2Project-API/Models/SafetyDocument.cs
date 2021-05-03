using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class SafetyDocument
    {
        [Key]
        public int SafetyDocumentId { get; set; }
        public string Details { get; set; }
        public string Notes { get; set; }
        public bool OperationCompleted { get; set; }
        public bool TagsRemoved { get; set; }
        public bool GroundingRemoved { get; set; }
        public bool ReadyForService { get; set; }
        public DateTime CreatedTime { get; set; }
        public SafetyDocumentType SafetyDocType { get; set; }
        public SafetyDocumentStatus DocumentStatus { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
        public int WorkPlanId { get; set; }
        public WorkPlan WorkPlan { get; set; }
        public List<Device> Devices { get; set; }
        public List<HistoryOfStateChanges> HistoryOfStateChanges { get; set; }
        public List<MultimediaAttachmentSafetyDocument> MultimediaAttachmentSafetyDocuments { get; set; }

        /*
        public int? MultimediaAnchorID { get; set; }
        public int? StateChangeAnchorID { get; set; }
        public MultimediaAnchor MultimediaAnchor { get; set; }
        public StateChangeAnchor StateChangeAnchor { get; set; }
        */
        

        public SafetyDocument()
        {
        }

        
        
    }
}
