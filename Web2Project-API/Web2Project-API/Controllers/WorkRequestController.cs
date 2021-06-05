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
                workRequest.Equipment = dto.Equipment;
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
    }
}
