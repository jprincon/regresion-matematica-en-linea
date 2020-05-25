import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

// %%%%%%% Angular Routing %%%%%%%
import { routingModule } from './app.router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercaComponent,
    MenuPrincipalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
