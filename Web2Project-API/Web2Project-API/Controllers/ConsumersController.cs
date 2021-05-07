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
        private readonly IConfiguration _config;

        public ConsumersController(IConsumerRepo repo, IConfiguration confing)
        {
            this._repo = repo;
            this._config = confing;
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

            consumer.Location = new Location();
            consumer.Location.Street = modelDto.Street;
            consumer.Location.City = modelDto.City;
            consumer.Location.PostNumber = modelDto.PostNumber;

            var createdConsumer = await _repo.AddConsumer(consumer);

            return StatusCode(201);
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<ActionResult<IEnumerable<object>>> GetConsumer(int id)
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
        public async Task<ActionResult<Consumer>> RemoveConsumer(int consumerId)
        {
            _repo.RemoveConsumer(consumerId);

            return Status(200);
        }

        [HttpPut]
        public async Task<IActionResult> SaveEditConsumer([FromBody] ConsumerDTO modelDto)
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
            consumer.Location = new Location();
            consumer.Location.Street = modelDto.Street;
            consumer.Location.City = modelDto.City;
            consumer.Location.PostNumber = modelDto.PostNumber;

            var createdConsumer = await _repo.SaveEditConsumer(consumer,consumer.ConsumerId);

            return StatusCode(201);

        }

    }
}
