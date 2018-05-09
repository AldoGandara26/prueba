import { NuevoticketPage } from './../nuevoticket/nuevoticket';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Provedor1Provider} from '../../providers/provedor1/provedor1';
//import { DragulaService } from 'ng2-dragula/ng2-dragula';
@IonicPage()
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html',
})
export class TicketsPage {
  
  nuevoticketPage= "NuevoticketPage"
  datos:any=[0];
  
  //form1='';
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: Provedor1Provider ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketsPage');
  }
  nuevos(){
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
  
}