using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.Models;

namespace Web2Project_API.DTOs
{
    public class WorkRequestDTO
    {
        public DocumentStatus Status { get; set; }
        public int? CreatedByUserId { get; set; }
        public int? ChangedByUserId { get; set; }
        public int? IncidentId { get; set; }
        public int? LocationId { get; set; }
        public int? WorkPlanId { get; set; }
        public String Company { get; set; }
        public DateTime CreatedOn  { get; set; }
        public DateTime DateOfTheChange { get; set; }
        public bool Emergency  { get; set; }
        public DateTime EndDate  { get; set; }
        public List<int> Equipment { get; set; }
        public HistoryType HistoryType { get; set; }
        public String Notes { get; set; }
        public String Phone { get; set; }
        public String Pictures { get; set; }
        public String Purpose { get; set; }
        public DateTime StartDate { get; set; }
        public DocumentType Type { get; set; }
    }
}
