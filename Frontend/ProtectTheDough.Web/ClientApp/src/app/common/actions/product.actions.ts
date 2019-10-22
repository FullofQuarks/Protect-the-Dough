import { Action } from '@ngrx/store';

export enum ProductActionTypes {
  LoadProducts = '[Product] Load Products',
  Next = '[Product] Next'
}

export class LoadProducts implements Action {
  readonly type = ProductActionTypes.LoadProducts;
}

export class Next implements Action {
  readonly type = ProductActionTypes.Next;
}


export type ProductActions =
  LoadProducts
  | Next;
