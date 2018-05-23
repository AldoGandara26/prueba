import { NuserPage } from './../nuser/nuser';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Provedor1Provider} from '../../providers/provedor1/provedor1';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ticketsadmn',
  templateUrl: 'ticketsadmn.html',
})
export class TicketsadmnPage {
  nuevoticketPage= "NuevoticketPage"
  datos:any=[0];
  otros:any=[0];
  datos2:any=[0];
  datos1:any=[0];
  //precio;
  nuevosd:any=[0];
  nuevosc:any=[0];
  input;
  input2;
  //form1='';
  objeto;
  objeto2;
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: Provedor1Provider, public alertCtrl: AlertController  ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketsPage');
  }
 
    doPrompt(obj) {
     // console.log(obj);
        let prompt = this.alertCtrl.create({
        title: 'Ticket Revisado',
        message: "Costo por hora",
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
            // console.log(obj);
            this.input=data.title;
            //console.log(JSON.stringify(data));
            this.objeto=obj;
              this.cambio();
              console.log('Saved clicked');
            }
          }
        ]
      });
      prompt.present();
      
    }
    doPrompt2(object) {
      // console.log(obj);
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
             // console.log(obj);
             this.input2=data.title;
            // console.log(JSON.stringify(data));
            this.objeto2=object;
               this.cambiorevisado();
               console.log('Saved clicked');
             
             }
           }
         ]
       });
       prompt.present();
       
     }
    en_revision(){
      this.proveedor.revisados()
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
  nuevosp()
{
  this.proveedor.nuevost()
  .subscribe(
    (data)=>{
      console.log(data);
      this.nuevosd=data;

      //his.datos=data;
  // console.log(this.datos);
    //console.log(data[0]);
    //console.log(this.contactos);   
    },
(error)=>{console.log(error); }
)
}
nuevoso(){
  
  this.proveedor.nuevoso()
  .subscribe(
    (data)=>{
      console.log(data);
      this.otros=data;

      //his.datos=data;
  // console.log(this.datos);
    //console.log(data[0]);
    //console.log(this.contactos);   
    },
(error)=>{console.log(error); }
)

} 
completos(){
  this.proveedor.completost()
  .subscribe(
    (data)=>{
      console.log(data);
      this.nuevosc=data;

      //his.datos=data;
  // console.log(this.datos);
    //console.log(data[0]);
    //console.log(this.contactos);   
    },
(error)=>{console.log(error); }
)
}
 cambio(){
    //console.log(this.objeto);
  //console.log(this.precio);
    let datos= {"precio": this.input, "id1":this.objeto.id}
    //console.log(this.user1, this.pass);
    let resultado_registro:any=this.proveedor.cambio(datos);
   resultado_registro.subscribe(data=>{
     
   // console.log(data);
   // alert("Sus ticket se ha enviado a TREZ");
    //this.navCtrl.setRoot(HomePage)
  
  
 }, error =>{
    console.log("ooops");
  });
  }
  newuser(){
    this.navCtrl.push(NuserPage);
  }
  cambiorevisado(){
   
    let datos= {"comentario": this.input2, "id1":this.objeto2.id}
    //console.log(this.user1, this.pass);
    let resultado_registro:any=this.proveedor.cambiorevisado(datos);
   resultado_registro.subscribe(data=>{
     
   // console.log(data);
   // alert("Sus ticket se ha enviado a TREZ");
    //this.navCtrl.setRoot(HomePage)
   
  
 }, error =>{
    console.log("ooops");
  });

  }
  }

    



