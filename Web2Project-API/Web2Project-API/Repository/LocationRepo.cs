using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DbConfigurations;
using Web2Project_API.DTOs;
using Web2Project_API.Models;

namespace Web2Project_API.Repository
{
    public class LocationRepo : ILocationRepo
    {
        private readonly ModelDbContext _context;
        private readonly IMapper _mapper;

        public LocationRepo(ModelDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public IEnumerable<LocationDTO> GetAllLocations()
        {
            return _mapper.Map<List<LocationDTO>>(_context.Locations.ToList());
        }

        public async Task<ActionResult<Location>> GetLocation(int id)
        {
            var location =  _context.Locations.Where(x => x.LocationId == id).FirstOrDefault();
            return location;
        }

    }
}
