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
    public class UserRepo : IUserRepo
    {
        private readonly ModelDbContext _context;

        public UserRepo(ModelDbContext context)
        {
            this._context = context;
        }

        public async Task<ActionResult<User>> ActivateUser(int id)
        {
            var user = _context.Users.Where(x => x.UserId == id).FirstOrDefault();
            user.Approved = true;

            _context.Entry(user).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task<ActionResult<IEnumerable<object>>> GetInactiveUsers()
        {
            var users = from userr in _context.Users
                        where userr.Approved == false
                        join location in _context.Locations on userr.LocationId equals location.LocationId
                        select new
                        {
                            userr.UserId,
                            userr.Name,
                            userr.Lastname,
                            userr.UserType,
                            userr.Username,
                            userr.Email,
                            location.Street,
                        };

            return await users.ToListAsync();
        }

        public async Task<ActionResult<User>> DeleteUser(int id)
        {

            var user = _context.Users.Where(x => x.UserId == id).FirstOrDefault();
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return user;
        }
        public async Task<ActionResult<User>> GetUserById(int id)
        {
            var user = _context.Users.Where(x => x.UserId == id).FirstOrDefault();

            return user;
        }
        public async Task<User> ChangeProfile(User user, int id)
        {
            var userr = _context.Users.Where(x => x.UserId == id).FirstOrDefault();

            userr.Name = user.Name;
            userr.Lastname = user.Lastname;
            userr.Username = user.Username;
            userr.LocationId = user.LocationId;
            userr.Birthday = user.Birthday;
            userr.Email = user.Email;
            userr.Picture = user.Picture;

            _context.Entry(userr).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return userr;
        }
    }
}
