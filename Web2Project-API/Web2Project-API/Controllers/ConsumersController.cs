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
    [Route("api/consumers")]
    [ApiController]
    public class ConsumersController : Controller
    {
        private readonly IConsumerRepo _repo;

        public ConsumersController(IConsumerRepo repo)
        {
            this._repo = repo;
        }

        [HttpPost]
        public async Task<IActionResult> AddConsumer([FromBody] ConsumerDTO modelDto)
        {
            Consumer consumer = new Consumer();
            consumer.Name = modelDto.Name;
            consumer.Lastname = modelDto.Lastname;
            consumer.Phone = modelDto.Phone;
            if (modelDto.Type.Equals("1"))
            {
                consumer.Type = ConsumerType.Residential;
            }
            else
            {
                consumer.Type = ConsumerType.Commercial;
            }

            consumer.LocationId = Int32.Parse(modelDto.LocationId);

            var createdConsumer = await _repo.AddConsumer(consumer);

            return StatusCode(201);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<ConsumerDTO>> GetConsumer(int id)
        {
            var Consumer = await _repo.GetConsumer(id);

            return Consumer;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetAllConsumers()
        {

            var Consumers = await _repo.GetAllConsumers();

            return Consumers;
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<ActionResult<Consumer>> RemoveConsumer(int id)
        {
            await _repo.RemoveConsumer(id);

            return StatusCode(200);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> SaveEditConsumer([FromRoute] int id, [FromBody] ConsumerDTO modelDto)
        {
            Consumer consumer = new Consumer();
            consumer.ConsumerId = id;
            consumer.Name = modelDto.Name;
            consumer.Lastname = modelDto.Lastname;
            consumer.Phone = modelDto.Phone;
            if (modelDto.Type.Equals("Residential"))
            {
                consumer.Type = ConsumerType.Residential;
            }
            else
            {
                consumer.Type = ConsumerType.Commercial;
            }

            consumer.LocationId = Int32.Parse(modelDto.LocationId);

            var createdConsumer = await _repo.SaveEditConsumer(consumer, modelDto.ConsumerId);

            return StatusCode(201);

        }

    }
}
