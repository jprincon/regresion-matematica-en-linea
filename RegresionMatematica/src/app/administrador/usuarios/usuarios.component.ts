import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Usuario } from '../../interface/interface';
import { DialogosService } from '../../services/dialogos.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  Usuarios: Usuario[] = [];

  constructor(private genService: GeneralService,
              private dlgService: DialogosService) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.genService.getUsuarios().subscribe((rUsuarios: any) => {
      console.log(rUsuarios);
      this.Usuarios = rUsuarios.Usuarios;
    });
  }

  agregarUsuario() {
    this.dlgService.DlgUsuario('Crear', '').subscribe((rMensaje: string) => {
      this.dlgService.DlgMensajeInformacion(rMensaje);

      this.obtenerUsuarios();
    });
  }

  editarUsuario(usuario: Usuario) {
    this.dlgService.DlgUsuario('Editar', usuario.idusuario).subscribe((rMensaje: string) => {
      this.dlgService.DlgMensajeInformacion(rMensaje);

      this.obtenerUsuarios();
    });
  }

  eliminarUsuario(usuario: Usuario) {
    this.dlgService.DlgConfirmacion('Confirmación', '¿Está seguro de eliminar éste usuario?').subscribe((rRespuesta: boolean) => {
      if (rRespuesta) {
        this.genService.deleteUsuario(usuario.idusuario).subscribe((rRespuesta2: any) => {

          this.dlgService.DlgMensajeInformacion(rRespuesta2.Respuesta || rRespuesta2.Error);
          this.obtenerUsuarios();
        });
      }
    });
  }

}
