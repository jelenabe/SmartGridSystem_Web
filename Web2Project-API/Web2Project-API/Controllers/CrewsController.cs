using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DTOs;
using Web2Project_API.Repository;

namespace Web2Project_API.Controllers
{
    [Route("api/crew")]
    [ApiController]
    public class CrewsController : Controller
    {
        private readonly ICrewRepo _repo;
        private readonly IConfiguration _config;

        public CrewsController(ICrewRepo repo, IConfiguration confing)
        {
            this._repo = repo;
            this._config = confing;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetCrewMembers()
        {
            var CrewMembers = await _repo.GetAllCrewMembers();

            return CrewMembers;
        }

        [HttpPost]
        public async Task<IActionResult> AddCrew([FromBody] CrewDto model)
        {
            var createdCrew = await _repo.AddCrew(model.Name, model.UserIds);

            return StatusCode(201);
        }

    }


}
