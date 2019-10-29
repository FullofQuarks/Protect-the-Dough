import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product } from '@common/models/product';
import { AddProduct, RemoveProduct } from '@common/actions/product.actions';
import { State } from '@common/state';
import { Observable } from 'rxjs';
import { selectCartProducts } from '@common/selectors';

@Injectable()
export class ProductEvents {
    get getProducts$(): Observable<Product[]> {
        return this.store.pipe(select(selectCartProducts));
    }

    constructor(private store: Store<State>) {}

    public AddProduct(product: Product) {
        this.store.dispatch(new AddProduct({ product }));
    }

    public RemoveProduct(id: number) {
        this.store.dispatch(new RemoveProduct({ id }));
    }
}
