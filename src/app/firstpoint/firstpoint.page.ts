import { Component, OnInit } from '@angular/core';
import { Marcador } from '../class/marcador';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-firstpoint',
  templateUrl: './firstpoint.page.html',
  styleUrls: ['./firstpoint.page.scss'],
})
export class FirstpointPage {
  paths : any [] = []; 
  marcadores : Marcador [] = [];
  lat = 4.60972222222;
  lng = -74.0816666667;
  latA : any;
  latB : any;
  lngA : any;
  lngB : any;
  polyline = false;
  polygon = false;
  state = 0;

  constructor(
    private navCtrl : NavController
    )
    
    {

  }

  agregarMarcador(evento){
    console.log(evento);
    console.log(evento.coords.lat);
    console.log(evento.coords.lng);
    const nuevoMarcador = new Marcador(evento.coords.lat, evento.coords.lng);
    this.marcadores.push(nuevoMarcador);
    //Cambiar en el select
    this.polygon=true;

    // codeSelected(){
    //   switch(this.selectcategory)
    //   {
    //     case "1": 
    //     this.selectcategory="Category 1"; 
    //     break;
    //     case "2": 
    //     this.selectcategory="Category 2";
    //     break;
    //     case "3": 
    //     this.selectcategory="Category 3";
    //     break;
    //   }
    //  }

    // if(this.polyline && this.state==0)
    // {
    //   this.latA = evento.coords.lat;
    //   this.lngA = evento.coords.lng;
    // }
    // if(this.polyline && this.state==1)
    // {
    //   this.latB = evento.coords.lat;
    //   this.lngB = evento.coords.lng;
    // }
    // this.state=1;

    if (this.marcadores.length>=4){
      this.paths=this.marcadores;
      console.log ("poligono")
    }
  }

  back(){
    this.navCtrl.navigateForward('maintwo');
  }

  point(){
    this.polyline=true;

  }


}