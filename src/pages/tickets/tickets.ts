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
  nuevosdata:any=[0];
  datos_revisados:any=[0];
  datos_terminados:any=[0];
   idProducto;
  //form1='';
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: Provedor1Provider ) {
    this.idProducto = navParams.get("idProduct");
    //console.log(navParams.get("idProduct"));
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
      },
  (error)=>{console.log(error); }
)}
revisados(){
  this.proveedor.revisados()
  .subscribe(
    (data)=>{
      console.log(data);
      this.datos_revisados=data;  
    },
(error)=>{console.log(error); }
)

}
  nuevos()
  {
    this.proveedor.nuevos(this.idProducto)
    .subscribe(
    (data)=>
    {  
      this.nuevosdata=data;
     },
(error)=>{console.log(error); }
)

}
completos(){
  this.proveedor.completos()
  .subscribe(
    (data)=>{
      console.log(data);
      this.datos_terminados=data;   
    },
(error)=>{console.log(error); }
)

}
  }
