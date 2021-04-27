import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  selected_operationsCompleted: string;
  selected_tagsRemoved: string;
  selected_groundingRemoved: string;
  selected_readyForService: string;

  constructor() { }

  ngOnInit() {
  }

}
