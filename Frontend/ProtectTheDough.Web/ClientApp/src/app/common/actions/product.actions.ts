import { Action } from '@ngrx/store';
import { Product } from '@common/models/product';

export enum ProductActionTypes {
    LoadProducts = '[Product] Load Products',
    AddProduct = '[Product] Add Product',
    RemoveProduct = '[Product] Remove Product'
}

export class LoadProducts implements Action {
    readonly type = ProductActionTypes.LoadProducts;
}

export class AddProduct implements Action {
    readonly type = ProductActionTypes.AddProduct;

    constructor(public payload: { product: Product }) {}
}

export class RemoveProduct implements Action {
    readonly type = ProductActionTypes.RemoveProduct;

    constructor(public payload: { id: number }) {}
}

export type ProductActions = LoadProducts | AddProduct | RemoveProduct;
