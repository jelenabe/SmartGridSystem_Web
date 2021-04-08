import { Component, OnInit } from '@angular/core';
import { setLines } from '@angular/material/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  lineChartData: ChartDataSets[] = [
    { data: [10, 15, 40, 5,0,0], label: 'Planned incidents' },
    { data: [50, 70, 50, 80, 4,0], label: 'Unlanned incidents' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgb(0,0,128)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgb(65,105,225)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType : ChartType = 'line';

  constructor() { }

  ngOnInit() {
  }

}
