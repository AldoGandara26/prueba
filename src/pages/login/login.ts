import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { viewClassName } from '@angular/compiler';
import {Provedor1Provider} from '../../providers/provedor1/provedor1';
import { HomePage } from '../home/home';
import{TicketsPage} from '../tickets/tickets';
import {TicketsadmnPage} from '../ticketsadmn/ticketsadmn';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
@ViewChild('username') uname;
@ViewChild('password') password;
pass;
user1;
datos;
id;
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: Provedor1Provider) {
  }

tickets(){
  this.navCtrl.setRoot(TicketsadmnPage) ;

}
enviar(){
  let datos= {"nombre_usuario": this.user1, "pass_usuario": this.pass}

  let resultado_registro:any=this.proveedor.enviardatos(datos);
 resultado_registro.subscribe(data=>{

if(data.respuesta =="indefinido"){
 alert("el usuario no existe");

}
else{
  if(data.respuesta=="nocoinciden"){
    
    alert("El usuario y la contraseña no coinciden");    
  }
  else{
    if(data.respuesta=="correcto"){
      console.log(data.respuesta);
      alert("usuario y contrasena corectos");
    this.navCtrl.setRoot(TicketsadmnPage );}
    else{
      if(data.respuesta=="correcto1")
      {
        
         this.id= data.aldo;
    
      alert("usuario y contrasena corectos");
      this.navCtrl.push(TicketsPage,
         { 'idProduct': this.id}  );
         
    }

    }
  }
  
}

}, error =>{
  console.log("ooops");
});
}
 
}



