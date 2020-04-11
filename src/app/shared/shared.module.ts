import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from '../home/home.reducers';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, ProductGridComponent, ProductDetailComponent],
  providers: [],
  exports: [HeaderComponent, ProductGridComponent, ProductDetailComponent],
})
export class SharedModule {}
