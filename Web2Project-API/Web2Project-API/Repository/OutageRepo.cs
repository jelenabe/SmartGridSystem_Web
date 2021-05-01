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
            Consumer consumer = new Consumer();

            reportOutage.Comment = outage.Comment;
            reportOutage.Hazard = outage.Hazard;
            reportOutage.Reason = outage.Reason;

            location.Street = outage.Street;
            location.City = outage.City;
            location.PostNumber = outage.PostNumber;

            // Treba popuniti za konsumera.
            // Da li cemo traziti u bazi consumera pa popuniti ili pravimo novog? Zapisala na papir
            //consumer.Name
            consumer.LocationId = location.LocationId;
            reportOutage.IdConsumer = consumer.ConsumerId;
            /*
             * await _context.Users.AddAsync(registrationUser);
            await _context.SaveChangesAsync();
             
             */

            return reportOutage;
        }
    }
}
