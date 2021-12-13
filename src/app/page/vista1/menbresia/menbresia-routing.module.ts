import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenbresiaPage } from './menbresia.page';

const routes: Routes = [
  {
    path: '',
    component: MenbresiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenbresiaPageRoutingModule {}
