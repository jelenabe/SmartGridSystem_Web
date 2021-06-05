using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DTOs;
using Web2Project_API.Models;
using Web2Project_API.Repository;

namespace Web2Project_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkPlanController : ControllerBase
    {
        private readonly IWorkPlanRepo _repo;

        public WorkPlanController(IWorkPlanRepo workPlanRepo)
        {
            _repo = workPlanRepo;
        }

        [HttpPost]
        public IActionResult InsertIncident([FromBody] WorkPlanDTO dto)
        {

            try
            {
                WorkPlan workPlan = new WorkPlan();

                workPlan.Status = dto.Status;
                workPlan.CrewId = dto.CrewId;
                workPlan.ChangedByUserId = dto.ChangedByUserId;
                workPlan.CreatedByUserId = dto.CreatedByUserId;
                workPlan.LocationId = dto.LocationId;
                workPlan.Company = dto.Company;
                workPlan.CreatedOn = dto.CreatedOn;
                workPlan.DateOfTheChange = dto.DateOfTheChange;
                workPlan.Details = dto.Details;
                workPlan.Equipmet = dto.Equipmet;
                workPlan.EndDate = dto.EndDate;
                workPlan.Notes = dto.Notes;
                workPlan.Phone = dto.Phone;
                workPlan.Pictures = dto.Pictures;
                workPlan.Purpose = dto.Purpose;
                workPlan.StartDate = dto.StartDate;
                workPlan.Type = dto.Type;
                workPlan.HistroyType = dto.HistroyType;
                workPlan.Instructions = dto.Instructions;
                workPlan.Equipmet = dto.Equipmet;

                WorkPlan newWorkPlan = _repo.AddWorkPlan(workPlan);

                return Created("InsertIncident", newWorkPlan);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
    }
}
