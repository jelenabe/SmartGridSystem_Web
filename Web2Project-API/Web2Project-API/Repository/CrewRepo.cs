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
    public class CrewRepo : ICrewRepo
    {
        private readonly ModelDbContext _context;

        public CrewRepo(ModelDbContext context)
        {
            _context = context;
        }

        public async Task<Crew> AddCrew(string crewName, List<int> userIds)
        {
            Crew crew = new Crew();
            crew.Name = crewName;

            await _context.Crews.AddAsync(crew);
            await _context.SaveChangesAsync();

            foreach (var item in userIds)
            {
                var user = _context.Users.Where(x => x.UserId == item).FirstOrDefault();

                user.CrewId = crew.CrewId;

                _context.Entry(user).State = EntityState.Modified;
                //_context.Users.Update(user);

                await _context.SaveChangesAsync();

            }

            return crew;
        }

        public async Task<ActionResult<IEnumerable<object>>> GetAllCrewMembers()
        {
            //var list = _context.Users.Where(x => x.UserType == UserType.CREW_MEMBER && x.Approved == true).ToListAsync();

            var users = from userss in _context.Users
                        where userss.UserType == UserType.CREW_MEMBER && userss.Approved == true
                        select new
                        {
                            userss.UserId,
                            userss.Name
                        };

            return await users.ToListAsync();
        }

        public async Task<ActionResult<IEnumerable<object>>> GetAllCrews()
        {

            var crews = _context.Crews.ToListAsync();

            return await crews;
        }
    }

}
