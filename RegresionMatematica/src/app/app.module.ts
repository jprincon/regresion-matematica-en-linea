import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

// %%%%%%% Angular Material %%%%%%%
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// %%%%%%% Angular Routing %%%%%%%
import { routingModule } from './app.router';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { DlgMensajeComponent } from './dialogos/dlg-mensaje/dlg-mensaje.component';
import { AdministradorComponent } from './administrador/administrador/administrador.component';
import { UsuariosComponent } from './administrador/usuarios/usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercaComponent,
    MenuPrincipalComponent,
    DlgMensajeComponent,
    AdministradorComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents: [
    DlgMensajeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
