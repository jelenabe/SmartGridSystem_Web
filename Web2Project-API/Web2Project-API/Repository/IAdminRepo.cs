using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DTOs;
using Web2Project_API.Models;

namespace Web2Project_API.Repository
{
    public interface IAdminRepo
    {
        Task<ActionResult<IEnumerable<object>>> ApplayPriority(string priorities);
        Task<ActionResult<object>> NotificationSetting(int id, bool display);
        Task<ActionResult<object>> FieldSetting(bool display);
        Task<ActionResult<object>> ResetAllSetting();

        Task<ActionResult<IEnumerable<object>>> GetNotificationSetting();
        FieldDto GetFieldSetting();

    }
}
