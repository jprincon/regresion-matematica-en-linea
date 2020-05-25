import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'acerca', component: AcercaComponent },

  { path: 'menu-principal', component: MenuPrincipalComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const routingModule = RouterModule.forRoot(routes, {useHash: true});
