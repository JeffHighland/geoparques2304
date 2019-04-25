import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perimeter',
  templateUrl: './perimeter.page.html',
  styleUrls: ['./perimeter.page.scss'],
})
export class PerimeterPage {

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
