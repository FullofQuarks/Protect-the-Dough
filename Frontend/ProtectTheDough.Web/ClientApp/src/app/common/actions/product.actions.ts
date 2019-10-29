import { Action } from '@ngrx/store';
import {Product} from '@common/models/product';

export enum ProductActionTypes {
    LoadProducts = '[Product] Load Products',
    AddProduct = '[Product] Add Product'
}

export class LoadProducts implements Action {
    readonly type = ProductActionTypes.LoadProducts;
}

export class AddProduct implements Action {
  readonly type = ProductActionTypes.AddProduct;

  constructor(public payload: { product: Product }) {}
}

export type ProductActions =
  LoadProducts
  | AddProduct;
