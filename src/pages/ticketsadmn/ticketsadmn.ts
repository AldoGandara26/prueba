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
  datos1:any=[0];
  precio;
  //form1='';
  objeto;
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: Provedor1Provider, public alertCtrl: AlertController  ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketsPage');
  }
 
    doPrompt(obj) {
     // console.log(obj);
        let prompt = this.alertCtrl.create({
        title: 'Login',
        message: "Enter a name for this new album you're so keen on adding",
        inputs: [
          {
            name: 'title',
            placeholder: 'Title',
            value: "precio"
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
            this.objeto=obj;
              this.cambio();
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
  cambio(){
    //console.log(this.objeto);
    //console.log(this.obj);
    let datos= {"nombre": this.precio, "id1":this.objeto.id}
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
  }

    



