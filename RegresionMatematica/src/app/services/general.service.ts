import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private RUTA_SERVIDOR = 'http://localhost:5000/datasnap/rest/tregresion/';

  private DS_USUARIO = 'Usuario';
  private DS_USUARIOS = 'Usuarios';

  constructor(private http: HttpClient,
              private router: Router) { }

  parametro(param: string) {
    return '/' + param;
  }

  navegar(ruta: string[]) {
    this.router.navigate(ruta);
  }

  /* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
     SERVICIOS DEL MÉTODO USUARIO
     CRUD Básico del Usuario
  =========================================================================================================================*/

  getUsuario(IdUsuario: string) {
    const url = this.RUTA_SERVIDOR + this.DS_USUARIO + this.parametro(IdUsuario);

    return this.http.get(url);
  }
}
