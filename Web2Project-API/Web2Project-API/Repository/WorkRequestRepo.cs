using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DbConfigurations;
using Web2Project_API.DTOs;
using Web2Project_API.Models;

namespace Web2Project_API.Repository
{
    public class WorkRequestRepo : IWorkRequest
    {
        private readonly ModelDbContext _context;
        private readonly IMapper _mapper;

        public WorkRequestRepo(ModelDbContext dbContext, IMapper mapper)
        {
            _context = dbContext;
            _mapper = mapper;
        }

        public WorkRequest AddWorkRequest(WorkRequest workRequest)
        {

            _context.WorkRequests.Add(workRequest);
            _context.SaveChanges();

            return workRequest;
        }

        public void DeleteIncident(int workRequestId)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<WorkRequestDTO> GetAllWorkRequests()
        {
            throw new NotImplementedException();
        }

        public WorkRequestDTO GetWorkRequestById(int workRequestId)
        {
            throw new NotImplementedException();
        }

        public WorkRequestDTO UpdateWorkRequest(WorkRequestDTO workRequestDTO)
        {
            throw new NotImplementedException();
        }
    }
}
