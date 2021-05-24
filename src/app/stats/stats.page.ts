import { Registro } from './../services/registro';
import { DbService } from './../services/db.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
const date = new Date();
@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})

export class StatsPage implements OnInit  {

  @ViewChild(BaseChartDirective) private chart: BaseChartDirective;

  /* chartData = [
    {
      data: [330, 600, 260, 700,100,550,400],
      label: 'Minutos de Estudio'
    }
  ]; */

  data: Registro[] = [];

  chartData = [
    {
      data: [],
      // data: [1, 3, 5, 3],
      label: 'Cycles'
    }
  ];
  chartData2 = [
    {
      data: [],
      label: 'Minutes'
    }
  ];
  chartData3 = [
    {
      data: [],
      label: 'Minutes'
    }
  ];
  chartLabels = [];
  // chartLabels = ['blanco', 'rojo', 'negro', 'azul'];
  chartOptions = {
    responsive: true
    /* scales: {
      ticks: {
        steps: 10,
        stepValue: 10,
        max: Math.max.apply(Math, this.data.map(objeto => objeto.numciclos)),
        min: 0
      }
    } */
  };
  /* public chartColors: any[] = [
    {
      backgroundColor:['#FF7360', '#6FC8CE', '#FAFFF2', '#FFFCC4', '#B9E8E0']
    }]; */
    public chartColors: Array<any> = [
    { // first color
      backgroundColor: 'rgba(225,10,24,0.2)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
    { // second color
      backgroundColor: 'rgba(225,10,24,0.2)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }];
    public chartColors2: Array<any> = [
      { // first color
        backgroundColor: 'rgba(255,100,24,0.2)',
        borderColor: 'rgba(255,100,24,0.2)',
        pointBackgroundColor: 'rgba(255,100,24,0.2)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,100,24,0.2)'
      },
      { // second color
        backgroundColor: 'rgba(255,100,24,0.2)',
        borderColor: 'rgba(255,100,24,0.2)',
        pointBackgroundColor: 'rgba(255,100,24,0.2)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,100,24,0.2)'
      }];
      public chartColors3: Array<any> = [
        { // first color
          backgroundColor: 'rgba(255,200,24,0.2)',
          borderColor: 'rgba(255,200,24,0.2)',
          pointBackgroundColor: 'rgba(255,200,24,0.2)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,200,24,0.2)'
        },
        { // second color
          backgroundColor: 'rgba(255,200,24,0.2)',
          borderColor: 'rgba(255,200,24,0.2)',
          pointBackgroundColor: 'rgba(255,200,24,0.2)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,200,24,0.2)'
        }];

  /*chartLabels = [
    date.getDate()+'/'+date.getMonth(),
    date.getDate()-1+'/'+date.getMonth(),
    date.getDate()-2+'/'+date.getMonth(),
    date.getDate()-3+'/'+date.getMonth(),
    date.getDate()-4+'/'+date.getMonth(),
    date.getDate()-5+'/'+date.getMonth(),
    date.getDate()-6+'/'+date.getMonth()
  ]; */
  constructor(private db: DbService) { }

  ngOnInit()
  {
    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fecthRegistros().subscribe(item => {
          this.data = item;
          this.chartData[0].data = item.map(objeto => objeto.numciclos).reverse();
          this.chartData2[0].data = item.map(objeto => objeto.minsporciclo).reverse();
          this.chartData3[0].data = item.map(objeto => objeto.numciclos * objeto.minsporciclo).reverse();
          this.chartLabels = item.map(objeto => objeto.fecha.toString()).reverse();
          // console.log(item.map(objeto => objeto.fecha.toString()));
          // console.log(this.data.map(objeto => objeto.numciclos));
        });
      }
    });
    this.forceChartRefresh();
  }

  forceChartRefresh() {
    setTimeout(() => {
      // this.chart.refresh();
      this.chart.ngOnChanges({});
    }, 10);

  }

}
