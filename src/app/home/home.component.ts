import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Offer } from '../interfaces/offer';
import { OffersService } from '../services/offers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  offersSubscription!: Subscription;
  offers: Offer[] = [];

  constructor(
    private router: Router,
    private offersService: OffersService
  ) { }

  ngOnInit(): void {
    this.initOffers();
  }

  initOffers(): void {
    this.offersSubscription = this.offersService.offersSubject.subscribe({
      next: offers => this.offers = offers,
      error: console.error
    });
    this.offersService.getOffers();
  }

  ngOnDestroy(): void {
    this.offersSubscription.unsubscribe();
  }

}
