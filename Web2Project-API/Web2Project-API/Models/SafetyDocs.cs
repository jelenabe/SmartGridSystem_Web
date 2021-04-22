using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class SafetyDocs
    {
        [Key]
        public int SafetyDocsId { get; set; }
        public int? ChangedByUserId { get; set; }
        public User ChangedByUser { get; set; }
        public int? CreatedByUserId { get; set; }
        public User CreatedByUser { get; set; }

        public int? WorkPlanId { get; set; }
        public WorkPlan WorkPlan { get; set; }

        private bool completed;
        private DateTime createdTime;
        private String devices;
        private String details;
        private bool groundedRemoved;
        private String notes;
        private String phone;
        private String pictures;
        private bool ready;
        private DocumentStatus status;
        private DocumentType type;
        private bool tagsRemoved;
        

        public SafetyDocs()
        {
        }

        public bool Completed { get => completed; set => completed = value; }
        public DateTime CreatedTime { get => createdTime; set => createdTime = value; }
        
        public string Devices { get => devices; set => devices = value; }
        public string Details { get => details; set => details = value; }
        public bool GroundedRemoved { get => groundedRemoved; set => groundedRemoved = value; }
        public string Notes { get => notes; set => notes = value; }
        public string Phone { get => phone; set => phone = value; }
        public string Pictures { get => pictures; set => pictures = value; }
        public bool Ready { get => ready; set => ready = value; }
        public DocumentStatus Status { get => status; set => status = value; }
        public DocumentType Type { get => type; set => type = value; }
        public bool TagsRemoved { get => tagsRemoved; set => tagsRemoved = value; }
        
    }
}
