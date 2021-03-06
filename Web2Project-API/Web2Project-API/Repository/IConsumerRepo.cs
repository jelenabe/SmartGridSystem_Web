using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DTOs;
using Web2Project_API.Models;

namespace Web2Project_API.Repository
{
    public interface IConsumerRepo
    {
        Task<ActionResult<IEnumerable<object>>> GetAllConsumers();
        Task<Consumer> AddConsumer(Consumer consumer);
        Task<ActionResult<ConsumerDTO>> GetConsumer(int id);
        Task<Consumer> SaveEditConsumer(Consumer consumer,int id);
        Task<ActionResult<Consumer>> RemoveConsumer(int id);
        List<Consumer> GetAllConsumersFromLocation(int locationId);
    }
}
