import { Location } from "./location";

export class Device{
    deviceId:number = 0;
    name:string="";
    type:number=0;
    locationId:number=0;
    location:Location;
}

export class SearchDevices{
    type:string="";
    property:string="";
    searchField:string="";
}