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

        [HttpGet("AllCrews")]
        public async Task<ActionResult<IEnumerable<object>>> GetAllCrews()
        {
            var AllCrews = await _repo.GetAllCrews();

            return AllCrews;
        }

        [HttpPost]
        public async Task<IActionResult> AddCrew([FromBody] CrewDto model)
        {
            var createdCrew = await _repo.AddCrew(model.Name, model.UserIds);

            return StatusCode(201,createdCrew);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteCrew(int id)
        {
            var deletedCrew = await _repo.DeleteCrew(id);

            return StatusCode(201,deletedCrew);
        }

    }


}
