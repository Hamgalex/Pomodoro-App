import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './login/login.guard';
// import { DataResolverService } from './services/data-resolver.service';
const routes: Routes = [
  {
    path: '', // al principio te manda al login.
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home', // Redirige a información de Pomodoro.
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'task', // Redirige a página principal.
    loadChildren: () => import('./task/task.module').then( m => m.TaskPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'counter', // Redirige a página del timer.
    loadChildren: () => import('./counter/counter.module').then( m => m.CounterPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'stats', // Redirige a las gráficas.
    loadChildren: () => import('./stats/stats.module').then( m => m.StatsPageModule),
    canActivate: [LoginGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
