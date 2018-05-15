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
  //form1='';
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: Provedor1Provider, public alertCtrl: AlertController  ) {
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
      )
    }
    doPrompt() {
      let prompt = this.alertCtrl.create({
        title: 'Login',
        message: "Enter a name for this new album you're so keen on adding",
        inputs: [
          {
            name: 'title',
            placeholder: 'Title'
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
              console.log('Saved clicked');
            }
          }
        ]
      });
      prompt.present();
    }
  
  }

    



