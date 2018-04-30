import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { viewClassName } from '@angular/compiler';
import {Provedor1Provider} from '../../providers/provedor1/provedor1';
import { HomePage } from '../home/home';
import{TicketsPage} from '../tickets/tickets';

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
user1;
datos;
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: Provedor1Provider) {
  }
 /* ionViewDidLoad(){
    this.proveedor.obtenerDatos()
    .subscribe(
      (data)=>{this.datos=data;

      console.log("hurra");
     // console.log(data[0]);
      //console.log(this.contactos);   
      },
  (error)=>{console.log(error); }
)}  */
enviar(){
  let datos= {"nombre_usuario": this.user1, "pass_usuario": this.pass}
  console.log(this.user1, this.pass);
  let resultado_registro:any=this.proveedor.post(datos);
 resultado_registro.subscribe(data=>{
  console.log("correcto");
  alert("Sus datos se han enviado a soporte Trez");
  this.navCtrl.setRoot(HomePage)


}, error =>{
  console.log("ooops");
});
}
 
signup(usuario, contra, ){
  //console.log("flag ");
 console.log(this.datos[0]);
 let elementos ={usuario: this.datos[0].nombre_usuario, contra: this.datos[0].pass_usuario };

  this.proveedor.obtenerDatos()
  .subscribe(data=>{
    //console.log("subscribe");
    //console.log(elementos.usuario, elementos.contra);
    //console.log(this.user1, this.pass);
    if(elementos.usuario ==this.user1 && elementos.contra == this.pass){
      alert("Bienvenido"+ this.user1);
      this.navCtrl.setRoot(TicketsPage)
    }
    else{
      alert("usuario o contraseña incorrectos")
    }
    


  }, error =>{
    console.log("ooops");

  });

  }
}



