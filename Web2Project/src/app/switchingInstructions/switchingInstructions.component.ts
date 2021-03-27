import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-switchingInstructions',
  templateUrl: './switchingInstructions.component.html',
  styleUrls: ['./switchingInstructions.component.css']
})
export class SwitchingInstructionsComponent implements OnInit {

  name = 'Angular';
  
  productForm!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]) ,
    });
  }
  ngOnInit() {
  }

  quantities() : FormArray {
    return this.productForm.get("quantities") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
      qty: '',
      price: '',
    })
  }
   
  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }
   
  onSubmit() {
    console.log(this.productForm.value);
  }

}
