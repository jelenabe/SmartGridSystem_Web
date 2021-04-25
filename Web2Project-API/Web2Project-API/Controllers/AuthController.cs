﻿using Microsoft.AspNetCore.Mvc;
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
            user.UserType = dto.userType;
            user.Birthday = dto.BirthDate;
            // user.crewId - treba izmeniti



            var createdUser = await _repo.Register(user, dto.Password);

            return StatusCode(201);
        }
    }
}