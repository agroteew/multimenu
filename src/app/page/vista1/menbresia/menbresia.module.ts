import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenbresiaPageRoutingModule } from './menbresia-routing.module';

import { MenbresiaPage } from './menbresia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenbresiaPageRoutingModule
  ],
  declarations: [MenbresiaPage]
})
export class MenbresiaPageModule {}
