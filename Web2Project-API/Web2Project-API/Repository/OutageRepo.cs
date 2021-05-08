using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DbConfigurations;
using Web2Project_API.Models;

namespace Web2Project_API.Repository
{
    public class OutageRepo : IOutageRepo
    {
        private readonly ModelDbContext _context;

        public OutageRepo(ModelDbContext context)
        {
            this._context = context;
        }
        public async Task<ReportOutage> AddOutage(ReportOutage outage)
        {
            ReportOutage reportOutage = new ReportOutage();
            Location location = new Location();

            reportOutage.Comment = outage.Comment;
            reportOutage.Hazard = outage.Hazard;
            reportOutage.Reason = outage.Reason;

            location.Street = outage.Street;
            location.City = outage.City;
            location.PostNumber = outage.PostNumber;
            //sacuvaj lokaciju u bazu AKO JE ANONIMNI i naglasiti da je to za consumerID NULL
            //Ako nije anonimni onda na osnovu consumerid nadji njegovu lokaciju

            reportOutage.IdConsumer = outage.IdConsumer;
            reportOutage.Street = location.Street;
            reportOutage.City = location.City;
            reportOutage.PostNumber = location.PostNumber;
            /*
             * await _context.Users.AddAsync(registrationUser);
            await _context.SaveChangesAsync();
             
             */

            return reportOutage;
        }
    }
}
