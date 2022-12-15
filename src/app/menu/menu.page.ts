import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indiceSeleccionado : number = 0;

  paginas = [
    {
      titulo: 'Home',
      url: '/menu/home',
      icono: 'home'
    },
    {
      titulo: 'Clima',
      url: '/menu/products',
      icono: 'cloud'
    },
    {
      titulo: 'Coversor',
      url: '/menu/news',
      icono: 'cash'
    },
    {
      titulo: 'Asistencia',
      url: '/menu/contact',
      icono: 'calendar'
    },
    {
      titulo: 'Registro Asistencia',
      url: '/menu/entradas',
      icono: 'clipboard'
    },
    {
      titulo: 'QR Profesor',
      url: '/menu/qr-profesor',
      icono: 'qr-code'
    },
    {
      titulo: 'Acerca de',
      url: '/menu/about',
      icono: 'people'
    }

    ]
  constructor(public alertcontroller: AlertController,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  cambiarIndiceSeleccionado(i){
    this.indiceSeleccionado = i;
  }

  async salir(){
    const alert = await this.alertcontroller.create({
      header: 'Salir',
      message: '¿Estás seguro de que quieres salir?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {

          }
        }, {
          text: 'Salir',
          handler: () => {
            localStorage.removeItem('Ingresado');
            this.navCtrl.navigateRoot('/logins');
          }
        }
      ]
    });
    await alert.present();  
  }
}

