using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Web2Project_API.DTOs;
using Web2Project_API.Repository;

namespace Web2Project_API.Controllers
{
    [Route("api/incidents")]
    [ApiController]
    public class IncidentController : ControllerBase
    {
        private readonly IIncidentRepo _incidentRepo;

        public IncidentController(IIncidentRepo incidentRepo)
        {
            _incidentRepo = incidentRepo;
        }


        [HttpGet]       
        public  IActionResult Get()
        {         
            return Ok( _incidentRepo.GetAllIncidents());
        }


        [HttpGet("{id}")]
        public  IActionResult GetById(int id)
        {
            try
            {
                IncidentDto incident = _incidentRepo.GetIncidentById(id);

                return Ok(incident);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]      
        public IActionResult InsertIncident([FromBody] IncidentDto incident)
        {
            try
            {
                IncidentDto newIncident = _incidentRepo.AddIncident(incident);

                return Created("InsertIncident", newIncident);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
          
        }



        [HttpPut]
        public IActionResult UpdateIncident([FromBody] IncidentDto incident)
        {
            
            try
            {
                IncidentDto modified = _incidentRepo.UpdateIncident(incident);

                return Ok(modified);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
          
        }


        [HttpDelete("{id}")]   
        public IActionResult DeleteIncident(int id)
        {
            try
            {
                _incidentRepo.DeleteIncident(id);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }



    }
}
