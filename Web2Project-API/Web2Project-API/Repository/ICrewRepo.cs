﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.Models;

namespace Web2Project_API.Repository
{
    public interface ICrewRepo
    {
        Task<ActionResult<IEnumerable<object>>> GetAllCrewMembers();
        Task<Crew> AddCrew(string crewName,List<int> userIds);
    }
}
