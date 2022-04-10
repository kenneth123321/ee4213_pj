import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospitalDetailPage } from './hospital-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HospitalDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitalDetailPageRoutingModule {}
