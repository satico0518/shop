import { Component, OnInit, Input } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Product } from '../../models/product.model';
import { Store } from '@ngrx/store';
import { SelectProductAction } from 'src/app/home/home.actions';
import { HomeService } from 'src/app/home/services/home.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
})
export class ProductGridComponent implements OnInit {
  @Input() products: Observable<Product>;

  constructor(private store: Store, private homeService: HomeService) {}

  ngOnInit() {}

  goToDetails(product) {
    this.homeService.showCartList$.next(false);
    this.store.dispatch(new SelectProductAction(product));
  }
}
