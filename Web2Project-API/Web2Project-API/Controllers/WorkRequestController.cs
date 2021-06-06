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
    public class WorkRequestController : ControllerBase
    {
        private readonly IWorkRequest _repo;

        public WorkRequestController(IWorkRequest workRequestRepo)
        {
            _repo = workRequestRepo;
        }

        [HttpPost]
        public IActionResult InsertIncident([FromBody] WorkRequestDTO dto)
        {
            string equipment = "";
            try
            {
                WorkRequest workRequest = new WorkRequest();

                workRequest.Status = dto.Status;
                workRequest.CreatedByUserId = dto.CreatedByUserId;
                workRequest.ChangedByUserId = dto.ChangedByUserId;
                workRequest.IncidentId = dto.IncidentId;
                workRequest.LocationId = dto.LocationId;
                workRequest.WorkPlanId = dto.WorkPlanId;
                workRequest.Company = dto.Company;
                workRequest.CreatedOn = dto.CreatedOn;
                workRequest.DateOfTheChange = dto.DateOfTheChange;
                workRequest.Emergency = dto.Emergency;

                foreach (var item in dto.Equipment)
                {
                    equipment += item.ToString();
                }
                workRequest.Equipment = equipment;

                workRequest.EndDate = dto.EndDate;
                workRequest.HistoryType = dto.HistoryType;
                workRequest.Notes = dto.Notes;
                workRequest.Phone = dto.Phone;
                workRequest.Pictures = dto.Pictures;
                workRequest.Purpose = dto.Purpose;
                workRequest.StartDate = dto.StartDate;
                workRequest.Type = dto.Type;

                WorkRequest newWorkRequest = _repo.AddWorkRequest(workRequest);

                return Created("InsertIncident", newWorkRequest);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetAllWorkRequests()
        {
            var WorkRequests = await _repo.GetAllWorkRequests();

            return WorkRequests;
        }

        [HttpGet("mineRequests")]
        [Route("{id}")]
        public async Task<ActionResult<IEnumerable<object>>> GetAllWorkRequestsById([FromRoute]int id)
        {
            var WorkRequests = await _repo.GetAllWorkRequestsById(id);

            return WorkRequests;
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<object>> GetWorkRequestById([FromRoute] int id)
        {
            var WorkRequest = await _repo.GetWorkRequestById(id);

            return WorkRequest;
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult UpdateWorkRequest([FromBody] WorkRequestDTO dto, [FromRoute] int id)
        {
            string equipment = "";

            WorkRequest workRequest = new WorkRequest();
            workRequest.ChangedByUserId = dto.ChangedByUserId;
            workRequest.Company = dto.Company;
            workRequest.StartDate = dto.StartDate;
            workRequest.EndDate = dto.EndDate;
            workRequest.CreatedOn = dto.CreatedOn;
            foreach (var item in dto.Equipment)
            {
                equipment += item.ToString();
            }
            workRequest.Equipment = equipment;
            workRequest.HistoryType = dto.HistoryType;
            workRequest.Notes = dto.Notes;
            workRequest.Phone = dto.Phone;
            workRequest.Pictures = dto.Pictures;
            workRequest.Purpose = dto.Purpose;
            workRequest.Status = dto.Status;
            workRequest.Type = dto.Type;
            workRequest.Emergency = dto.Emergency;

            try
            {
                var result = _repo.ModyfieWorkRequest(workRequest, id);
                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteWorkRequest(int id)
        {
            try
            {
                _repo.DeleteWorkRequest(id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}
