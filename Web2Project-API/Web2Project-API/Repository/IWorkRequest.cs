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
        IEnumerable<WorkRequestDTO> GetAllWorkRequests();
        WorkRequest AddWorkRequest(WorkRequest workRequest);
        WorkRequestDTO GetWorkRequestById(int workRequestId);
        WorkRequestDTO UpdateWorkRequest(WorkRequestDTO workRequestDTO);
        void DeleteIncident(int workRequestId);
    }
}
