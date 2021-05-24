import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './services/data-resolver.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    //,canActivate: [LoginGuard]
  },
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then( m => m.TaskPageModule)
    //,canActivate: [LoginGuard]
  },
  {
    path: 'counter',
    loadChildren: () => import('./counter/counter.module').then( m => m.CounterPageModule)
    //,canActivate: [LoginGuard]
  },
  { path: 'counter/:id',
    resolve: {
      special: DataResolverService
    },loadChildren: () => import('./counter/counter.module').then( m => m.CounterPageModule)
  //,canActivate: [LoginGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'stats',
    loadChildren: () => import('./stats/stats.module').then( m => m.StatsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
