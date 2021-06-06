import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-switchingInstructions',
  templateUrl: './switchingInstructions.component.html',
  styleUrls: ['./switchingInstructions.component.css']
})
export class SwitchingInstructionsComponent implements OnInit {

  name = 'Angular';
  switchingInstructionModel: any = {};

  @Output() newItemEvent = new EventEmitter<any>();

  productForm!: FormGroup;
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {

  }
  ngOnInit() {
  }

  onSubmit(){

    if (this.switchingInstructionModel.instructions == null){
      this.openSnackBar();
    }else
    {
      this.newItemEvent.emit(this.switchingInstructionModel);
      this.openSnackBarSucces();
    }
  }

  openSnackBar() {
    this.snackBar.open('Fileds must be filed!', 'OK', {
      duration: 3000
    });
  }

  openSnackBarSucces(){
    this.snackBar.open('Instructions successfully added!', 'OK', {
      duration: 3000
    });
  }

}
