using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Web2Project_API.DTOs;
using Web2Project_API.Models;
using Web2Project_API.Repository;

namespace Web2Project_API.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IAuthRepo _repo;
        private readonly IConfiguration _config;

        public AuthController(IAuthRepo repo, IConfiguration config)
        {
            this._repo = repo;
            this._config = config;
        }

        [HttpPost]
        [EnableCors("AllowOrigin")]
        public async Task<IActionResult> Register([FromBody]UserForRegisterDTO dto)
        {
            if (!string.IsNullOrEmpty(dto.Username))
            {
                dto.Username = dto.Username.ToLower();
            }

            if (await _repo.UserExsist(dto.Username))
            {
                ModelState.AddModelError("Username", "Username already exists!");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = new User();
            user.Location = new Location();

            user.Name = dto.Name;
            user.Lastname = dto.Lastname;
            user.Username = dto.Username;
            user.Email = dto.Email;
            user.Location.City = "Novi Sad";
            user.Location.Street = "Ulica u Novom Sadu";
            user.Location.PostNumber = 21000;
            user.Picture = dto.Picture;
           
            if(dto.UserType == "Crew Member")
            {
                user.UserType = UserType.CREW_MEMBER;
                // user.crewId - treba izmeniti
            }
            else if (dto.UserType == "Dispatcher")
            {
                user.UserType = UserType.DISPACHER;
            }
            else if (dto.UserType == "Worker")
            {
                user.UserType = UserType.WORKER;
            }
            user.Birthday = dto.BirthDay;

            var createdUser = await _repo.Register(user, dto.Password);

            return StatusCode(201);
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] UserForLoginDto userForLoginDto)
        {
            var userFromRepo = await _repo.Login(userForLoginDto.Email.ToLower(), userForLoginDto.Password);
            if (userFromRepo == null)
                return Unauthorized();

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_config.GetSection("AppSettings:Token").Value);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier,userFromRepo.UserId.ToString()),
                    new Claim(ClaimTypes.Name, userFromRepo.Username)
                }),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha512Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return Ok(new { tokenString, userFromRepo.Email, userFromRepo.UserType, userFromRepo.UserId });
        }
    }
}
