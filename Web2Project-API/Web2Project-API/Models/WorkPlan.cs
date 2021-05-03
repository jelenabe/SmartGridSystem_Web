using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class WorkPlan
    {
        [Key]
        public int WorkPlanId { get; set; }
        private String company;

        // automatski se popunjava iz baze na osnovu ko je ulogovani korisnik
        public int? CreatedByUserId { get; set; }
        public User CreatedByUser { get; set; }

        //iz liste biramo ko ce da radi 
        public int? CrewId { get; set; }
        public Crew Crew { get; set; }
    
        public Incident Incident { get; set; }

        public WorkRequest WorkRequest { get; set; }
        public int? ChangedByUserId { get; set; }
        public User ChangedByUser { get; set; }

        public SafetyDocument SafetyDoc { get; set; }

        public List<Device> Devices { get; set; }


        private DateTime startDate; 
        private DateTime endDate;
        private DateTime createdOn;
        private DateTime dateOfTheChange;
        private String details;
        private String equipmet;
        private HistoryType histroyType;

        private String instructions;
        public int? LocationId { get; set; }
        public Location Location{ get; set; }
        private String notes;
        private String phone;
        private String pictures;
        private String purpose;
        private DocumentStatus status;
        private DocumentType type;

        

        public WorkPlan()
        {
        }

        public string Company { get => company; set => company = value; }
        public DateTime StartDate { get => startDate; set => startDate = value; }
        public DateTime EndDate { get => endDate; set => endDate = value; }
        public DateTime CreatedOn { get => createdOn; set => createdOn = value; }
        public DateTime DateOfTheChange { get => dateOfTheChange; set => dateOfTheChange = value; }
        public string Details { get => details; set => details = value; }
        public string Equipmet { get => equipmet; set => equipmet = value; }
        public HistoryType HistroyType { get => histroyType; set => histroyType = value; }
        public string Instructions { get => instructions; set => instructions = value; }
        public string Notes { get => notes; set => notes = value; }
        public string Phone { get => phone; set => phone = value; }
        public string Pictures { get => pictures; set => pictures = value; }
        public string Purpose { get => purpose; set => purpose = value; }
        public DocumentStatus Status { get => status; set => status = value; }
        public DocumentType Type { get => type; set => type = value; }
    }
}
