import { AppModule } from './../../app/app.module';
import { MyApp } from './../../app/app.component';
import { TicketsPage } from './../tickets/tickets';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicApp, } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  responseData : any;
  userData = {"username": "","password": "", "name": "","email": ""};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  logout(){
    // Remove API token 
    const root = this.navCtrl.push(HomePage, {}, {animate: false});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
