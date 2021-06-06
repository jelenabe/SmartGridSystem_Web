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

            if (user!=null){

                if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                {
                    return null;
                }
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


            registrationUser.LocationId = user.LocationId;
            registrationUser.Picture = user.Picture;
            registrationUser.UserType = user.UserType;

            if(registrationUser.UserType == UserType.CREW_MEMBER)
            {
                //registrationUser.UserCrews = null; //dodati ekipu kojoj pripada
            }
            else if (registrationUser.UserType == UserType.CONSUMER)
            {
                Consumer consumer = new Consumer();
                consumer.Name = registrationUser.Name;
                consumer.Lastname = registrationUser.Lastname;
                consumer.Phone = null;
                consumer.Type = ConsumerType.Commercial;
                consumer.LocationId = user.LocationId;

                await _context.Consumers.AddAsync(consumer);
                await _context.SaveChangesAsync();

                registrationUser.ConsumerId = consumer.ConsumerId;                
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

        public async Task<User> ChangePassword(int id, string oldPassword, string newPassword)
        {
            var user = _context.Users.Where(x => x.UserId == id).FirstOrDefault();
           

            bool isCorrect = VerifyPasswordHash(oldPassword, user.PasswordHash, user.PasswordSalt);

            if (isCorrect)
            {
                CreatePasswordHash(newPassword, out byte[] PasswordHash, out byte[] PasswordSalt);

                user.PasswordHash = PasswordHash;
                user.PasswordSalt = PasswordSalt;


                _context.Entry(user).State = EntityState.Modified;
                _context.SaveChangesAsync();
                return user;

            }
            else
            {
                return null;
            }

           
            
        }
    }
}
