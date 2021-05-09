import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './login/login.guard';
import { DataResolverService } from './services/data-resolver.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canLoad: [LoginGuard]
  },
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then( m => m.TaskPageModule),
    canLoad: [LoginGuard]
  },
  {
    path: 'counter',
    loadChildren: () => import('./counter/counter.module').then( m => m.CounterPageModule),
    canLoad: [LoginGuard]
  },
  { path: 'counter/:id',
    resolve: {
      special: DataResolverService
    },loadChildren: () => import('./counter/counter.module').then( m => m.CounterPageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
