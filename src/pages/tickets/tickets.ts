import { NuevoticketPage } from './../nuevoticket/nuevoticket';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
@IonicPage()
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html',
})
export class TicketsPage {

  nuevoticketPage= "NuevoticketPage"
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private dragulaService: DragulaService) {
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketsPage');
  }

 

}
