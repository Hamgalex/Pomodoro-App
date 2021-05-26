import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  public workTime= 25;
  public breakTime = 5;
  public cycles = 4;
  public longBreakTime = 15;

  data: any[];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  sendData(){
    // cuando se envían los datos
    this.data = [{work: this.workTime,break: this.breakTime,cycles:this.cycles,longBreakTime:this.longBreakTime}];
    this.dataService.setData(this.data);
    this.router.navigateByUrl('/counter'); // redirige al contador.
  }

}
