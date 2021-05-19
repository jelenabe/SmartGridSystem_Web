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
            var reportOutage = new Call();
            reportOutage.Comment = dto.Comment;
            if (dto.Reason=="1")
            {
                reportOutage.Reason = CallReasons.NO_ELECTRICITY;
            }
            else if (dto.Reason=="2")
            {
                reportOutage.Reason = CallReasons.FAILURE;
            }
            else if (dto.Reason == "3")
            {
                reportOutage.Reason = CallReasons.FLICKERING_LIGHT;
            }
            else if (dto.Reason == "4")
            {
                reportOutage.Reason = CallReasons.ELECTRICITY_BACK;
            }
            else if (dto.Reason == "5")
            {
                reportOutage.Reason = CallReasons.PARTIALLY_LIGHT;
            }
            else if (dto.Reason == "6")
            {
                reportOutage.Reason = CallReasons.PROBLEMS_VOLTAGE;
            }

            reportOutage.HazardName = dto.Hazard;

            if (dto.ConsumerId != null)
            {
                reportOutage.ConsumerId = Int32.Parse(dto.ConsumerId);

            }

            reportOutage.LocationId = Int32.Parse(dto.LocationId);
            

            var createdOutage = await _repo.AddOutage(reportOutage);

            return StatusCode(201);
        }

    }
}
