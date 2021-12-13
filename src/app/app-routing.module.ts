import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
 
  {
    path: 'portada',
    loadChildren: () => import('./page/inicio/portada/portada.module').then( m => m.PortadaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/inicio/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./page/inicio/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./page/inicio/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'juegos',
    loadChildren: () => import('./page/vista1/juegos/juegos.module').then( m => m.JuegosPageModule)
  },
  {
    path: 'jugadores',
    loadChildren: () => import('./page/vista1/jugadores/jugadores.module').then( m => m.JugadoresPageModule)
  },
  {
    path: 'menbresia',
    loadChildren: () => import('./page/vista1/menbresia/menbresia.module').then( m => m.MenbresiaPageModule)
  },
  
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
