import { Product } from './shared/models/product.model';

export interface AppState {
  selectedProduct: Product;
  cart: Product[];
}
