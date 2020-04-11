import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Observable<Product[]>;
  showCartList: Observable<boolean>;

  constructor(
    private homeService: HomeService
  ) {
    this.showCartList = this.homeService.showCartList$;
  }

  ngOnInit() {
    this.loadProducts();

  }

  loadProducts() {
    this.products = this.homeService.getProducts();
  }

}
