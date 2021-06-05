using AutoMapper;
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

        public async Task<ActionResult<object>> GetWorkRequestById(int id)
        {
            var request = _context.WorkRequests.FirstOrDefault(x => x.WorkRequestId == id);
           
            return request;
        }

        public async Task<ActionResult<IEnumerable<object>>> GetAllWorkRequests()
        {
            var requests = _context.WorkRequests.ToList();

            return requests;
        }

        public async Task<ActionResult<IEnumerable<object>>> GetAllWorkRequestsById(int id)
        {
            var requests = _context.WorkRequests.Where(x=> x.CreatedByUserId == id).ToList();

            return requests;
        }

        public async Task<ActionResult<object>> ModyfieWorkRequest(WorkRequest workRequest, int id)
        {
            var request = _context.WorkRequests.FirstOrDefault(x => x.WorkRequestId == id);

            request.ChangedByUserId = workRequest.ChangedByUserId;
            request.Company = workRequest.Company;
            request.StartDate = workRequest.StartDate;
            request.EndDate = workRequest.EndDate;
            request.CreatedOn = workRequest.CreatedOn;
            request.DateOfTheChange = DateTime.Today;
            request.Equipment = workRequest.Equipment;
            request.HistoryType = workRequest.HistoryType;
            request.Notes = workRequest.Notes;
            request.Phone = workRequest.Phone;
            request.Pictures = workRequest.Pictures;
            request.Purpose = workRequest.Phone;
            request.Status = workRequest.Status;
            request.Type = workRequest.Type;
            request.Emergency = workRequest.Emergency;

            _context.Entry(request).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return request;
        }

        public void DeleteWorkRequest(int Id)
        {
            var workRequest = _context.WorkRequests.FirstOrDefault(x => x.WorkRequestId == Id);

            if (workRequest == null)
            {
                throw new Exception($"WorkRequest with id = {Id} dos not exist.");
            }

            _context.WorkRequests.Remove(workRequest);
            _context.SaveChanges();

        }
    }
}
