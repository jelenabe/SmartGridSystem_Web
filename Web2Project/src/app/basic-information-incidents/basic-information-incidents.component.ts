import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Incident } from '../models/incident';
import { EnableButtonService } from '../services/enable-button.service';
import { IncidentService } from '../services/incident.service';
import { ValidationService } from '../services/validation.service';


@Component({
  selector: 'app-basic-information-incidents',
  templateUrl: './basic-information-incidents.component.html',
  styleUrls: ['./basic-information-incidents.component.css']
})
export class BasicInformationIncidentsComponent implements OnInit {

  incidentForm = new FormGroup(
    {
      confirmed: new FormControl(false),
      eta: new FormControl('', Validators.required),  // procenjeno vreme dolaska ekipe na teren
      ata: new FormControl('', Validators.required),  //  pravo vreme dolaska ekipe na teren
      etr: new FormControl('', Validators.required),  // vreme do povratka struje(duration)
      scheduledTime: new FormControl('', Validators.required),  // planirano vreme pocetka rada na incidentu
      outageTime: new FormControl('', Validators.required),  // vreme incidenta
      voltageLevel: new FormControl('', [Validators.required, Validators.min(0)]),
      incidentType: new FormControl('', Validators.required),
      incidentStatus: new FormControl(''),
      assigned: new FormControl('')
    },
    {
      validators:
        [ // ATA, ETA IScheduledTime moraju biti veci od OutageTime:
          this.logicalDateATA,
          this.logicalDateETA,
          this.logicalDateScheduledTime
        ]
    }
  );

  incident: Incident = new Incident();
  //incident_assign: boolean;
  //incident_status: string;

  newIncident = true;
  isLoading: boolean = false;
  incidentId: number = 0;

  affectedConsumers: number = 0;
  numberOfCalls: number = 0;
  priority: number = 0;

  logUser: any;

  constructor(private tabMessaging: EnableButtonService, private route: ActivatedRoute,
    private validation: ValidationService, private incidentService: IncidentService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    const incidentId = this.route.snapshot.paramMap.get('id');
    if (incidentId && incidentId != "") {
      this.tabMessaging.showEdit(+incidentId);  // poziva metodu servisa...koja salje id incidenta svim posmatracima
      this.newIncident = false;
      this.incidentId = +incidentId;
      //this.loadIncident(this.incidentId);
      //this.getNumberOfAffectedConsumers(this.incidentId);
      //this.getNumberOfIncidentCalls(this.incidentId);
    }

  }


  save() {

    if (this.incidentForm.valid) {

      this.incident.confirmed = this.incidentForm.controls['confirmed'].value;
      this.incident.eta = new Date(this.incidentForm.controls['eta'].value);
      this.incident.ata = new Date(this.incidentForm.controls['ata'].value);
      this.incident.etr = new Date();
      this.splitTime(this.incident.etr, this.incidentForm.controls['etr'].value);
      this.incident.scheduledTime = new Date(this.incidentForm.controls['scheduledTime'].value);
      this.incident.outageTime = new Date(this.incidentForm.controls['outageTime'].value);
      this.incident.voltageLevel = +this.incidentForm.controls['voltageLevel'].value;
      this.incident.incidentType = +this.incidentForm.controls['incidentType'].value;

      if (this.incidentForm.controls['assigned'].value == "" || this.incidentForm.controls['assigned'].value == null) {
        this.incident.assigned = false;
        //this.incident.userId = null;  // bice null na back-u
      }
      else {
        this.incident.assigned = this.incidentForm.controls['assigned'].value;
        this.logUser = localStorage.getItem('id');
        if (this.logUser != null) {
          this.incident.userId = this.logUser;
        }
      }

      // ne setuje se sada:
      this.incident.priority = 0;
      this.incident.incidentStatus = 0;
      this.incident.callNumber = 0;
      this.incident.affectedCustomers = 0;


      this.isLoading = true;

      if (this.newIncident) {

        this.incidentService.createNewIncident(this.incident).subscribe(
          data => {
            console.log(data);
            this.snackBar.open("Incident created successfully.", "", { duration: 2500 });
            //this.tabMessaging.showEdit(data.incidentId);
            this.router.navigate(['newIncident/basic-information', data.incidentId])  // OVDE SE PROMENI LINK NA EDIT, TJ. DODA SE ID => POSLE: INDIKATOR DA SE PRESLO NA EDIT

          },
          error => {
            this.isLoading = false;
            if (error.error instanceof ProgressEvent) {
              this.snackBar.open("Server is unreachable!", "", { duration: 2500 });
            } else {

              console.log(error.error);

              this.snackBar.open(error.error);
            }

          }
        )
      } else {

        this.incidentService.updateIncident(this.incident).subscribe(
          data => {
            this.snackBar.open("Incident updated successfully", "", { duration: 2500 });
            this.incident = data;
            this.isLoading = false;

          },
          error => {
            this.isLoading = false;
            if (error.error instanceof ProgressEvent) {

              this.snackBar.open("Server is unreachable!", "", { duration: 2500 });
            } else {

              this.snackBar.open(error.error);
            }


          }
        )


      }

    } else {
      this.validation.validateAll(this.incidentForm);
    }


  }




  logicalDateATA(c: AbstractControl): { [key: string]: any } | null {
    let outageTime = c.get(['outageTime']);
    let ata = c.get(['ata']);

    if (outageTime?.value == "") {
      c.get(['outageTime'])!.setErrors({ invalidDates: true });
    }

    if (ata?.value == "") {
      c.get(['ata'])!.setErrors({ invalidDates: true });
      return { invalidDates: true };
    }

    if (new Date(outageTime!.value) > new Date(ata!.value)) {

      c.get(['outageTime'])!.setErrors({ invalidDates: true });
      c.get(['ata'])!.setErrors({ invalidDates: true });
      return { invalidDates: true };

    } else {
      c.get(['outageTime'])!.setErrors(null);
      c.get(['ata'])!.setErrors(null);
      return null;
    }

  }

  logicalDateETA(c: AbstractControl): { [key: string]: any } | null {
    let outageTime = c.get(['outageTime']);
    let eta = c.get(['eta']);

    if (outageTime?.value == "") {
      c.get(['outageTime'])!.setErrors({ invalidDates: true });
    }

    if (eta?.value == "") {
      c.get(['eta'])!.setErrors({ invalidDates: true });
      return { invalidDates: true };
    }

    if (new Date(outageTime!.value) > new Date(eta!.value)) {

      c.get(['outageTime'])!.setErrors({ invalidDates: true });
      c.get(['eta'])!.setErrors({ invalidDates: true });
      return { invalidDates: true };

    } else {
      c.get(['outageTime'])!.setErrors(null);
      c.get(['eta'])!.setErrors(null);
      return null;
    }

  }

  logicalDateScheduledTime(c: AbstractControl): { [key: string]: any } | null {
    let outageTime = c.get(['outageTime']);
    let scheduledTime = c.get(['scheduledTime']);

    if (outageTime?.value == "") {
      c.get(['outageTime'])!.setErrors({ invalidDates: true });
    }

    if (scheduledTime?.value == "") {
      c.get(['scheduledTime'])!.setErrors({ invalidDates: true });
      return { invalidDates: true };
    }

    if (new Date(scheduledTime!.value) < new Date(outageTime!.value)) {
      c.get(['outageTime'])!.setErrors({ invalidDates: true });
      c.get(['scheduledTime'])!.setErrors({ invalidDates: true });
      return { invalidDates: true };

    } else  // nije greska
    {
      c.get(['outageTime'])!.setErrors(null);
      c.get(['scheduledTime'])!.setErrors(null);
      return null;
    }

  }


  splitTime(etrDate: Date, time: string) {
    let splitted = time.split(":");

    etrDate.setHours(+splitted[0], +splitted[1]);
    console.log(splitted);

  }


}
