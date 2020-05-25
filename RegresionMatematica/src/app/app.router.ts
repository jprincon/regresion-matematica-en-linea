import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { AdministradorComponent } from './administrador/administrador/administrador.component';
import { UsuariosComponent } from './administrador/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'acerca', component: AcercaComponent },

  { path: 'menu-principal', component: MenuPrincipalComponent },


  { path: 'administrador', component: AdministradorComponent,
    children: [
      { path: 'usuarios', component: UsuariosComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'usuarios' }
    ]
  },

  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const routingModule = RouterModule.forRoot(routes, {useHash: true});
