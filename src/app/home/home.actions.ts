import { Action } from '@ngrx/store';
import { Product } from '../shared/models/product.model';

export const SELECT_PRODUCT = '[PRODUCT GRID] selecting product from grid';
export const ADD_PRODUCT = '[PRODUCT DETAILS] adding product to cart';
export const REMOVE_PRODUCT = '[PRODUCT DETAILS] removing product from cart';
export const LOAD_CART = '[HOME] loading cart from localstorage';

export class SelectProductAction implements Action {
    readonly type = SELECT_PRODUCT;
    constructor(public payload: Product) {}
}

export class AddProductAction implements Action {
    readonly type = ADD_PRODUCT;
    constructor(public payload: Product) {}
}

export class RemoveProductAction implements Action {
    readonly type = REMOVE_PRODUCT;
    constructor(public payload: number) {}
}

export type HomeActions = SelectProductAction |
                          AddProductAction |
                          RemoveProductAction;
