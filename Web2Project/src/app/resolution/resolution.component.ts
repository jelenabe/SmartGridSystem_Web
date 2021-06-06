import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Incident } from '../models/incident';
import { Resolution } from '../models/resolution';
import { EnableButtonService } from '../services/enable-button.service';
import { IncidentService } from '../services/incident.service';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-resolution',
  templateUrl: './resolution.component.html',
  styleUrls: ['./resolution.component.css']
})
export class ResolutionComponent implements OnInit {
  subcausesFailure:string[] = ['BURNED_OUT', 'SHORT_CIRCUIT', 'MECHANICAL_FAILURE'];
  subcausesWeather:string[] = ['STORM', 'HURRICANE', 'WIND', 'SNOW', 'LIGHTING', 'HAIL', 'RAIN'];
  subcausesHumanFactor:string[] = ['NO_SUPERVISION', 'BAD_INSTALL'];
  subcauses:string[] = [];

  incidentId: number = 0;
  resolutionId: number = 0;
  loadedResolution: boolean = false;

  submitted = false;

  resolution: Resolution = new Resolution();
  newResolution: Resolution = new Resolution();

  newResolutionForm = new FormGroup({
      causeControl : new FormControl('', Validators.required),
      subcauseControl : new FormControl('', Validators.required),
      constructionControl : new FormControl('', Validators.required),
      materialControl : new FormControl('', Validators.required)
   });

  constructor(private tabMessaging:EnableButtonService, private route:ActivatedRoute,private validationService:ValidationService, private incidentService:IncidentService,  private snackBar: MatSnackBar,
    private router:Router) { }

  ngOnInit() {
    const incidentId = this.route.snapshot.paramMap.get('id');
    if(incidentId && incidentId != "")
    {
      this.tabMessaging.showEdit(+incidentId);    
      this.incidentId = +incidentId;   
      this.loadResolution(+incidentId);
    }
  }

  selectionChangedCause(event:any)
  {
    if(event.value === 'FAILURE')
    {
      this.subcauses = this.subcausesFailure;

    }else if(event.value === 'WEATHER')
    {
      this.subcauses = this.subcausesWeather;

    }else if(event.value === 'HUMAN_FACTOR')
    {
      this.subcauses = this.subcausesHumanFactor;
    }
  }

  get showSubcauses():boolean{

    return (this.subcauses.length > 0);
    
  }

  saveResolution()
  {
    this.submitted = true;

    if(this.newResolutionForm.valid)
    {
          this.newResolution.resolutionCauses = this.newResolutionForm.value.causeControl;
          this.newResolution.resolutionSubcauses = this.newResolutionForm.value.subcauseControl;
          this.newResolution.resolutionConstructionTypes = this.newResolutionForm.value.constructionControl;
          this.newResolution.resolutionMaterials = this.newResolutionForm.value.materialControl;
         
          this.incidentService.newResolutionForIncident(this.incidentId, this.newResolution).subscribe(
            data => {

              this.snackBar.open("Resolution saved successfully" , "", { duration: 2500});
              this.router.navigate(['incident/resolution', data.incidentId])
              },
              error=>{

                this.snackBar.open(error.error);
              
              }
          );

      
    }else
    {
      this.validationService.validateAll(this.newResolutionForm);
    }
  }


  loadResolution(incidentId:number){
    this.incidentService.getResolutionFromIncidentById(incidentId).subscribe(
      data =>{

        this.resolution = data;
        this.loadedResolution = true;
        
        if(this.resolution.resolutionCauses === 'FAILURE')
          {
            this.subcauses = this.subcausesFailure;

          }else if(this.resolution.resolutionCauses === 'WEATHER')
          {
            this.subcauses = this.subcausesWeather;

          }else if(this.resolution.resolutionCauses === 'HUMAN_FACTOR')
          {
            this.subcauses = this.subcausesHumanFactor;
          }
          
        
        this.newResolutionForm.setValue({
          causeControl: this.resolution.resolutionCauses.toString(),
          subcauseControl: this.resolution.resolutionSubcauses.toString(),
          constructionControl: this.resolution.resolutionConstructionTypes.toString(),
          materialControl: this.resolution.resolutionMaterials.toString()
       });
       
      },
      error =>{
       
        //

      }
    );
  }



}
