import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
//import { AgmCoreModule } from 'angular2-google-maps/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NosotrosPage } from '../pages/nosotros/nosotros';
import { ContactoPage } from '../pages/contacto/contacto';
import { HttpModule} from '@angular/http';
//import { VariablesProvider } from '../providers/variables/variables';
import { VariablesProviderProvider } from '../providers/variables-provider/variables-provider';
import { Provedor1Provider } from '../providers/provedor1/provedor1';
import {HttpClientModule} from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NosotrosPage,
    ContactoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   // AgmCoreModule.forRoot({
     // apiKey: 'AIzaSyCH_Jt8GvORX8ZnMprgqlj95zW6upzj1Lw'
    ////})
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NosotrosPage,
    ContactoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VariablesProviderProvider,
    Provedor1Provider,
    RestProvider
  ]
})
export class AppModule {}
