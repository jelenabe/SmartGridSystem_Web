import { Component, OnInit} from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-pieChart',
  templateUrl: './pieChart.component.html',
  styleUrls: ['./pieChart.component.css']
})
export class PieChartComponent implements OnInit{

  doughnutChartLabels: Label[] = ['WP', 'W0', 'SD'];
  doughnutChartData: MultiDataSet = [
    [30, 20, 50]
  ];
doughnutChartColors : Color[]=[
  {
    borderColor: 'black',
    backgroundColor: ['rgb(128, 130, 103)','rgb(223, 130, 103)','rgb(14, 137, 185)']
  },
];

  doughnutChartType: ChartType = 'doughnut';

  constructor() {
   }

  ngOnInit() {
  }
}
