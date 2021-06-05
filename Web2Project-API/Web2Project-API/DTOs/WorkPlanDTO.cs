using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.Models;

namespace Web2Project_API.DTOs
{
    public class WorkPlanDTO
    {
        public int? LocationId { get; set; }
        public int? CrewId { get; set; }
        public int? CreatedByUserId { get; set; }
        public int? ChangedByUserId { get; set; }
        public string Company { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime DateOfTheChange { get; set; }
        public string Details { get; set; }
        public string Equipmet { get ; set ; }
        public HistoryType HistroyType { get; set; }
        public string Instructions { get ; set; }
        public string Notes { get ; set; }
        public string Phone { get; set; }
        public string Pictures { get; set; }
        public string Purpose { get; set; }
        public DocumentStatus Status { get; set; }
        public DocumentType Type { get; set; }
    }
}
