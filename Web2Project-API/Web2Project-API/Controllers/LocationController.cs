using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.Repository;

namespace Web2Project_API.Controllers
{
    [Route("api/location")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly ILocationRepo _locationRepo;

        public LocationController(ILocationRepo locationRepo)
        {
            _locationRepo = locationRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_locationRepo.GetAllLocations());
        }

    }
}
