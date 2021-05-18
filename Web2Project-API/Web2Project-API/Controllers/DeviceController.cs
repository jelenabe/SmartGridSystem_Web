using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DTOs;
using Web2Project_API.Repository;

namespace Web2Project_API.Controllers
{
    [Route("api/device")]
    [ApiController]
    public class DeviceController : ControllerBase
    {
        private readonly IDeviceRepo _deviceRepo;

        public DeviceController(IDeviceRepo deviceRepo)
        {
            _deviceRepo = deviceRepo;
        }


        [HttpGet]
        public IActionResult Get()
        {
            try { 

                return Ok(_deviceRepo.GetAllDevices());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }


        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                DeviceDTO device = _deviceRepo.GetDeviceById(id);
                return Ok(device);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [HttpPost]
        public IActionResult InsertDevice([FromBody] DeviceDTO device)
        {
            try {

                DeviceDTO newDevice = _deviceRepo.AddDevice(device);
                return Created("InsertDevice", newDevice);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }


        [HttpPut]
        public IActionResult UpdateDevice([FromBody] DeviceDTO device)
        {
            try
            {
                DeviceDTO modified = _deviceRepo.UpdateDevice(device);
                return Ok(modified);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }


        [HttpDelete("{id}")]
        public IActionResult DeleteDevice(int id)
        {
            try
            {
                _deviceRepo.DeleteDevice(id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }

    }
}
