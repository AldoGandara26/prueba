import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
import { VariablesProviderProvider } from '../../providers/variables-provider/variables-provider';
import { Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import {Provedor1Provider} from '../../providers/provedor1/provedor1';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
//import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  //title: string = 'My first AGM project';
form : FormGroup;
  form1='';
  public estilo='';
private url ='http://localhost:3000/users';
  public clase2;
  //data:any = {};
  Nombre;
  correo;
  textarea;
usuarios;

  //public clase:boolean;
 // public form1='';
  constructor(private fb: FormBuilder, public http: Http, public navCtrl: NavController,   public platform: Platform, public aldo:VariablesProviderProvider, public provedor: Provedor1Provider ) {
    //variables para conexion a bd
    //alert (this.usuarios);
  //this.data.username = '';
  //this.data.response = '';
  this.http=http;
    if(platform.platforms()[0] == 'mobile'){    
      // alert('flag1.1');

     // this.clase=true;
     //alert('mobilee');
      aldo.estilo='logo_header_mobile';
     // console.log('saludos primo ');       
    }
    else{
     // alert('flag1.2');
     // this.clase=false; 
      //alert(hoja.clase);
      //alert('weeeb');
      aldo.estilo='logo_header_web';
      
    }
     
  }
  back(){
   
   this.navCtrl.setRoot(HomePage);
 }
  /*  sendForm(){
      alert(this.nombre);
    }
 /*   submit() {
      var link = 'http://127.0.0.1/api.php';
      var myData = JSON.stringify({username: this.data.username});
      this.http.post(link, myData)
      .subscribe(data => {
      this.data.response = data["_body"]; 
      }, error => {
      //console.log("Oooops!");
      alert("Algo anda mal aldo");
      });
      }
      ionViewDidload(){
        this.provedor.obtenerDatos()
        .subscribe(
          (data)=> {this.usuarios = data[0];
          },
          (error)=>{console.log(error);}
        )
      } */
 submit( ){
   this.provedor.obtenerDatos()

 }
 
/*save(nombre,correo, textarea){
  let datos= { nombre, correo, textarea}
let options={'content-type': 'application/x-www-form-urlencoded'};
 // this.provedor.post()
}
return new Promise(resolve => {
this.http.post(url,JSON.stringify(datos),options)
.subscribe(data => {
  resolve(data);
 });
});*/

/*
postDatos(nombre, correo, textarea){
  let datos = { nombre, correo , textarea}
  
  let options = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
 var url = 'www.miservicio.com/adduser/';
 return new Promise(resolve => {
  this.http.post(url,JSON.stringify(datos),options)
     .subscribe(data => {
       resolve(data);
      });
 }); 
}*/
/*submit1(Nombre, correo , textarea, url){
  let datos = { Nombre, correo , textarea}
  this.http.post(url, datos)
  .subscribe(data => {
  this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
  }, error => {
  console.log("Oooops!");
  });
} */
/*crearFormulario ()
{
  this.form=this.fb.group({
    nombre: ['',Validators.required],
    correo: ['',Validators.required],
    textarea: ['',Validators.required]
  })
} */
/*
enviardatos(nombre, correo, textarea){
  let p=this.provedor.callPost(nombre, correo, textarea);
  p.then(data => {console.log("yesca"+JSON.stringify(data.json()));
})
}*/

postDatos(){
 // this.http.post('http://localhost:3000/users');
let datos= {"Nombre": this.Nombre, "correo": this.correo, "textarea": this.textarea}
let resultado_registro:any=this.provedor.registrar(datos);
 resultado_registro.subscribe(data=>{
  console.log("correcto");
  alert("Sus datos se han enviado a soporte Trez");
   this.navCtrl.setRoot(HomePage)


}, error =>{
  console.log("ooops");
});


 
}

}


  


