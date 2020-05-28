import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from '../../interface/interface';
import { GeneralService } from '../../services/general.service';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-dlg-usuario',
  templateUrl: './dlg-usuario.component.html',
  styles: []
})
export class DlgUsuarioComponent implements OnInit {

  usuario: Usuario = {
    idusuario: '',
    nombre: '',
    correo: '',
    contra: ''
  };

  Accion = 'Crear';
  IdUsuario = '';

  constructor(
              public dialogRef: MatDialogRef<DlgUsuarioComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private genSerive: GeneralService) {}

  ngOnInit() {
    this.Accion = this.data.Accion;
    this.IdUsuario = this.data.IdUsuario;

    if (this.Accion === 'Editar') {
      this.genSerive.getUsuario(this.IdUsuario).subscribe((rUsuario: Usuario) => {
        this.usuario = rUsuario;
      });
    }
  }

  cerrar() {
  this.dialogRef.close();
  }

  guardar() {
    console.log(this.usuario);
    const password = new Md5().appendStr(this.usuario.contra).end().toString();
    console.log(password);
    this.usuario.contra = password;

    const datos = JSON.stringify(this.usuario);

    if (this.Accion === 'Crear') {
      this.genSerive.postUsuario(datos).subscribe((rRespuesta: any) => {
        console.log(rRespuesta);

        // Cuando termine, debe mostrar un mensaje o salirse
        this.dialogRef.close(rRespuesta.Respuesta || rRespuesta.Error);
      });
    } else {
      this.genSerive.putUsuario(datos).subscribe((rRespuesta: any) => {
        console.log(rRespuesta);

        // Cuando termine, debe mostrar un mensaje o salirse
        this.dialogRef.close(rRespuesta.Respuesta || rRespuesta.Error);
      });
    }
  }

}
