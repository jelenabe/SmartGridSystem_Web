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
            string eqipment = "";
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
                workPlan.DateOfTheChange = DateTime.Today;
                workPlan.Details = dto.Details;
                foreach (var item in dto.Equipmet)
                {
                    eqipment += item.ToString();
                }
                workPlan.Equipmet = eqipment;
                workPlan.EndDate = dto.EndDate;
                workPlan.Notes = dto.Notes;
                workPlan.Phone = dto.Phone;
                workPlan.Pictures = dto.Pictures;
                workPlan.Purpose = dto.Purpose;
                workPlan.StartDate = dto.StartDate;
                workPlan.Type = dto.Type;
                workPlan.HistroyType = dto.HistroyType;
                workPlan.Instructions = dto.Instructions;

                WorkPlan newWorkPlan = _repo.AddWorkPlan(workPlan);

                return Created("InsertIncident", newWorkPlan);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetAllWorkPlans()
        {
            var workplans = await _repo.GetAllWorkPlans();

            return workplans;
        }

        [HttpGet("minePlans")]
        [Route("{id}")]
        public async Task<ActionResult<IEnumerable<object>>> GetAllWorkPlansById([FromRoute] int id)
        {
            var plans = await _repo.GetAllWorkPlansById(id);

            return plans;
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<object>> GetWorkPlanById([FromRoute] int id)
        {
            var plan = await _repo.GetWorkPlanById(id);

            return plan;
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult UpdateWorkPlan([FromBody] WorkPlanDTO dto, [FromRoute] int id)
        {
            string equipment = "";

            WorkPlan workPlan = new WorkPlan();
            workPlan.ChangedByUserId = dto.ChangedByUserId;
            workPlan.Company = dto.Company;
            workPlan.StartDate = dto.StartDate;
            workPlan.EndDate = dto.EndDate;
            workPlan.CreatedOn = dto.CreatedOn;
            workPlan.Details = dto.Details;
            foreach (var item in dto.Equipmet)
            {
                equipment += item.ToString();
            }
            workPlan.Equipmet = equipment;
            workPlan.HistroyType = dto.HistroyType;
            workPlan.Instructions = dto.Instructions;
            workPlan.Notes = dto.Notes;
            workPlan.Phone = dto.Phone;
            workPlan.Pictures = dto.Pictures;
            workPlan.Purpose = dto.Purpose;
            workPlan.Status = dto.Status;
            workPlan.Type = dto.Type;

            try
            {
                var plan = _repo.ModyfieWorkPlan(workPlan, id);
                return Ok(plan);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteWorkPlan(int id)
        {
            try
            {
                _repo.DeleteWorkPlan(id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
