﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.Models;

namespace Web2Project_API.Repository
{
    public interface IWorkPlanRepo
    {
        WorkPlan AddWorkPlan(WorkPlan workPlan);
    }
}
