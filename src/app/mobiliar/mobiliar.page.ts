import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mobiliar',
  templateUrl: './mobiliar.page.html',
  styleUrls: ['./mobiliar.page.scss'],
})
export class MobiliarPage {

  constructor (
    private navCtrl : NavController
    )
        {}

  login(){
    
    this.navCtrl.navigateForward('consult');
  }
  perim(){
   
    this.navCtrl.navigateForward('perimeter');
  }
  mobil(){
   
    this.navCtrl.navigateForward('mobiliar');
  }

}
