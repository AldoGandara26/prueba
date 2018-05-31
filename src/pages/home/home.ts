import { LoginPage } from './../login/login';
import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { ViewChild } from '@angular/core/src/metadata/di';
import {Provedor1Provider} from '../../providers/provedor1/provedor1';
import { VariablesProviderProvider } from '../../providers/variables-provider/variables-provider';
import { Platform } from 'ionic-angular/platform/platform';
//import { VariablesProvider } from '../../providers/variables/variables';
//import { SlideEdgeGesture } from 'ionic-angular/gestures/slide-edge-gesture';
import { AlertController } from 'ionic-angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  x = 0;
  y = 0;
  public estilo='';
  form1='';
 ImageArray:any =[]; 
 /* @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  
*/
LoginPage = "LoginPage";
contactos:any=[];
  constructor(public proveedor: Provedor1Provider,public alertCtrl: AlertController, public navCtrl: NavController,  public platform: Platform, public home:VariablesProviderProvider) {
    
   // alert(hoja.clase);
 /*  this.ImageArray=[{'image': '../assets/imgs/trez9.jpg', 'p':'Estas en la 1'},
   {'image':'../assets/imgs/trez2.png', 'p':'Estas en la 2'},
   {'image':'../assets/imgs/la1.jpg', 'p':'Estas en la 3'}]; /*
 /* if(hoja.clase){
    alert('estas en mobil');
    this.estilo="logo_header_mobile";
  }
  else{
    alert('estas en web');
    this.estilo="logo_header_web";
  }
*/
if(platform.platforms()[0] == 'mobile'){    
  // alert('flag1.1');

 // this.clase=true;
 //alert('mobilee');
 home.estilo='logo_header_mobile';
 // console.log('saludos primo ');       
}
else{
 // alert('flag1.2');
 // this.clase=false; 
  //alert(hoja.clase);
  //alert('weeeb');
  home.estilo='logo_header_web'; 
}
  }
Slider=[{
  image:'../assets/imgs/trez9.jpg',
  title:'Trez',
  description:'Desarrollamos aplicaciones adaptadas a las necesidades de  nuestros clientes.'
},
{
  image:'../assets/imgs/la1.jpg',
  title:'Trez',
  description:'Desarrollamos mas que solo aplicaciones, Hacemos tus ideas realidad'
},
{
  image:'../assets/imgs/w1.jpg',
  title:'Tecnologias',
  description:''
  
}];
  monve() {
    alert ("esta funcionando"); 
    }
  /* ionViewDidLoad(){
      this.proveedor.obtenerDatos()
      .subscribe(
        (data)=>{this.contactos=data;
        console.log("hurra");
        console.log(data[0]);
        console.log(this.contactos);   
        },
    (error)=>{console.log(error); }
  )}*/

}
