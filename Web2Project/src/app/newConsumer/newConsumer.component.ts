import { Component, OnInit } from '@angular/core';
import { NewConsumerService } from '../services/new-consumer.service';

@Component({
  selector: 'app-newConsumer',
  templateUrl: './newConsumer.component.html',
  styleUrls: ['./newConsumer.component.css']
})
export class NewConsumerComponent implements OnInit {
  model: any= {};

  constructor(private newConsumerService: NewConsumerService) { }

  ngOnInit() {
  }

  save(){
    console.log(this.model);
    this.newConsumerService.save(this.model).subscribe(()=>{
      console.log("Applay changes successfull");
    })
  }

}
