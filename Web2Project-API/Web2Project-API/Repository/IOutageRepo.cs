using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DTOs;
using Web2Project_API.Models;

namespace Web2Project_API.Repository
{
    public interface IOutageRepo
    {
        Task<Call> AddOutage(Call outage);

        void UpdateCall(Call updatedCall);

        IEnumerable<CallDTO> GetAllCalls(int incidentId);
    }
}
