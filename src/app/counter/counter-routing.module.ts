import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounterPage } from './counter.page';

const routes: Routes = [
  {
    path: '',
    component: CounterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CounterPageRoutingModule {}
