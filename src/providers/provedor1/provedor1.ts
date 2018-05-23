import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


/*
  Generated class for the Provedor1Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Provedor1Provider {
 // private url = 'http//localhost:8000/users';
 api="http://localhost:3000/users";
 api1="http://localhost:3000/insert";
 api2="http://localhost:3000/cambio";
 api4="http://localhost:3000/prueba";
 api3="http://localhost:3000/cambiorevisado";
 apiu="http://localhost:3000/api/users/login";
  constructor(public http: HttpClient) {
    console.log('Hello Provedor1Provider Provider');
  }
obtenerDatos()
{
  return this.http.get('http://localhost:3000/users');
}
revisados()
{
  return this.http.get('http://localhost:3000/revisados');
}
nuevost()
{
  return this.http.get('http://localhost:3000/nuevospred');
}
nuevos(idProducto)
{
  console.log(idProducto);
  return this.http.get('http://localhost:3000/nuevos/'+idProducto);
}
completost()
{
  return this.http.get('http://localhost:3000/completos');
}
completos()
{
  return this.http.get('http://localhost:3000/completos');
}
nuevoso()
{
  return this.http.get('http://localhost:3000/nuevoso');
} 
/*agregarDatos(){
  return this.http.post('http://localhost:3000/users' );
} */
/*callPost(nombre, correo, textarea){
console.log("Name= "+nombre+"Correo= "+ correo);
let param = {name: nombre, email:correo, textarea: textarea};
let url ="http://localhost:3000/users";
let request=this.http.post(url, param);
return request.toPromise();
}*/
enviaid(datos){
  let consulta =this.api4;
  let headerOptions:any={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    
  };
  const respuesta =this.http.post( consulta,datos,  headerOptions,);
  return respuesta;

}
enviardatos(datos){
  let consulta =this.api;
  console.log(datos);
  let headerOptions:any={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    
  };
  const respuesta =this.http.post( consulta,datos,  headerOptions,);
  return respuesta;
}

cambio(datos1){
  let consulta =this.api2;
  let headerOptions:any={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    
  };
  const respuesta =this.http.post( consulta,datos1,  headerOptions,);
  return respuesta;
}
cambiorevisado(datos){
 
  let consulta =this.api3;
  let headerOptions:any={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    
  };
  const respuesta =this.http.post( consulta,datos,  headerOptions,);
  return respuesta;

}
post(datos){
  let consulta =this.api1;
  let headerOptions:any={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    
  };
  const respuesta =this.http.post( consulta,datos,  headerOptions,);
  return respuesta;
}
insertar(datos){
  let consulta =this.api;
  let headerOptions:any={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    
  };
  const respuesta =this.http.post( consulta,datos,  headerOptions,);
  return respuesta;
}
/*agregarDatos(){
  let url ='${this.url}/${id}';
  let ijson =JSON.stringify();

return  this.http.post(url, ijson, this.options);
.map(response => response.json())
.catch(this.handleError)  ;;
}*/
registrar(datos ){
  //console.log(datos);
let consulta =this.api;
let headerOptions:any={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  
};
const respuesta =this.http.post( consulta,datos,  headerOptions,);
return respuesta;
}
}
