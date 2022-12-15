import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'logins',
    pathMatch: 'full'
  },
  {
    path: '404',
    loadChildren: () => import('./pages/page404/page404.module').then( m => m.Page404PageModule)
  },
  {
    path: 'under-construction',
    loadChildren: () => import('./pages/under-construction/under-construction.module').then( m => m.UnderConstructionPageModule),
    canActivate: [NoIngresadoGuard]
  },  
  {
    path: 'logins',
    loadChildren: () => import('./logins/logins.module').then( m => m.LoginsPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: '**',
    redirectTo: '404'
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
