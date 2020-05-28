import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styles: []
})
export class ProyectosComponent implements OnInit {

  // 5x^4+2x^3+3x^2-7x+3
  polinomio = [5, 2, 3, -7, 3];
  derivada = [];
  grado = 4;

  constructor() { }

  ngOnInit() {

    // Derivar
    let pol = '';
    let der = '';
    for (let i = 0; i < this.polinomio.length - 1; i++) {

      this.derivada.push(this.polinomio[i] * (this.grado - i));

      pol = pol + this.polinomio[i] + 'x^' + (this.grado - i) + '+';
      der = der + this.derivada[i] + 'x^' + (this.grado - i - 1) + '+';
    }

    console.log(this.polinomio);
    console.log(this.derivada);

    console.log(pol);
    console.log(der);

  }




}
