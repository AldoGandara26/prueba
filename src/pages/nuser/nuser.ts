import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Provedor1Provider} from '../../providers/provedor1/provedor1';

/**
 * Generated class for the NuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuser',
  templateUrl: 'nuser.html',
})

export class NuserPage {
  nombre;
  correo;
  type;
  telefono;
  contrasena;
  constructor(public navCtrl: NavController, public navParams: NavParams, public provedor: Provedor1Provider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuserPage');
  }
  insert(){
    let datos= {"nombre": this.nombre, "correo": this.correo, "tipo": this.type, "telefono": this.telefono
  , "contrasena": this.contrasena}
    console.log(datos);
    let resultado_registro:any=this.provedor.postuser(datos);
   resultado_registro.subscribe(data=>{
     
     
    console.log(data);
    alert("Sus ticket se ha enviado a TREZ");
    //this.navCtrl.setRoot(HomePage)
  
  
  }, error =>{
    console.log("ooops");
  });
  }
}
