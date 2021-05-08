import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  public workTime:  number= 25;
  public breakTime: number= 5;
  public cycles:number=4;
  public longBreakTime: number=15;

  data: any[];

  sendData(){
    this.data = [{work: this.workTime,break: this.breakTime,cycles:this.cycles,longBreakTime:this.longBreakTime}];
    this.dataService.setData(this.data);
    this.router.navigateByUrl('/counter/1');
  }

}
