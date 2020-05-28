import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { retry } from 'rxjs/operators';

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

  // %%%%%%% post-usuario %%%%%%%
  postUsuario(datos: string) {
    const url = this.RUTA_SERVIDOR + this.DS_USUARIO;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(url, datos, {headers}).pipe(
      retry()
    );

  }

  // %%%%%%% get-usuario %%%%%%%
  getUsuario(IdUsuario: string) {
    const url = this.RUTA_SERVIDOR + this.DS_USUARIO + this.parametro(IdUsuario);

    return this.http.get(url).pipe(
      retry()
    );
  }

  // %%%%%%% get-usuarios %%%%%%%
  getUsuarios() {
    const url = this.RUTA_SERVIDOR + this.DS_USUARIOS;

    return this.http.get(url).pipe(
      retry()
    );
  }

  // %%%%%%% put-usuario %%%%%%%
  putUsuario(datos: string) {
    const url = this.RUTA_SERVIDOR + this.DS_USUARIO;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.put(url, datos, {headers}).pipe(
      retry()
    );
  }

  // %%%%%%% delete-usuario %%%%%%%
  deleteUsuario(IdUsuario: string) {
    const url = this.RUTA_SERVIDOR + this.DS_USUARIO + this.parametro(IdUsuario);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.delete(url, {headers}).pipe(
      retry()
    );
  }

}
