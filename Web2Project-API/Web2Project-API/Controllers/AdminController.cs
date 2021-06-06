using AutoMapper.Configuration;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DTOs;
using Web2Project_API.Repository;

namespace Web2Project_API.Controllers
{
    [Route("api/admin")]
    [ApiController]
    public class AdminController : Controller
    {
        private readonly IAdminRepo _repo;

        public AdminController(IAdminRepo repo)
        {
            this._repo = repo;
        }

        [HttpPut("street")]
        public async Task<IActionResult> ApplayPriority([FromBody] StreetDTO dto)
        {
            var locations = await _repo.ApplayPriority(dto);

            return StatusCode(200);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> NotificationSettings(int id,[FromBody] NotificationDto notificationDto)
        {
            var notification= await _repo.NotificationSetting(id, notificationDto.Display);
            return StatusCode(201);
        }

        [HttpPut]
        [Route("field")]
        public async Task<IActionResult> FieldSettings([FromBody] FieldDto fieldDto)
        {
            
            var notification = await _repo.FieldSetting(fieldDto.Display);
            return StatusCode(201);
        }

        [HttpGet]
        [Route("reset")]
        public async Task<IActionResult> ResetAll()
        {
            var reset = await _repo.ResetAllSetting();
            return StatusCode(201);
        }

        [HttpGet]
        [Route("notifications")]
        public async Task<ActionResult<IEnumerable<object>>> GetNotifictions()
        {

            var Notifications = await _repo.GetNotificationSetting();

            return Notifications;
        }


        [HttpGet]
        [Route("fields")]
        public  FieldDto GetFields()
        {
            var fields =  _repo.GetFieldSetting();
            return fields;
        }

    }
}
