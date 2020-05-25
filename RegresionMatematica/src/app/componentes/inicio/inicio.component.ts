import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Md5 } from 'ts-md5/dist/md5'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: []
})
export class InicioComponent implements OnInit {

  IdUsuario = '';
  Contra = '';

  constructor(private genService: GeneralService) { }

  ngOnInit() {

  }

  iniciarSesion() {
    this.genService.getUsuario(this.IdUsuario).subscribe((rUsuario: any) => {
      console.log(rUsuario);

      const password = new Md5().appendStr(this.Contra).end();

      if (password === rUsuario.contra ) {
        this.genService.navegar(['menu-principal']);
      } else {
        alert('Contraseña incorrecta');
      }
    });
  }

}
