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
    [Route("api/report")]
    [ApiController]
    public class ReportOutageController : Controller
    {
        private readonly IOutageRepo _repo;
        private readonly IConfiguration _config;

        public ReportOutageController(IOutageRepo repo, IConfiguration config)
        {
            this._repo = repo;
            this._config = config;
        }
        [HttpPost]
        public async Task<IActionResult> Report([FromBody] OutageDTO dto)
        {
            var reportOutage = new ReportOutage();
            reportOutage.Comment = dto.Comment;
            reportOutage.Reason = dto.Reason;
            reportOutage.Hazard = dto.Hazard;
            

            var location = new Location();
            location.City = dto.City;
            location.Street = dto.Street;
            location.PostNumber = dto.PostNumber;

            var consumer = new Consumer();
            consumer.Name = dto.Name;
            consumer.Lastname = dto.Lastname;
            consumer.Phone = dto.PhoneNumber;
            consumer.LocationId = location.LocationId;
            reportOutage.IdConsumer = consumer.ConsumerId;

            var createdOutage = await _repo.AddOutage(reportOutage);

            return StatusCode(201);
        }

    }
}
