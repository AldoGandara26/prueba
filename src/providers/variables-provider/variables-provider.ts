//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Platform } from 'ionic-angular';
/*
  Generated class for the VariablesProviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VariablesProviderProvider {
  public clase:boolean;
  public estilo="";
  public estilo1="";
  public clase2;
  
  public class_logo = '';
  public class_col_form_web_2 = '';
  public class_col_form_web_3 = '';
  public class_alta_persona = '';
  public form1='';
  public form2='';
  constructor( public platform: Platform) {
    //console.log('Hello VariablesProviderProvider Provider');
    //alert('flag0');
    if(platform.platforms()[0] == 'mobile'){    
     // alert('flag1.1');
     this.clase=true;       
   }
   else{
    // alert('flag1.2');
     this.clase=false; 
   }

}

  
}

  


