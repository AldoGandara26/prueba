import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketsadmnPage } from './ticketsadmn';

@NgModule({
  declarations: [
    TicketsadmnPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketsadmnPage),
  ],
})
export class TicketsadmnPageModule {}
