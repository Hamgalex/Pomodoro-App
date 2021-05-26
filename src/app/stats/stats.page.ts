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

  data: Registro[] = [];

  // Los datos a mostrar en las gráficas.
  chartData = [
    {
      data: [],
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

  chartOptions = {
    responsive: true
  };

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

  constructor(private db: DbService) { }

  ngOnInit()
  {
    this.db.dbState().subscribe((res) => {
      if(res){ // si ya está lista la BD.
        this.db.fecthRegistros().subscribe(item => {
          this.data = item;
          // pasa los datos en arreglos
          this.chartData[0].data = item.map(objeto => objeto.numciclos).reverse();
          this.chartData2[0].data = item.map(objeto => objeto.minsporciclo).reverse();
          this.chartData3[0].data = item.map(objeto => objeto.numciclos * objeto.minsporciclo).reverse();
          this.chartLabels = item.map(objeto => objeto.fecha.toString()).reverse();
        });
      }
    });
    this.forceChartRefresh(); // hace un refresh al final.
  }

  forceChartRefresh() {
    setTimeout(() => {
      this.chart.ngOnChanges({});
    }, 10);

  }

}
