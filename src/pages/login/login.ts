import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { viewClassName } from '@angular/compiler';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
@ViewChild('username') uname;
@ViewChild('password') password;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  SignIn(){
console.log(this.uname.value, this.password.value);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
