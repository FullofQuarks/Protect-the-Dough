import { Action } from '@ngrx/store';
import { Product } from '@common/models/product';

export enum ProductActionTypes {
    LoadProducts = '[Product] Load Products',
    LoadedProducts = '[Product] Products Loaded',
    AddProduct = '[Product] Add Product',
    RemoveProduct = '[Product] Remove Product',
    RemoveAllProducts = '[Product] Remove all Products'
}

export class LoadProducts implements Action {
    readonly type = ProductActionTypes.LoadProducts;
}

export class LoadedProducts implements Action {
    readonly type = ProductActionTypes.LoadedProducts;

    constructor(public payload: { products: Product[] }) {}
}

export class AddProduct implements Action {
    readonly type = ProductActionTypes.AddProduct;

    constructor(public payload: { product: Product }) {}
}

export class RemoveProduct implements Action {
    readonly type = ProductActionTypes.RemoveProduct;

    constructor(public payload: { cartId: number; id: number }) {}
}

export class RemoveAllProducts implements Action {
    readonly type = ProductActionTypes.RemoveAllProducts;

    constructor(public payload: { cartId: number }) {}
}

export type ProductActions = LoadProducts | LoadedProducts | AddProduct | RemoveProduct | RemoveAllProducts;
