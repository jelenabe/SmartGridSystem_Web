using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Project_API.Models
{
    public class Consumer
    {
        [Key]
        public int ConsumerId { get; set; }
        private String name;
        private String lastname;
        private ConsumerType type;
        public int LocationId { get; set; }
        public Location Location { get; set; }

        private String phone;
        public ICollection<Call> Calls { get; set; }
        public Consumer()
        {

        }
        public string Name { get => name; set => name = value; }
        public string Lastname { get => lastname; set => lastname = value; }
        public ConsumerType Type { get => type; set => type = value; }
        public string Phone { get => phone; set => phone = value; }
    }
}
