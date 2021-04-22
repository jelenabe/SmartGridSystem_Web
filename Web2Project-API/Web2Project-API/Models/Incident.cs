using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class Incident
    {
        [Key]
        public int IncidentId { get; set; }
        private String affectedCustomers;
        private bool assignedToYou;
        private DateTime ata;
        private String calls;
        private bool confirmed;
        private DateTime eta;
        private DateTime etr;
        public int? WorkPlanId { get; set; }
        public WorkPlan WorkPlan { get; set;}
        public WorkRequest WorkRequest { get; set; }

        public Nullable<int> CrewId { get; set; }
        public Crew Crew { get; set; }

        public  Call Call { get; set; }

        public IList<IncidentDevices> IncidentsDevices { get; set; }

        private DateTime outageTime;
        private String pictures;
        private int priority;
        private String resolutionCouse;
        private String resolutionConstructionType;
        private DateTime scheduledTime;
        private String resolutionSubCouse;
        private String resolutionMaterial;
        private DocumentType type;
        private DocumentStatus status;
        private int lvl;

        public Incident()
        {
        }

        public string AffectedCustomers { get => affectedCustomers; set => affectedCustomers = value; }
        public bool AssignedToYou { get => assignedToYou; set => assignedToYou = value; }
        public DateTime Ata { get => ata; set => ata = value; }
        public string Calls { get => calls; set => calls = value; }
        public bool Confirmed { get => confirmed; set => confirmed = value; }
        public DateTime Eta { get => eta; set => eta = value; }
        public DateTime Etr { get => etr; set => etr = value; }
        public DateTime OutageTime { get => outageTime; set => outageTime = value; }
        public string Pictures { get => pictures; set => pictures = value; }
        public int Priority { get => priority; set => priority = value; }
        public string ResolutionCouse { get => resolutionCouse; set => resolutionCouse = value; }
        public string ResolutionConstructionType { get => resolutionConstructionType; set => resolutionConstructionType = value; }
        public DateTime ScheduledTime { get => scheduledTime; set => scheduledTime = value; }
        public string ResolutionSubCouse { get => resolutionSubCouse; set => resolutionSubCouse = value; }
        public DocumentType Type { get => type; set => type = value; }
        public DocumentStatus Status { get => status; set => status = value; }
        public int Lvl { get => lvl; set => lvl = value; }
        public string ResolutionMaterial { get => resolutionMaterial; set => resolutionMaterial = value; }
    }
}
