import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
    children: [
      {
        path: 'galeria',
        loadChildren: () => import('../page/vista3/galeria/galeria.module').then( m => m.GaleriaPageModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('../page/vista3/contacto/contacto.module').then( m => m.ContactoPageModule)
      },
      {
        path: 'mensajes',
        loadChildren: () => import('../page/vista3/mensajes/mensajes.module').then( m => m.MensajesPageModule)
      },
      {
        path: '',
        redirectTo: 'galeria',
        pathMatch: 'full'
      }
    ]
  }
]


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
