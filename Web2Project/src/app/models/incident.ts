export class Incident{
    incidentId:number = 0;
    priority:number = 0;
    confirmed:boolean;
    assigned:boolean;
    eta:Date;
    ata:Date;
    etr:Date;
    scheduledTime:Date;
    outageTime:Date;
    voltageLevel:number;
    userId:number;
    crewId:number;
    incidentType:number;
    incidentStatus:number;
    ResolutionCauses:number;
    ResolutionSubcauses:number;
    ResolutionConstructionTypes:number;
    ResolutionMaterials:number;
}