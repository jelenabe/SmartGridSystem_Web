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
    }
}
