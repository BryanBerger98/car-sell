import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { SingleOfferComponent } from './single-offer/single-offer.component';


@NgModule({
  declarations: [
    SingleOfferComponent
  ],
  imports: [
    CommonModule,
    OffersRoutingModule
  ]
})
export class OffersModule { }
