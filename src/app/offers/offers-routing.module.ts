import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleOfferComponent } from './single-offer/single-offer.component';

const routes: Routes = [
  { path: ':id', component: SingleOfferComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
