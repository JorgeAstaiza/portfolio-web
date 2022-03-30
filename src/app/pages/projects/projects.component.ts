import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public estilos = [
    {posicion: 0, valor: 'hideLeft'},
    {posicion: 1, valor: 'prevLeftSecond'},
    {posicion: 2, valor: 'prev'},
    {posicion: 3, valor: 'selected'},
    {posicion: 4, valor: 'next'},
    {posicion: 5, valor: 'nextRightSecond'},
    {posicion: 6, valor: 'hideRight'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  public moveProject(action: string) {
    let valorAnterior: string;
    valorAnterior = '';
    if (action === 'next') {
      if (this.estilos[3].valor !== 'hideRight') {
        for (let i = 0; i < this.estilos.length; i++) {
          switch (this.estilos[i].valor) {
            case 'hideLeft':
              if (this.estilos[i].valor !== this.estilos[i + 1].valor) {
                this.estilos[i].valor = 'prevLeftSecond'
              }
              valorAnterior = 'hideLeft';
              break;
            case 'prevLeftSecond':
              if (valorAnterior !== this.estilos[i].valor) {
                this.estilos[i].valor = 'prev'
              }
              valorAnterior = 'prevLeftSecond';
              break;
            case 'prev':
              this.estilos[i].valor = 'selected'
              break;
            case 'selected':
              this.estilos[i].valor = 'next'
              break;
            case 'next':
              this.estilos[i].valor = 'nextRightSecond'
              break;
            case 'nextRightSecond':
              if (valorAnterior !== this.estilos[i].valor) {
                this.estilos[i].valor = 'hideRight';
              }
              valorAnterior = 'nextRightSecond';
              break;
            case 'hideRight':
              this.estilos[i].valor = 'hideRight'
              break;
            default:
              break;
          }
          
        }
      }
    } else {
      if (this.estilos[3].valor !== 'hideLeft') {
        for (let i = 0; i < this.estilos.length; i++) {
          switch (this.estilos[i].valor) {
            case 'hideLeft':
              this.estilos[i].valor = 'hideLeft';
              valorAnterior = 'hideLeft';
              break;
            case 'prevLeftSecond':
              this.estilos[i].valor = 'hideLeft';
              break;
            case 'prev':
              this.estilos[i].valor = 'prevLeftSecond';
              break;
            case 'selected':
              this.estilos[i].valor = 'prev'
              break;
            case 'next':
              this.estilos[i].valor = 'selected';
              break;
            case 'nextRightSecond':
              if (valorAnterior !== this.estilos[i].valor) {
                this.estilos[i].valor = 'next'
              }
              valorAnterior = 'nextRightSecond';
              break;
            case 'hideRight':
              if (valorAnterior !== this.estilos[i].valor) {
                this.estilos[i].valor = 'nextRightSecond'
              }
              valorAnterior = 'hideRight';
              break;
            }
        }
      }
    }  
  }
}
