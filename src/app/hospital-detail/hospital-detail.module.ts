import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitalDetailPageRoutingModule } from './hospital-detail-routing.module';

import { HospitalDetailPage } from './hospital-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospitalDetailPageRoutingModule
  ],
  declarations: [HospitalDetailPage]
})
export class HospitalDetailPageModule {}
