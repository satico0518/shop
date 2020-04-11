import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { Store } from '@ngrx/store';
import {
  AddProductAction,
  RemoveProductAction,
} from 'src/app/home/home.actions';
import { HomeService } from 'src/app/home/services/home.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  product: Product;
  productCount: number;

  constructor(private store: Store<any>, private homeService: HomeService) {
    this.store.select('AppState').subscribe((state) => {
      this.product = { ...state.selectedProduct };
      if ([...state.cart].find((p) => p.id === this.product.id)) {
        this.productCount = [...state.cart].find(
          (p) => p.id === this.product.id
        ).orderedCount;
      } else {
        this.productCount = 0;
      }
    });
  }

  addProduct() {
    this.product.orderedCount = ++this.productCount;
    this.store.dispatch(new AddProductAction(this.product));
  }

  removeProduct() {
    this.store.dispatch(new RemoveProductAction(this.product.id));
  }

  showCart() {
    this.homeService.showCartList$.next(true);
  }
}
