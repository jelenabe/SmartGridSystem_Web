using AutoMapper;
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
    public class DeviceRepo : IDeviceRepo
    {
        private readonly ModelDbContext _dbContext;
        private readonly IMapper _mapper;

        public DeviceRepo(ModelDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public DeviceDTO AddDevice(DeviceDTO newDevice)
        {
            if (!Enum.IsDefined(typeof(DeviceType), newDevice.Type))
                throw new Exception("Undefined device type!");

            if (_dbContext.Locations.Any(x => x.LocationId == newDevice.LocationId) == false)
                throw new Exception($"Location with id = {newDevice.LocationId} does not exists!");

            Device device = _mapper.Map<Device>(newDevice);
            device.DeviceId = 0;
            device.Timestamp = DateTime.Now;

            // Name: krece od 1
            int max_count_in_database = 0;
            if (_dbContext.Devices.Count() != 0)
            {
                max_count_in_database = _dbContext.Devices.Max(c => c.DeviceCounter);
            }
            string name = device.Type.ToString().Substring(0, 3);
            int next_count = max_count_in_database + 1;
            device.Name = name + next_count.ToString();
            device.DeviceCounter = next_count;

            _dbContext.Devices.Add(device);
            _dbContext.SaveChanges();

            return _mapper.Map<DeviceDTO>(device);

        }

        public void DeleteDevice(int deviceId)
        {
            Device device = _dbContext.Devices.FirstOrDefault(x => x.DeviceId.Equals(deviceId));

            if (device == null)
                throw new Exception($"Device with Id = {deviceId} does not exists!");

            _dbContext.Devices.Remove(device);
            _dbContext.SaveChanges();

        }

        public IEnumerable<DeviceDTO> GetAllDevices()
        {
            return _mapper.Map<List<DeviceDTO>>(_dbContext.Devices.Include("Location").ToList());
        }

        public DeviceDTO GetDeviceById(int deviceId)
        {
            return _mapper.Map<DeviceDTO>(_dbContext.Devices.Include("Location").FirstOrDefault(x => x.DeviceId == deviceId));
        }

        public IEnumerable<DeviceDTO> SearchDevices(DeviceSearchDTO device_search)
        {
            List<Device> search_devices = new List<Device>();

            if(device_search.SearchField.Trim() == "")
            {
                search_devices = _dbContext.Devices.Include("Location").Where(d =>
                        d.Type == (DeviceType)Enum.Parse(typeof(DeviceType), device_search.Type)
                            ).ToList();
            }
            else  // uneo je nesto u search field
            {
                if (device_search.Property.ToLower().Equals("name"))
                {
                    // name + svi tipovi(4)
                    if (int.Parse(device_search.Type) == 4)
                    {
                        search_devices = _dbContext.Devices.Include("Location").Where(d =>
                            d.Name.ToLower().Contains(device_search.SearchField.Trim().ToLower())
                                ).ToList();
                    }
                    else
                    {
                        // name + odabran tip
                        search_devices = _dbContext.Devices.Include("Location").Where(d =>
                            d.Type == (DeviceType)Enum.Parse(typeof(DeviceType), device_search.Type) && d.Name.ToLower().Contains(device_search.SearchField.Trim().ToLower())
                                ).ToList();
                    }
                }
                else if (device_search.Property.ToLower().Equals("address"))
                {
                    // address + svi tipovi(4)
                    if (int.Parse(device_search.Type) == 4)
                    {
                        search_devices = _dbContext.Devices.Include("Location").Where(d =>
                            d.Location.City.ToLower().Contains(device_search.SearchField.Trim().ToLower()) || d.Location.Street.ToLower().Contains(device_search.SearchField.Trim().ToLower()) || d.Location.PostNumber.ToString().Contains(device_search.SearchField.Trim())
                                ).ToList();
                    }
                    else
                    {
                        // address + odabran tip
                        search_devices = _dbContext.Devices.Include("Location").Where(d =>
                            d.Type == (DeviceType)Enum.Parse(typeof(DeviceType), device_search.Type) && (d.Location.City.ToLower().Contains(device_search.SearchField.Trim().ToLower()) || d.Location.Street.ToLower().Contains(device_search.SearchField.Trim().ToLower()) || d.Location.PostNumber.ToString().Contains(device_search.SearchField.Trim()))
                                ).ToList();
                    }

                }
                else if (device_search.Property.ToLower().Equals("coordinates"))
                {
                    // coordinates + svi tipovi(4)
                    if (int.Parse(device_search.Type) == 4)
                    {
                        search_devices = _dbContext.Devices.Include("Location").Where(d =>
                            d.Location.Lat.ToLower().Contains(device_search.SearchField.Trim().ToLower()) || d.Location.Lon.ToLower().Contains(device_search.SearchField.Trim().ToLower())
                                ).ToList();
                    }
                    else
                    {
                        // coordinates + odabran tip
                        search_devices = _dbContext.Devices.Include("Location").Where(d =>
                            d.Type == (DeviceType)Enum.Parse(typeof(DeviceType), device_search.Type) && (d.Location.Lat.ToLower().Contains(device_search.SearchField.Trim().ToLower()) || d.Location.Lon.ToLower().Contains(device_search.SearchField.Trim().ToLower()))
                                ).ToList();
                    }
                }
                else
                {
                    // id + svi tipovi(4)
                    if (int.Parse(device_search.Type) == 4)
                    {
                        search_devices = _dbContext.Devices.Include("Location").Where(d =>
                            d.DeviceId.ToString().Equals(device_search.SearchField.Trim())
                                ).ToList();
                    }
                    else
                    {
                        // id + odabran tip
                        search_devices = _dbContext.Devices.Include("Location").Where(d =>
                            d.Type == (DeviceType)Enum.Parse(typeof(DeviceType), device_search.Type) && d.DeviceId.ToString().Equals(device_search.SearchField.Trim())
                                ).ToList();
                    }
                }


            }
            

            List<DeviceDTO> search_devices_ret = new List<DeviceDTO>();
            search_devices.ForEach(s => search_devices_ret.Add(_mapper.Map<DeviceDTO>(s)));
            return search_devices_ret;
        }

        public DeviceDTO UpdateDevice(DeviceDTO updated)
        {
            Device updated_device = _mapper.Map<Device>(updated);
            Device old_device = _dbContext.Devices.FirstOrDefault(x => x.DeviceId.Equals(updated_device.DeviceId));

            if (old_device == null)
                throw new Exception($"Device with Id = {updated_device.DeviceId} does not exists!");

            if (updated_device.Timestamp < old_device.Timestamp)
                throw new Exception("You have tried to modify outdated device. Please try again.");

            if (!Enum.IsDefined(typeof(DeviceType), updated_device.Type))
                throw new Exception("Undefined device type!");

            if (_dbContext.Locations.Where(x => x.LocationId.Equals(updated_device.LocationId)) == null)
                throw new Exception($"Location with id = {updated_device.LocationId} does not exists!");

            // sklapam Name updated_device-a:
            string name = updated_device.Type.ToString().Substring(0, 3);
            int count = old_device.DeviceCounter;
            updated_device.Name = name + count.ToString();

            // update:
            old_device.Type = updated_device.Type;
            old_device.Name = updated_device.Name;
            old_device.LocationId = updated_device.LocationId;
            old_device.IncidentId = updated_device.IncidentId;

            _dbContext.SaveChanges();
            return _mapper.Map<DeviceDTO>(old_device);

        }
    }
}
