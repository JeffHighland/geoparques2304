import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  constructor (
    private navCtrl : NavController
    )
        {}

  login(){
    
    this.navCtrl.navigateForward('home');
  }
  preconsult(){
   
    this.navCtrl.navigateForward('preconsult');
  }
  mobil(){
   
    this.navCtrl.navigateForward('mobiliar');
  }

}
