import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-maintwo',
  templateUrl: './maintwo.page.html',
  styleUrls: ['./maintwo.page.scss'],
})
export class MaintwoPage{

  constructor (
    private navCtrl : NavController
    )
        {}

  login(){
    
    this.navCtrl.navigateForward('preconsult');
  }
  perimeter(){
   
    this.navCtrl.navigateForward('firstpoint');
  }
  mobiliar(){
    
    this.navCtrl.navigateForward('mobquality');
  }

}
