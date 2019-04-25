import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-preconsult',
  templateUrl: './preconsult.page.html',
  styleUrls: ['./preconsult.page.scss'],
})
export class PreconsultPage{

  constructor (
    private navCtrl : NavController
    )
        {}

  login(){
    
    this.navCtrl.navigateForward('register');
  }
  exist(){
   
    this.navCtrl.navigateForward('perimeter');
  }
  new(){
    
    this.navCtrl.navigateForward('maintwo');
  }

}
