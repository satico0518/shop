import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { HomeService } from 'src/app/home/services/home.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent {
  currentTotalPrice = 0;

  constructor(private store: Store<any>, private homeService: HomeService) {
    this.store.select('AppState').subscribe((state) => {
      if (state.cart && state.cart.length > 0) {
        this.currentTotalPrice = state.cart.map(p => ({price: p.price, count: p.orderedCount})).reduce(
          (acum, currentValue) => acum += (currentValue.price * currentValue.count), 0
        );
      }
    });
  }

  viewCart() {
    this.homeService.showCartList$.next(true);
  }
}
