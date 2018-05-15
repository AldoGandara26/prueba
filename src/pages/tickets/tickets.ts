import { NuevoticketPage } from './../nuevoticket/nuevoticket';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Provedor1Provider} from '../../providers/provedor1/provedor1';
@IonicPage()
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html',
})
export class TicketsPage {
  
  nuevoticketPage= "NuevoticketPage"
  datos:any=[0];
  datos_revisados:any=[0];
  //form1='';
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: Provedor1Provider ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketsPage');
  }
  en_revision(){
    this.proveedor.obtenerDatos()
    .subscribe(
      (data)=>{
        console.log(data);
        this.datos=data;

        //his.datos=data;
    // console.log(this.datos);
      //console.log(data[0]);
      //console.log(this.contactos);   
      },
  (error)=>{console.log(error); }
)}
revisados(){
  this.proveedor.revisados()
  .subscribe(
    (data)=>{
      console.log(data);
      this.datos_revisados=data;

      //his.datos=data;
  // console.log(this.datos);
    //console.log(data[0]);
    //console.log(this.contactos);   
    },
(error)=>{console.log(error); }
)

}
  
}