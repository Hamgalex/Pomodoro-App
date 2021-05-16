import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
var date = new Date();
@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})

export class StatsPage implements OnInit  {

 

  chartData = [
    {
      data: [330, 600, 260, 700,100,550,400],
      label: 'Minutos de Estudio'
    }
  ];

  chartLabels = [
    date.getDate()+"/"+date.getMonth(),
    date.getDate()-1+"/"+date.getMonth(),
    date.getDate()-2+"/"+date.getMonth(),
    date.getDate()-3+"/"+date.getMonth(),
    date.getDate()-4+"/"+date.getMonth(),
    date.getDate()-5+"/"+date.getMonth(),
    date.getDate()-6+"/"+date.getMonth()
  ];

  chartOptions = {
    responsive: true
  };
  constructor() { }

  ngOnInit() 
  {
   
  }

}
