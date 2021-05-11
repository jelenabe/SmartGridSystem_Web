using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.Models;

namespace Web2Project_API.Repository
{
    public interface IUserRepo
    {
         Task<ActionResult<IEnumerable<object>>> GetInactiveUsers();
         Task<ActionResult<User>> ActivateUser(int id);
         Task<ActionResult<User>> DeleteUser(int id);

    }
}
