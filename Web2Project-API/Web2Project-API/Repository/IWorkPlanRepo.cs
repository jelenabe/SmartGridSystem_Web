using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.Models;

namespace Web2Project_API.Repository
{
    public interface IWorkPlanRepo
    {
        Task<ActionResult<IEnumerable<object>>> GetAllWorkPlans();
        Task<ActionResult<IEnumerable<object>>> GetAllWorkPlansById(int id);
        Task<ActionResult<object>> GetWorkPlanById(int id);
        WorkPlan AddWorkPlan(WorkPlan workPlan);
        Task<ActionResult<object>> ModyfieWorkPlan(WorkPlan workPlan, int id);
        void DeleteWorkPlan(int Id);
    }
}
