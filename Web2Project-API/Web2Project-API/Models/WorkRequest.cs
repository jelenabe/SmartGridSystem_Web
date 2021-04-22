using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class WorkRequest
    {
        [Key]
        public int WorkRequestId { get; set; }
        public int? CreatedByUserId { get; set; }
        public User CreatedByUser { get; set; }
        public int? ChangedByUserId { get; set; }
        public User ChangedByUser { get; set; }

        public int? IncidentId { get; set; }
        public Incident Incident { get; set; }
        public int? LocationId { get; set; }
        public Location Location { get; set; }

        private String company;
        private DateTime createdOn;
        private DateTime dateOfTheChange;
        private bool emergency;
        private DateTime endDate;
        private String equipment;
        private HistoryType historyType;
        private String notes;
        private String phone;
        private String pictures;
        private String purpose;
        private DateTime startDate;
        private DocumentType type;
        private DocumentStatus status;
        public int? WorkPlanId { get; set; }
        public WorkPlan WorkPlan { get; set; }

        public WorkRequest()
        {
        }

        public string Company { get => company; set => company = value; }
        public DateTime CreatedOn { get => createdOn; set => createdOn = value; }
        public DateTime DateOfTheChange { get => dateOfTheChange; set => dateOfTheChange = value; }
        public bool Emergency { get => emergency; set => emergency = value; }
        public DateTime EndDate { get => endDate; set => endDate = value; }
        public string Equipment { get => equipment; set => equipment = value; }
        public HistoryType HistoryType { get => historyType; set => historyType = value; }
        public string Notes { get => notes; set => notes = value; }
        public string Phone { get => phone; set => phone = value; }
        public string Pictures { get => pictures; set => pictures = value; }
        public string Purpose { get => purpose; set => purpose = value; }
        public DateTime StartDate { get => startDate; set => startDate = value; }
        public DocumentType Type { get => type; set => type = value; }
        public DocumentStatus Status { get => status; set => status = value; }
    }
}
