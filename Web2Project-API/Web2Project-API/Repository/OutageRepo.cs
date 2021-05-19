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
        public async Task<Call> AddOutage(Call outage)
        {
            Call reportOutage = new Call();
            Location location = new Location();

            reportOutage.Comment = outage.Comment;
            reportOutage.HazardName = outage.HazardName;
            reportOutage.Reason = outage.Reason;

           

            reportOutage.ConsumerId = outage.ConsumerId;
            reportOutage.LocationId = outage.LocationId;
            
            await _context.Calls.AddAsync(reportOutage);
            await _context.SaveChangesAsync();
             
            return reportOutage;
        }
    }
}
