using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DbConfigurations;
using Web2Project_API.Models;

namespace Web2Project_API.Repository
{
    public class LocationRepo : ILocationRepo
    {
        private readonly ModelDbContext _context;

        public LocationRepo(ModelDbContext context)
        {
            _context = context;
        }
        public async Task<ActionResult<Location>> GetLocation(int id)
        {
            var location =  _context.Locations.Where(x => x.LocationId == id).FirstOrDefault();
            return location;
        }
    }
}
