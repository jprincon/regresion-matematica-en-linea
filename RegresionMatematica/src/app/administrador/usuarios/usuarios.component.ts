import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Usuario } from '../../interface/interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  Usuarios: Usuario[] = [];

  constructor(private genService: GeneralService) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.genService.getUsuarios().subscribe((rUsuarios: any) => {
      console.log(rUsuarios);
      this.Usuarios = rUsuarios.Usuarios;
    });
  }

}
