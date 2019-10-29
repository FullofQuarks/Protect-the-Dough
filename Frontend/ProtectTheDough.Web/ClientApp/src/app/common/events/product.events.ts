import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '@common/reducers/site.reducer';
import {Product} from '@common/models/product';
import {AddProduct} from '@common/actions/product.actions';

@Injectable()
export class ProductEvents {
    constructor(private store: Store<State>) {}

    public AddProduct(product: Product) {
      this.store.dispatch(new AddProduct({product}));
    }
}
