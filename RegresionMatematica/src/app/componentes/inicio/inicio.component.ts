import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Md5 } from 'ts-md5/dist/md5'
import { DialogosService } from '../../services/dialogos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: []
})
export class InicioComponent implements OnInit {

  IdUsuario = '';
  Contra = '';

  constructor(private genService: GeneralService,
              private dlgService: DialogosService) { }

  ngOnInit() {

  }

  iniciarSesion() {
    this.genService.getUsuario(this.IdUsuario).subscribe((rUsuario: any) => {
      console.log(rUsuario);

      const password = new Md5().appendStr(this.Contra).end();

      if (password === rUsuario.contra ) {
        this.genService.navegar(['menu-principal']);
      } else {
        this.dlgService.DlgMensajeError('Contraseña incorrecta');
      }
    });
  }

}
