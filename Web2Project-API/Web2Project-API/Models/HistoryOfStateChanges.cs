using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class HistoryOfStateChanges
    {
        [Key]
        public int HistoryId { get; set; }
        public SafetyDocumentState State { get; set; }
        public DateTime Timestamp { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
        public int SafetyDocumentId { get; set; }
        public SafetyDocument SafetyDocument { get; set; }

    }
}
