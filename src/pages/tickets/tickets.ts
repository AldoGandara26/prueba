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
  nuevos(){
   /// console.log("--->"+this.idProducto);
  /*  let datos= {"idcliente": this.idProducto}
    console.log("---->"+this.datos);
    let resultado_registro:any=this.proveedor.enviaid(datos);
   resultado_registro.subscribe(data=>
    {  
    }, error =>{
    console.log("ooops");
  });*/
    this.proveedor.nuevos(this.idProducto)
  .subscribe(
    (data)=>{
      console.log(data);
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

      //his.datos=data;
  // console.log(this.datos);
    //console.log(data[0]);
    //console.log(this.contactos);   
    },
(error)=>{console.log(error); }
)

}
  }
