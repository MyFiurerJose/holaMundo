import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [  {
      path: 'home',
      loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'contact',
      loadChildren: () => import('../pages/contact/contact.module').then( m => m.ContactPageModule)
    },
    {
      path: 'news',
      loadChildren: () => import('../pages/news/news.module').then( m => m.NewsPageModule)
    },
    {
      path: 'products',
      loadChildren: () => import('../pages/products/products.module').then( m => m.ProductsPageModule)
    },
    {
      path: 'about',
      loadChildren: () => import('../pages/about/about.module').then( m => m.AboutPageModule)
    },
    {
      path: 'entradas',
      loadChildren: () => import('../pages/entradas/entradas.module').then( m => m.EntradasPageModule)
    },
    {
      path: 'qr-profesor',
      loadChildren: () => import('../pages/qr-profesor/qr-profesor.module').then( m => m.QrProfesorPageModule)
    },
    ]
  }];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
