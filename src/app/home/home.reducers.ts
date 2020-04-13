import { Product } from '../shared/models/product.model';
import {
  HomeActions,
  SELECT_PRODUCT,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
} from './home.actions';
import { AppState } from '../app.reducer';

const defaultProduct: Product = {
  id: 0,
  name: '',
  image: '',
  price: 0,
  orderedCount: 0,
  description: '',
};

export function homeReducer(
  state: AppState = { selectedProduct: defaultProduct, cart: JSON.parse(window.localStorage.getItem('cart')) || [] },
  action: HomeActions
) {
  switch (action.type) {
    case SELECT_PRODUCT:
      return (state = { ...state, selectedProduct: action.payload });
    case ADD_PRODUCT:
      state = { ...state, selectedProduct: action.payload, cart: addToCart([...state.cart], action.payload) };
      updateLocalStorage(state.cart);
      return state;
    case REMOVE_PRODUCT:
      state = { ...state, cart: removeItem([...state.cart], action.payload) };
      updateLocalStorage(state.cart);
      return state;

    default:
      return state;
  }
}

function removeItem(cart: Product[], itemId: number): Product[] {
  if (cart.some((product) => product.id === itemId)) {
      const product = cart.find(p => p.id === itemId);
      const productIndex = cart.indexOf(product);
      if (product.orderedCount > 1) {
          const productCopy = {...cart[productIndex]};
          productCopy.orderedCount -= 1;
          cart.splice(productIndex, 1);
          cart.push(productCopy);
      } else {
          cart.splice(productIndex, 1);
      }
  }
  return cart;
}

function addToCart(cart: Product[], product: Product): Product[] {
    const productIndex = cart.indexOf(cart.find(p => p.id === product.id));
    if (productIndex > -1) {
        cart.splice(productIndex, 1);
    }
    cart.push(product);
    return cart;
}

function updateLocalStorage(cart) {
  window.localStorage.setItem('cart', JSON.stringify(cart));
}
