import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    children: [
      {
        path: 'user',
        loadChildren: () =>
        import('../page/vista2/user/user.module').then(m => m.UserPageModule) 
      },
      {
        path: 'account',
        loadChildren: () =>
        import('../page/vista2/account/account.module').then(m => m.AccountPageModule) 
      },
      {
        path: 'jugadores',
        loadChildren: () =>
        import('../page/vista2/jugadores/jugadores.module').then(m => m.JugadoresPageModule) 
      },
      {
        path: 'torneos',
        loadChildren: () =>
        import('../page/vista2/torneos/torneos.module').then(m => m.TorneosPageModule) 
      },
      {
        path: '',
        redirectTo: 'user',
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
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
