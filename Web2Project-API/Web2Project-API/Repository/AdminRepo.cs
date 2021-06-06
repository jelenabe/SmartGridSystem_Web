using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DbConfigurations;
using Web2Project_API.DTOs;
using Web2Project_API.Models;

namespace Web2Project_API.Repository
{
    public class AdminRepo : IAdminRepo
    {
        private readonly ModelDbContext _context;
        private readonly IMapper _mapper;

        public AdminRepo(ModelDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<ActionResult<IEnumerable<object>>> ApplayPriority(StreetDTO dto)
        {
            var locations = _context.Locations.ToList();

            if(dto.Priority1 != null)
            {
                var location = _context.Locations.FirstOrDefault(x => x.LocationId == 2);
                location.Priority = Int32.Parse(dto.Priority1);
                _context.Entry(location).State = EntityState.Modified;
            }
            if (dto.Priority2 != null)
            {
                var location = _context.Locations.FirstOrDefault(x => x.LocationId == 3);
                location.Priority = Int32.Parse(dto.Priority2);
                _context.Entry(location).State = EntityState.Modified;
            }
            if (dto.Priority3 != null)
            {
                var location = _context.Locations.FirstOrDefault(x => x.LocationId == 4);
                location.Priority = Int32.Parse(dto.Priority3);
                _context.Entry(location).State = EntityState.Modified;
            }
            if (dto.Priority4 != null)
            {
                var location = _context.Locations.FirstOrDefault(x => x.LocationId == 5);
                location.Priority = Int32.Parse(dto.Priority4);
                _context.Entry(location).State = EntityState.Modified;
            }
            if (dto.Priority5 != null)
            {
                var location = _context.Locations.FirstOrDefault(x => x.LocationId == 6);
                location.Priority = Int32.Parse(dto.Priority5);
                _context.Entry(location).State = EntityState.Modified;
            }


            await _context.SaveChangesAsync();

            return locations;
        }

        public async Task<ActionResult<object>> FieldSetting(bool display)
        {
            var field = _context.FieldSettings.FirstOrDefault();
            field.Display = display;
            _context.Entry(field).State = EntityState.Modified;

            await _context.SaveChangesAsync();
            return field;
        }

        public FieldDto GetFieldSetting()
        {
            var field = _context.FieldSettings;
            FieldDto returnValue = new FieldDto();
            foreach(var f in field)
            {
                returnValue.FieldId = f.FieldId;
                returnValue.Name = f.Name;
                returnValue.Display = f.Display;
            }
            return returnValue;
        }

        public async Task<ActionResult<IEnumerable<object>>> GetNotificationSetting()
        {
            var notifications = from notific in _context.AdminNotifications
                            select new
                            {
                                notific.NotificationId,
                                notific.Type,
                                notific.Display,
                            };


            return await notifications.ToListAsync();
        }

        public async Task<ActionResult<object>> NotificationSetting(int id, bool display)
        {
            var notification = _context.AdminNotifications.Where(x => x.NotificationId == id).FirstOrDefault();
            notification.Display = display;
            _context.Entry(notification).State = EntityState.Modified;

            await _context.SaveChangesAsync();
            return notification;

        }

        public async Task<ActionResult<object>> ResetAllSetting()
        {
            var notifications = _context.AdminNotifications;
            foreach(var notification in notifications)
            {
                notification.Display = false;
                _context.Entry(notification).State = EntityState.Modified;

               
            }
            await _context.SaveChangesAsync();

            var field = _context.FieldSettings;
            foreach(var f in field)
            {
                f.Display = true;
                _context.Entry(f).State = EntityState.Modified;

                
            }
            await _context.SaveChangesAsync();

            var priorities = _context.Locations;
            foreach (var p in priorities)
            {
                p.Priority = 1;
                _context.Entry(p).State = EntityState.Modified;


            }
            await _context.SaveChangesAsync();
           
            return notifications;
        }
    }
}
