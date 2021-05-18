using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DTOs;
using Web2Project_API.Models;

namespace Web2Project_API.Repository
{
    public interface ILocationRepo
    {
        Task<ActionResult<Location>> GetLocation(int id);
        IEnumerable<LocationDTO> GetAllLocations();

    }
}
