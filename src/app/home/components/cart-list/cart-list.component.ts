import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {

  cartList: Product[];
  total: number;

  constructor(private store: Store<any>) {
    this.store.select('AppState').subscribe(state => this.cartList = [...state.cart]);
    this.total = this.cartList.map(p => ({price: p.price, count: p.orderedCount})).reduce(
      (acum, currentValue) => acum += (currentValue.price * currentValue.count), 0
    );
   }
}
