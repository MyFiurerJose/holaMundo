import { Component, OnInit } from '@angular/core';
import { FormGroup,
  FormControl,
  Validators,
  FormBuilder 
  } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, 
    public alertController: AlertController,
    public navCtrl: NavController) {
    this.formularioRegistro = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
    });
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que rellenar todos los campos, Recuerda que tu Contraseña debe contener minimo 3 caracteres.',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    var usuario = {
      email: f.email,
      password: f.password
  }

  localStorage.setItem("usuario", JSON.stringify(usuario));

  localStorage.setItem('Ingresado', 'true');
  this.navCtrl.navigateRoot('/menu/home');

}

}