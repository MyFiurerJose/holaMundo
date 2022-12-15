import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.page.html',
  styleUrls: ['./entradas.page.scss'],
})
export class EntradasPage implements OnInit {

  pageTitle = 'Registro de Asistencias';
  isNotHome = true;

  entradas: Array<{
    fecha: string,
    fechaTexto: string,
    rut: string,
    nombre: string,
    correo: string,
  }>

  constructor() { 
    this.cargarEntradas();
  }

  ngOnInit() {
  }

  cargarEntradas() {
    this.entradas = JSON.parse(localStorage.getItem('entradas'));
    this.entradas.sort((item1,item2)=>{
      if(item1.fecha < item2.fecha) return 1;
      if(item1.fecha > item2.fecha) return -1;
      return 0;
    });
  }

}
