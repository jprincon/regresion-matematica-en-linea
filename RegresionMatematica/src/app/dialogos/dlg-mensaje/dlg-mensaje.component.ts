import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dlg-mensaje',
  templateUrl: './dlg-mensaje.component.html',
  styles: []
})
export class DlgMensajeComponent implements OnInit {

  Titulo = '';
  Mensaje = '';
  Tipo = '';

  constructor(
              public dialogRef: MatDialogRef<DlgMensajeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.Titulo = this.data.Titulo;
    this.Mensaje = this.data.Mensaje;
    this.Tipo = this.data.Tipo;
  }

  cerrar() {
      this.dialogRef.close();
  }

}
