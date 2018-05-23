import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuserPage } from './nuser';

@NgModule({
  declarations: [
    NuserPage,
  ],
  imports: [
    IonicPageModule.forChild(NuserPage),
  ],
})
export class NuserPageModule {}
