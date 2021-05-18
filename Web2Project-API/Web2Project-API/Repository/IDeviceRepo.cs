using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DTOs;

namespace Web2Project_API.Repository
{
    public interface IDeviceRepo
    {
        IEnumerable<DeviceDTO> GetAllDevices();
        DeviceDTO AddDevice(DeviceDTO newDevice);
        DeviceDTO GetDeviceById(int deviceId);
        DeviceDTO UpdateDevice(DeviceDTO updated);
        void DeleteDevice(int deviceId);

    }
}
