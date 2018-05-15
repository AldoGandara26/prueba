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
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: Provedor1Provider) {
  }
 /* ionViewDidLoad(){
    this.proveedor.obtenerDatos()
    .subscribe(
      (data)=>{this.datos=data;

      console.log("hurra");
     // console.log(data[0]);
      //console.log(this.contactos);   
      },
  (error)=>{console.log(error); }
)}  */
tickets(){
  this.navCtrl.setRoot(TicketsadmnPage) ;

}
enviar(){
  let datos= {"nombre_usuario": this.user1, "pass_usuario": this.pass}
  //console.log(this.user1, this.pass);
  let resultado_registro:any=this.proveedor.enviardatos(datos);
 resultado_registro.subscribe(data=>{
//console.log(data.respuesta);
if(data.respuesta =="indefinido"){
  console.log("no se encuentra el ususario");

}
else{
  if(data.respuesta=="nocoinciden"){
    console.log("el usuario y la contra no coinciden");
    
  }
  else{
    if(data.respuesta=="correcto"){console.log("de tipo 0")}
    else{
      if(data.respuesta=="correcto1")
      {console.log("de tipo 1");
      alert("usuario y contrasena corectos");
      this.navCtrl.setRoot(TicketsPage);
    }
   // console.log("allgoa anda mal");
    }
  }
  
}

}, error =>{
  console.log("ooops");
});
}
 
/*signup(usuario, contra, ){
  //console.log("flag ");
 console.log(this.datos[0]);
 let elementos ={usuario: this.datos[0].nombre_usuario, contra: this.datos[0].pass_usuario };

  this.proveedor.obtenerDatos()
  .subscribe(data=>{
    //console.log("subscribe");
    //console.log(elementos.usuario, elementos.contra);
    //console.log(this.user1, this.pass);
    if(elementos.usuario ==this.user1 && elementos.contra == this.pass){
      alert("Bienvenido"+ this.user1);
      this.navCtrl.setRoot(TicketsPage)
    }
    else{
      alert("usuario o contraseña incorrectos")
    }
    


  }, error =>{
    console.log("ooops");

  });

} */
}



