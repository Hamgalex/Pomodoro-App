import { DataService } from './../services/data.service';
import { DbService } from './../services/db.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownEvent } from 'ngx-countdown';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.page.html',
  styleUrls: ['./counter.page.scss'],
})
export class CounterPage implements OnInit {

  // declaración de variables.

  data: any;
  taskNumber = 0;
  notify: string;

  workTime:  number;
  breakTime: number;
  longBreakTime: number;
  cycles: number;

  configWork = {
    leftTime: 1500,
    format: 'mm:ss',
  };

  configBreak = {
    leftTime: 300,
    format: 'mm:ss',
  };


  configLongBreak={
    leftTime: 300,
    format: 'mm:ss',
  };


  constructor(private router: Router, private db: DbService,
    private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getData();
    // console.log(this.data);
    this.workTime  = this.data[0].work;
    this.breakTime = this.data[0].break;
    this.cycles = this.data[0].cycles;
    this.longBreakTime=this.data[0].longBreakTime;

    // le damos valores a los objetos que ocupa el html
    this.configWork = {
      leftTime: (this.workTime*60),
      format: 'mm:ss',
    };

    this.configBreak = {
      leftTime: (this.breakTime*60),
      format: 'mm:ss',
    };

    this.configLongBreak={
      leftTime: (this.longBreakTime*60),
      format: 'mm:ss',
    };
  }

  playAudio(){
    const audio = new Audio();
    audio.src = './../../../assets/audio/toctoc.mp3';
    audio.load();
    audio.play();
    return true;
  }

  handleEvent(e: CountdownEvent){
    this.notify = `${e.status}`;
    if (this.notify === '3'){ // si da status 3 es que ya va a cambiar de estado.
      this.playAudio();
      this.taskNumber++; // taskNumber es la actividad en la que va el contador.
      if (this.taskNumber===(2*this.cycles)-1){   // si llega al ultimo
        this.taskNumber=0;
        this.storeData(); // se agrega a la BD.
      }
    }
  }

  storeData() {
    this.db.addRegistro(
      this.cycles,
      this.workTime
    ).then(() => {
      this.router.navigateByUrl('/task');
    });
  }

}

