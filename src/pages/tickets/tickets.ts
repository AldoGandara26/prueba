import { NuevoticketPage } from './../nuevoticket/nuevoticket';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Provedor1Provider} from '../../providers/provedor1/provedor1';
import { AlertController } from 'ionic-angular';
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
   idCliente;
  //form1='';
  input;
  objeto2;
  revi;
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public proveedor: Provedor1Provider ) {
    this.idCliente = navParams.get("idProduct");
    //console.log(navParams.get("idProduct"));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketsPage');
    console.log(this.idCliente);
    }
    doPrompt2(rev) {
      
      
         let prompt = this.alertCtrl.create({
         title: 'Login',
         message: "Enter a name for this new album you're so keen on adding",
         inputs: [
           {
             name: 'title',
             placeholder: 'Title',
            
                     },
         ],
         buttons: [
           {
             text: 'Cancel',
             handler: data => {
               console.log('Cancel clicked');
             }
           },
           {
             text: 'Save',
             handler: data => {
               // console.log(JSON.stringify(data));
            console.log("---->"+rev);
            this.objeto2=rev;
             this.input=data.title;
          
               this.cambio();
               console.log('Saved clicked');
             
             }
           }
         ]
       });
       prompt.present();
       
     }
     cambio(){
      //console.log(this.objeto);
    //console.log(this.precio);
   
      let datos= {"comentario": this.input, "id1":this.objeto2.id}
      //console.log(this.user1, this.pass);
      let resultado_registro:any=this.proveedor.cambiocliente(datos);
     resultado_registro.subscribe(data=>{
       
     // console.log(data);
     // alert("Sus ticket se ha enviado a TREZ");
      //this.navCtrl.setRoot(HomePage)
    
    
    }, error =>{
      console.log("ooops");
    });
    }
  nuevoticket(){
    this.navCtrl.push(NuevoticketPage,
      { 'idcliente': this.idCliente}  );    
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
  this.proveedor.revisados(this.idCliente)
  .subscribe(
    (data)=>{
      console.log(data);
      this.datos_revisados=data;  
    },
(error)=>{console.log(error); }
)

}
revisadosc(){
  this.proveedor.revisadosc(this.idCliente)
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
    this.proveedor.nuevos(this.idCliente)
    .subscribe(
    (data)=>
    {  
      this.nuevosdata=data;
      console.log(this.nuevosdata);
     },
(error)=>{console.log(error); }
)

}
completos(){
  this.proveedor.completos(this.idCliente)
  .subscribe(
    (data)=>{
      console.log(data);
      this.datos_terminados=data;   
    },
(error)=>{console.log(error); }
)

}
  }
