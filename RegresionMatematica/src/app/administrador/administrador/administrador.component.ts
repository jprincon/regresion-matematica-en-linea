import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styles: []
})
export class AdministradorComponent implements OnInit {

  menus: any[] = [
    {
      nombre: 'Usuarios',
      imagen: 'assets/Iconos/Usuario.png',
      descripcion: 'Crear/Editar los usuarios de la aplicación',
      ruta: 'usuarios'
    },
    {
      nombre: 'Proyectos',
      imagen: 'assets/Iconos/Proyecto.png',
      descripcion: 'Crear/Editar los proyectos de la aplicación',
      ruta: 'proyectos'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
