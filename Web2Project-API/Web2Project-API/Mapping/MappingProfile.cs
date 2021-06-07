using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.DTOs;
using Web2Project_API.Models;

namespace Web2Project_API.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Incident, IncidentDto>();
            CreateMap<IncidentDto, Incident>();

            CreateMap<LocationDTO, Location>();
            CreateMap<Location, LocationDTO>();

            CreateMap<DeviceDTO, Device>();
            CreateMap<Device, DeviceDTO>();

            CreateMap<CallDTO, Call>();
            CreateMap<Call, CallDTO>();

        }
    }
}
