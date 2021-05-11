using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DbConfigurations;
using Web2Project_API.Models;

namespace Web2Project_API.Repository
{
    public class AuthRepo : IAuthRepo
    {
        private readonly ModelDbContext _context;

        public AuthRepo(ModelDbContext context)
        {
            this._context = context;
        }

        public void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task<User> Login(string email, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Email == email);

            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
            {
                return null;
            }

            return user;
        }

        public async Task<User> Register(User user, string password)
        {
            User registrationUser = new User();

            registrationUser.Name = user.Name;
            registrationUser.Lastname = user.Lastname;
            registrationUser.Username = user.Username;
            registrationUser.Email = user.Email;

            CreatePasswordHash(password, out byte[] PasswordHash, out byte[] PasswordSalt);

            registrationUser.PasswordHash = PasswordHash;
            registrationUser.PasswordSalt = PasswordSalt;

            Location location = new Location();
            location.City = user.Location.City;
            location.Street = user.Location.Street;
            location.PostNumber = user.Location.PostNumber;
            location.Lat = "0";
            location.Lon = "0";

            await _context.Locations.AddAsync(location);
            await _context.SaveChangesAsync();

            registrationUser.LocationId = location.LocationId;
            registrationUser.Picture = user.Picture;
            registrationUser.UserType = user.UserType;

            if(registrationUser.UserType == UserType.CREW_MEMBER)
            {
                //registrationUser.UserCrews = null; //dodati ekipu kojoj pripada
            }

            registrationUser.Birthday = user.Birthday;
            registrationUser.Approved = false;

            await _context.Users.AddAsync(registrationUser);
            await _context.SaveChangesAsync();

            return registrationUser;
        }

        public async Task<bool> UserExsist(string username)
        {
            if (await _context.Users.AnyAsync(x => x.Username == username))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var ComputedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < ComputedHash.Length; i++)
                {
                    if (ComputedHash[i] != passwordHash[i])
                    {
                        return false;
                    }
                }
            }
            return true;
        }
    }
}
