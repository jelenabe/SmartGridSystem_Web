using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class ReportOutage
    {
        private int id;
        private int idConsumer;
        private String comment;
        private String hazard;
        private String reason;
        private String street;
        private String city;
        private int postNumber;

        public ReportOutage()
        {
                
        }
        public int Id { get => id; set => id = value; }
        public int IdConsumer { get => idConsumer; set => idConsumer = value; }
        public string Comment { get => comment; set => comment = value; }
        public string Hazard { get => hazard; set => hazard = value; }
        public string Reason { get => reason; set => reason = value; }
        public string Street { get => street; set => street = value; }
        public string City { get => city; set => city = value; }
        public int PostNumber { get => postNumber; set => postNumber = value; }
    }
}
