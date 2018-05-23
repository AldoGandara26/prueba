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
idCliente;
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor:Provedor1Provider) {
    this.idCliente = navParams.get("idcliente");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoticketPage');
    console.log(this.idCliente);
  }
insert(){
  let datos= {"nombre": this.nombre, "sis": this.sis, "tipo": this.type, "descripcion": this.descripcion
, "file": this.file, "comentario": this.comentario, "file2": this.file2, "id_cliente": this.idCliente}
  console.log(datos);
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
