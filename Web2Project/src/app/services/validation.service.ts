import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateAll(formGroup: FormGroup) {         
    Object.keys(formGroup.controls).forEach(field => { const control = formGroup.get(field);
        if (control instanceof FormControl) { 

          control.markAsTouched({ onlySelf: true });

        } else if (control instanceof FormGroup) {    

            this.validateAll(control);  

        }
    });
  }

}
