using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DbConfigurations;
using Web2Project_API.DTOs;
using Web2Project_API.Models;

namespace Web2Project_API.Repository
{
    public class ConsumerRepo : IConsumerRepo
    {
        private readonly ModelDbContext _context;

        public ConsumerRepo(ModelDbContext context)
        {
            _context = context;
        }
        public async Task<Consumer> AddConsumer(Consumer consumer)
        {
            Consumer consumer1 = new Consumer();
            consumer1.LocationId = consumer.LocationId;

            consumer1.Name = consumer.Name;
            consumer1.Lastname = consumer.Lastname;
            consumer1.Phone = consumer.Phone;
            consumer1.Type = consumer.Type;
            await _context.Consumers.AddAsync(consumer1);
            await _context.SaveChangesAsync();

            return consumer1;
        }

        public async Task<ActionResult<IEnumerable<object>>> GetAllConsumers()
        {
            var consumers = from consumerss in _context.Consumers
                            join location in _context.Locations on consumerss.LocationId equals location.LocationId
                            select new
                            {
                                consumerss.ConsumerId,
                                consumerss.Name,
                                consumerss.Lastname,
                                consumerss.LocationId,
                                location.Street,
                                location.City,
                                location.PostNumber,
                                consumerss.Phone,
                                consumerss.Type,
                            };

            
            return await consumers.ToListAsync();
        }

        public List<Consumer> GetAllConsumersFromLocation(int locationId)
        {
            return _context.Consumers.Include("Location").Where(x => x.LocationId == locationId).ToList();
        }

        public async Task<ActionResult<ConsumerDTO>> GetConsumer(int id)
        {
            var consumer = _context.Consumers.Where(x => x.ConsumerId == id).FirstOrDefault();

            var location = _context.Locations.Where(x => x.LocationId == consumer.LocationId).FirstOrDefault();

            ConsumerDTO returnConsumer = new ConsumerDTO();
            returnConsumer.ConsumerId = consumer.ConsumerId;
            returnConsumer.Name = consumer.Name;
            returnConsumer.Lastname = consumer.Lastname;
            returnConsumer.Phone = consumer.Phone;
            returnConsumer.Type = consumer.Type.ToString();
            returnConsumer.Street = location.Street;
            returnConsumer.City = location.City;
            returnConsumer.PostNumber = location.PostNumber.ToString();
            returnConsumer.LocationId = consumer.LocationId.ToString();

            return returnConsumer;
        }

        public async Task<ActionResult<Consumer>> RemoveConsumer(int id)
        {
            
            var consumer = _context.Consumers.Where(x => x.ConsumerId == id).FirstOrDefault();
            _context.Consumers.Remove(consumer);
            await _context.SaveChangesAsync();
            return consumer;

        }

        public async Task<Consumer> SaveEditConsumer(Consumer consumerparam, int id)
        {
            var consumer = _context.Consumers.Where(x => x.ConsumerId == id).FirstOrDefault();

            consumer.Name = consumerparam.Name;
            consumer.Lastname = consumerparam.Lastname;
            consumer.Phone = consumerparam.Phone;
            consumer.Type = consumerparam.Type;
            consumer.LocationId = consumerparam.LocationId;

            _context.Entry(consumer).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return  consumer;
        }

    }
}
