import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CounterPageRoutingModule } from './counter-routing.module';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { CounterPage } from './counter.page';

import { CountdownModule } from 'ngx-countdown';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CounterPageRoutingModule,
    CountdownModule,
    RoundProgressModule
  ],
  declarations: [CounterPage]
})
export class CounterPageModule {}
