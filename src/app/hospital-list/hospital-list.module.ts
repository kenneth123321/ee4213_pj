import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitalListPageRoutingModule } from './hospital-list-routing.module';

import { HospitalListPage } from './hospital-list.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospitalListPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [HospitalListPage]
})
export class HospitalListPageModule {}
