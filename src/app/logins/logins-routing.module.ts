import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginsPage } from './logins.page';

const routes: Routes = [
  {
    path: '',
    component: LoginsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginsPageRoutingModule {}
