import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.page.html',
  styleUrls: ['./consult.page.scss'],
})
export class ConsultPage {

  constructor (
    private navCtrl : NavController
    )
        {}

  login(){
    
    this.navCtrl.navigateForward('perfil');
  }
  see(){
   
    this.navCtrl.navigateForward('options');
  }

}
