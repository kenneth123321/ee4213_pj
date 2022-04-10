import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospitalListPage } from './hospital-list.page';

const routes: Routes = [
  {
    path: '',
    component: HospitalListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitalListPageRoutingModule {}
