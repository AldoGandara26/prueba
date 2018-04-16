import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoticketPage } from './nuevoticket';

@NgModule({
  declarations: [
    NuevoticketPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoticketPage),
  ],
})
export class NuevoticketPageModule {}
