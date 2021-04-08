import { Component, OnInit } from '@angular/core';
import { NewConsumerService } from '../services/new-consumer.service';

@Component({
  selector: 'app-newConsumer',
  templateUrl: './newConsumer.component.html',
  styleUrls: ['./newConsumer.component.css']
})
export class NewConsumerComponent implements OnInit {
  model: any= {};
  queryString: string= "";
  params:string[];
  paramsTwo:string[];
  location:string[];

  constructor(private newConsumerService: NewConsumerService) { }

  ngOnInit() {
    this.queryString=window.location.href;
    this.params = this.queryString.split('/')
    this.paramsTwo=this.params[3].split(';');
    this.model.name= this.paramsTwo[2].split('=')[1]
    this.model.lastname = this.paramsTwo[3].split('=')[1]
    this.model.phoneNumber = this.paramsTwo[5].split('=')[1]
    this.location = this.paramsTwo[4].split('=')[1].split('%20')
    this.model.location = this.location[0] +' '+ this.location[1] + ' '+this.location[2] + ' '+this.location[3]
    this.model.type = this.paramsTwo[6].split('=')[1]
  }

  save(){
    console.log(this.model);
    this.newConsumerService.save(this.model).subscribe(()=>{
      console.log("Applay changes successfull");
    })
  }

}
