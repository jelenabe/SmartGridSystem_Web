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

        public void UpdateCall(Call updatedCall)
        {
            Call oldCall = _context.Calls.FirstOrDefault(x => x.CallId.Equals(updatedCall.CallId));

            updatedCall.Location = null;

            if (oldCall == null)
                throw new Exception($"Call with Id = {updatedCall.CallId} does not exists!");

            if (updatedCall.HazardName.Trim().Equals("") || updatedCall.HazardName == null)
                throw new Exception("You have to enter hazard!");

            if (!Enum.IsDefined(typeof(CallReasons), updatedCall.Reason))
                throw new Exception("Undefined call reason!");


            if (_context.Locations.Where(x => x.LocationId.Equals(updatedCall.LocationId)) == null)
                throw new Exception($"Location with id = {updatedCall.LocationId} does not exists!");


            if (_context.Incidents.Where(x => x.IncidentId.Equals(updatedCall.IncidentId)) == null)
                throw new Exception($"Incident with id = {updatedCall.IncidentId} does not exists!");


            oldCall.IncidentId = updatedCall.IncidentId;
            _context.SaveChanges();

        }

    }
}
