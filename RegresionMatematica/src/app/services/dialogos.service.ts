import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DlgMensajeComponent } from '../dialogos/dlg-mensaje/dlg-mensaje.component';

@Injectable({
  providedIn: 'root'
})
export class DialogosService {

  constructor(public dialog: MatDialog) {}

  DlgMensajeInformacion(mensaje: string) {
    const dialogRef = this.dialog.open(DlgMensajeComponent, {
      width: '60%',
      data: {Titulo: 'Información', Mensaje: mensaje, Tipo: 'Informacion'}
    });
  }

  DlgMensajeAdvertencia(mensaje: string) {
    const dialogRef = this.dialog.open(DlgMensajeComponent, {
      width: '60%',
      data: {Titulo: 'Advertencia', Mensaje: mensaje, Tipo: 'Advertencia'}
    });
  }

  DlgMensajeError(mensaje: string) {
    const dialogRef = this.dialog.open(DlgMensajeComponent, {
      width: '60%',
      data: {Titulo: 'Error', Mensaje: mensaje, Tipo: 'Error'}
    });
  }
}
