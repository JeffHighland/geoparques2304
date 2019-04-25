import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {

  constructor (
    private navCtrl : NavController
    )
    {}

  login(){
    this.navCtrl.navigateForward('home');
  }
  consult(){
    this.navCtrl.navigateForward('consult');
  }
  register(){
    this.navCtrl.navigateForward('register');
  }

 
 
}
