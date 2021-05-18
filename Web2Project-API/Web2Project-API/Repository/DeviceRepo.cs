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

            // Name: krece od 1
            int max_count_in_database = 0;
            max_count_in_database = _dbContext.Devices.Max(c => c.DeviceCounter);
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

        public DeviceDTO UpdateDevice(DeviceDTO updated)
        {
            Device updated_device = _mapper.Map<Device>(updated);
            Device old_device = _dbContext.Devices.FirstOrDefault(x => x.DeviceId.Equals(updated_device.DeviceId));

            if (old_device == null)
                throw new Exception($"Device with Id = {updated_device.DeviceId} does not exists!");

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

            _dbContext.SaveChanges();
            return _mapper.Map<DeviceDTO>(old_device);

        }
    }
}
