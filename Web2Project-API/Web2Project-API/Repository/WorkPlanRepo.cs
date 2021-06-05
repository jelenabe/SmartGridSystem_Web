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
    public class WorkPlanRepo : IWorkPlanRepo
    {
        private readonly ModelDbContext _context;

        public WorkPlanRepo(ModelDbContext dbContext)
        {
            _context = dbContext;
        }
        public WorkPlan AddWorkPlan(WorkPlan workPlan)
        {
            _context.WorkPlans.Add(workPlan);
            _context.SaveChanges();

            return workPlan;
        }

        public async Task<ActionResult<object>> GetWorkPlanById(int id)
        {
            var plan = _context.WorkPlans.FirstOrDefault(x => x.WorkPlanId == id);
            return plan;
        }

        public async Task<ActionResult<IEnumerable<object>>> GetAllWorkPlans()
        {
            var plans = _context.WorkPlans.ToList();

            return plans;
        }

        public async Task<ActionResult<IEnumerable<object>>> GetAllWorkPlansById(int id)
        {
            var plans = _context.WorkPlans.Where(x => x.CreatedByUserId == id).ToList();

            return plans;
        }

        public async Task<ActionResult<object>> ModyfieWorkPlan(WorkPlan workPlan, int id)
        {
            var plan = _context.WorkPlans.FirstOrDefault(x => x.WorkPlanId == id);

            plan.ChangedByUserId = workPlan.ChangedByUserId;
            plan.Company = workPlan.Company;
            plan.StartDate = workPlan.StartDate;
            plan.EndDate = workPlan.EndDate;
            plan.CreatedOn = workPlan.CreatedOn;
            plan.DateOfTheChange = DateTime.Today;
            plan.Details = workPlan.Details;
            plan.Equipmet = workPlan.Equipmet;
            plan.HistroyType = workPlan.HistroyType;
            plan.Instructions = workPlan.Instructions;
            plan.Notes = workPlan.Notes;
            plan.Phone = workPlan.Phone;
            plan.Pictures = workPlan.Pictures;
            plan.Purpose = workPlan.Phone;
            plan.Status = workPlan.Status;
            plan.Type = workPlan.Type;

            _context.Entry(plan).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return plan;
        }

        public void DeleteWorkPlan(int Id)
        {
            var workPlan = _context.WorkPlans.FirstOrDefault(x => x.WorkPlanId == Id);

            if(workPlan == null)
            {
                throw new Exception($"WorkPlan with id = {Id} dos not exist.");
            }

            _context.WorkPlans.Remove(workPlan);
            _context.SaveChanges();

        }
    }
}
