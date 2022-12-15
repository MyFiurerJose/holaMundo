import { Component, OnInit } from '@angular/core';
import { FormGroup,
  FormControl,
  Validators,
  FormBuilder 
  } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.page.html',
  styleUrls: ['./logins.page.scss'],
})
export class LoginsPage implements OnInit {


  formularioLogins: FormGroup;

  
  constructor(public fb: FormBuilder, public alertController: AlertController,
    public navCtrl: NavController) { 
    this.formularioLogins = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ]))
    });
  }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogins.value;

    var usuario = JSON.parse(localStorage.getItem("usuario"));

    if(usuario.email == f.email && usuario.password == f.password){
      console.log('Ingresado');
      localStorage.setItem('Ingresado', 'true');
      this.navCtrl.navigateRoot('/menu/home');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste no son correctos.',
        buttons: ['Aceptar']
      });

      await alert.present();

}
}
}
