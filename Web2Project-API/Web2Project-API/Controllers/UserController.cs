//using AutoMapper.Configuration;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DTOs;
using Web2Project_API.Models;
using Web2Project_API.Repository;

namespace Web2Project_API.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserRepo _repo;
        private readonly IConfiguration _config;

        public UserController(IUserRepo repo, IConfiguration config)
        {
            this._repo = repo;
            this._config = config;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetInactiveProfiles()
        {
            var users = await _repo.GetInactiveUsers();

            return users;
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<ActionResult<IEnumerable<object>>> ActivateUser(int id)
        {
            var user = await _repo.ActivateUser(id);

            return StatusCode(200);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<ActionResult<IEnumerable<object>>> DeleteUser(int id)
        {
            var user = await _repo.DeleteUser(id);

            return StatusCode(200);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<User>> GetUserById(int id)
        {
            var Consumer = await _repo.GetUserById(id);

            return Consumer;
        }

        [HttpPut]
        public async Task<IActionResult> ChangeProfile([FromBody] ChangeProfileDTO dto)
        {
            var user = new User();
            user.LocationId = dto.LocationId;

            user.Name = dto.Name;
            user.Lastname = dto.Lastname;
            user.Username = dto.Username;
            user.Email = dto.Email;
            user.Picture = dto.Picture;
            
            user.Birthday = dto.Birthday;

            var createdUser = await _repo.ChangeProfile(user, dto.UserId);

            return StatusCode(201);
        }
              
    }
}
