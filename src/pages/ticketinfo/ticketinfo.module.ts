import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketinfoPage } from './ticketinfo';

@NgModule({
  declarations: [
    TicketinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketinfoPage),
  ],
})
export class TicketinfoPageModule {}
