import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      
      {
        path: 'home',
        loadChildren: () =>
        import('../page/vista1/home/home.module').then(m => m.HomePageModule) 
      },
      {
        path: 'news',
        loadChildren: () =>
        import('../page/vista1/news/news.module').then(m => m.NewsPageModule) 
      },
      {
        path: 'equipos',
        loadChildren: () =>
        import('../page/vista1/equipos/equipos.module').then(m => m.EquiposPageModule) 
      },
      {
        path: 'categorias',
        loadChildren: () =>
        import('../page/vista1/categorias/categorias.module').then(m => m.CategoriasPageModule) 
      },
      {
        path: 'juegos',
        loadChildren: () =>
        import('../page/vista1/juegos/juegos.module').then(m => m.JuegosPageModule) 
      },
      {
        path: 'jugadores',
        loadChildren: () =>
        import('../page/vista1/jugadores/jugadores.module').then(m => m.JugadoresPageModule) 
      },
      {
        path: 'menbresia',
        loadChildren: () =>
        import('../page/vista1/menbresia/menbresia.module').then(m => m.MenbresiaPageModule) 
      },
      
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
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
