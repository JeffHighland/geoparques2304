import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage{

  constructor (
    private navCtrl : NavController
    )
        {}

  login(){
    
    this.navCtrl.navigateForward('home');
  }
  perim(){
   
    this.navCtrl.navigateForward('perimeter');
  }
  mobil(){
   
    this.navCtrl.navigateForward('mobiliar');
  }

}
