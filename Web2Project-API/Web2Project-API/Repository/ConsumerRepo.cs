using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DbConfigurations;
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
            Location location = new Location();
            location.Street= consumer.Location.Street;
            location.City= consumer.Location.City;
            location.PostNumber = consumer.Location.PostNumber;

            await _context.Locations.AddAsync(location);
            await _context.SaveChangesAsync();
            consumer1.LocationId = location.LocationId;

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
                            select new
                            {
                                consumerss.ConsumerId,
                                consumerss.Name,
                                consumerss.Location.Street,
                                consumerss.Location.City,
                                consumerss.Location.PostNumber,
                                consumerss.Phone,
                                consumerss.Type,
                        };

            return await consumers.ToListAsync();

        }

        public async Task<ActionResult<IEnumerable<object>>> GetConsumer(int id)
        {

            var consumer = from consumers in _context.Consumers
                           where consumers.ConsumerId == id
                           select new
                            {
                                consumers.ConsumerId,
                                consumers.Name,
                                consumers.Lastname,
                                consumers.Location.Street,
                                consumers.Location.City,
                                consumers.Location.PostNumber,
                                consumers.Phone,
                                consumers.Type,
                            };

            return await consumer.ToListAsync();
        }

        public async Task<ActionResult<Consumer>> RemoveConsumer(string id)
        {
            
            var consumer = _context.Consumers.Where(x => x.ConsumerId == Int32.Parse(id)).FirstOrDefault();
            _context.Consumers.Remove(consumer);
            await _context.SaveChangesAsync();
            return consumer;

        }

        public async Task<Consumer> SaveEditConsumer(Consumer consumer, int id)
        {
            var consumerr = from consumers in _context.Consumers
                           where consumers.ConsumerId == id
                           select new
                           {
                               consumers.ConsumerId,
                               consumers.Name,
                               consumers.Lastname,
                               consumers.Location.Street,
                               consumers.Location.City,
                               consumers.Location.PostNumber,
                               consumers.Phone,
                               consumers.Type,
                           };
            Consumer c = new Consumer();
            /*
            consumer1.Location.Street = consumer.Location.Street;
            consumer1.Location.City = consumer.Location.City;
            consumer1.Location.PostNumber = consumer.Location.PostNumber;

            await _context.Locations.AddAsync(consumer1.Location);
            await _context.SaveChangesAsync();
            consumer1.LocationId = consumer.Location.LocationId;

            consumer1.Name = consumer.Name;
            consumer1.Lastname = consumer.Lastname;
            consumer1.Phone = consumer.Phone;
            consumer1.Type = consumer.Type;
            await _context.Consumers.AddAsync(consumer1);
            await _context.SaveChangesAsync();

            return consumer1;*/
            return  c;
        }
    }
}
