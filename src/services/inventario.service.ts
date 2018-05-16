import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
@Injectable ()


export class InventarioService {
 private headers = new Headers({'Content-Type': 'application/json'});
 private url = 'http//localhost:8000/users'
    constructor(){
    }
}