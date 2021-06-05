export class WorkRequest{

    workRequestId: number;
    status: number;
    createdByUserId: number;
    changedByUserId: number;
    incidentId: number;
    locationId: number;
    workPlanId: number;
    company: string;
    createdOn: Date;
    dateOfTheChange: Date;
    emergensy: boolean;
    endDate: Date;
    equipment: string;
    historyType: number;
    notes: string;
    phone: string;
    picture: string;
    purpose: string;
    startDate: Date;
    type: number;
}
