import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobquality',
  templateUrl: './mobquality.page.html',
  styleUrls: ['./mobquality.page.scss'],
})
export class MobqualityPage implements OnInit {
  

  cancha = false;
  lampara = false;
  sendero = false;
  basura = false;
  juegos = false;
  calific = false;

  constructor() { }

  ngOnInit() {

  }

  changeEnvironment(event){
    
    console.log("aca: "+ event.target.value );
    if(event.target.value=="cancha"){
      this.cancha=true;
      this.lampara = false;
      this.basura = false;
      this.sendero = false;
      this.juegos = false;
      this.calific = true;
    }
    if(event.target.value=="lamp"){
      this.lampara=true;
      this.cancha=false;
      this.basura = false;
      this.sendero = false;
      this.juegos = false;
      this.calific = true;
    }
    if(event.target.value=="trash"){
      this.basura = true;
      this.lampara=false;
      this.cancha=false;
      this.sendero = false;
      this.juegos = false;
      this.calific = true;
    }
    if(event.target.value=="path"){
      this.sendero = true;
      this.lampara=false;
      this.cancha=false;
      this.basura = false;
      this.juegos = false;
      this.calific = true;
    }
    if(event.target.value=="kids"){
      this.juegos = true;
      this.lampara=false;
      this.cancha=false;
      this.basura = false;
      this.sendero = false;
      this.calific = true;
    }

  }
}
