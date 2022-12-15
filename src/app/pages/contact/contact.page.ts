import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  pageTitle = 'Asistencia en Línea';
  isNotHome = true;

  fecha: string;

  entradas: Array<{
    fecha: string,
    fechaTexto: string,
    rut: string,
    nombre: string,
    correo: string
  }>

  entradaActual: {
    fecha: string,
    fechaTexto: string,
    rut: string,
    nombre: string,
    correo: string
  };

  constructor(public toastController: ToastController) { 

    moment.locale('es');
    this.fecha = moment().format();
    this.cargarEntradas();
  }

  cargarEntradas() {
    var fecha = moment(this.fecha).format('DD-MM-YYYY');

    this.entradas = JSON.parse(localStorage.getItem('entradas'));
    if(this.entradas) {
      var entradaActual = this.entradas.find((elemento)=>{
        return elemento.fecha == fecha;
      });
      if(entradaActual) {
        this.entradaActual = entradaActual;
      }else{
        this.iniciarNuevaEntrada();
      }
    }else{
      this.iniciarNuevaEntrada();
    }
  }

  iniciarNuevaEntrada() {
    var fecha = moment(this.fecha).format('DD-MM-YYYY');
    var dia = moment(this.fecha).format('DD');
    var mes = moment(this.fecha).format('MMMM');
    var year = moment(this.fecha).format('YYYY');

    this.entradaActual = {
      fechaTexto: dia + ' de ' + mes + ' del ' + year,
      fecha: fecha,
      rut: '',
      nombre: '',
      correo: ''
    }
  }

  async guardar(entradaActual: {
    fecha: string,
    fechaTexto: string,
    rut: string,
    nombre: string,
    correo: string
  }) {
    var fecha = moment(this.fecha).format('DD-MM-YYYY');

    if(this.entradas) {
      var item = this.entradas.find((elemento)=>{
        return elemento.fecha == fecha;
      });
      if(item) {
        localStorage.setItem('entradas', JSON.stringify(this.entradas));
      }else{
        this.guardarItem(entradaActual);
      }
    }else{
      this.entradas = [];
      this.guardarItem(entradaActual);
    }

    const toast = await this.toastController.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
  }

  guardarItem(entrada:{fecha: string, fechaTexto: string, rut: string, nombre: string, correo: string}) {
    this.entradas.push(entrada);
    localStorage.setItem('entradas', JSON.stringify(this.entradas));
  }



  ngOnInit() {
  }

}
