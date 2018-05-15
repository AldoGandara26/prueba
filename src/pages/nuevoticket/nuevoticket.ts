import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Provedor1Provider} from '../../providers/provedor1/provedor1';

@IonicPage()
@Component({
  selector: 'page-nuevoticket',
  templateUrl: 'nuevoticket.html',
})

export class NuevoticketPage {
nombre;
sis;
type;
descripcion;
file;
comentario;
file2;
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor:Provedor1Provider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoticketPage');
  }
insert(){
  let datos= {"nombre": this.nombre, "sis": this.sis, "tipo": this.type, "descripcion": this.descripcion
, "file": this.file, "comentario": this.comentario, "file2": this.file2}
  //console.log(this.user1, this.pass);
  let resultado_registro:any=this.proveedor.post(datos);
 resultado_registro.subscribe(data=>{
   
  console.log(data);
  alert("Sus ticket se ha enviado a TREZ");
  //this.navCtrl.setRoot(HomePage)


}, error =>{
  console.log("ooops");
});
}
}
