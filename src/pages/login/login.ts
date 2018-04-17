import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { viewClassName } from '@angular/compiler';
import {Provedor1Provider} from '../../providers/provedor1/provedor1';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
@ViewChild('username') uname;
@ViewChild('password') password;
pass;
user;
datos;
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: Provedor1Provider) {
  }
  ionViewDidLoad(){
    this.proveedor.obtenerDatos()
    .subscribe(
      (data)=>{this.datos=data;
      console.log("hurra");
     // console.log(data[0]);
      //console.log(this.contactos);   
      },
  (error)=>{console.log(error); }
)}
 
signup(){
  let f={user: this.datos.nombre,password: this.datos.pass };
  this.proveedor.obtenerDatos()
  .subscribe(data=>{
    if(user && pass== user && password){
      alert("Bienvenido");
      this.navCtrl.setRoot(HomePage)
    }
    else(){
      alert("Usuario o contrasena no encontrados");
    }


  }, error =>{
    console.log("ooops");
  });

  }
}



