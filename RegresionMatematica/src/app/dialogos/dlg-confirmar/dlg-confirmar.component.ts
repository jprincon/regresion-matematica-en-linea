import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dlg-confirmar',
  templateUrl: './dlg-confirmar.component.html',
  styles: []
})
export class DlgConfirmarComponent implements OnInit {

  Titulo = '';
  Mensaje = '';

  constructor(
    public dialogRef: MatDialogRef<DlgConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.Titulo = this.data.Titulo;
    this.Mensaje = this.data.Mensaje;
  }

  Aceptar() {
    this.dialogRef.close(true);
  }

  Cancelar() {
    this.dialogRef.close(false);
  }

}
