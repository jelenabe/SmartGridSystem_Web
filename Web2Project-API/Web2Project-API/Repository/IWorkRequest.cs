using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DTOs;
using Web2Project_API.Models;

namespace Web2Project_API.Repository
{
    public interface IWorkRequest
    {
        Task<ActionResult<IEnumerable<object>>> GetAllWorkRequests();
        Task<ActionResult<IEnumerable<object>>> GetAllWorkRequestsById(int id);
        Task<ActionResult<object>> GetWorkRequestById(int id);
        WorkRequest AddWorkRequest(WorkRequest workRequest);
        Task<ActionResult<object>> ModyfieWorkRequest(WorkRequest workRequest, int id);
        void DeleteWorkRequest(int Id);
    }
}
