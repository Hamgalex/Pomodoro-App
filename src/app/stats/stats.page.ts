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
      label: 'Minutos de Estudio'
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
          this.chartData[0].data = item.map(objeto => objeto.numciclos);
          this.chartLabels = item.map(objeto => objeto.fecha.toString);
          // console.log(this.data.map(objeto => objeto.fecha.toString()));
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
