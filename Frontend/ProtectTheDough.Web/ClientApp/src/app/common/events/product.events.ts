import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product } from '@common/models/product';
import { AddProduct, LoadProducts, RemoveAllProducts, RemoveProduct } from '@common/actions/product.actions';
import { State } from '@common/state';
import { Observable } from 'rxjs';
import { selectCart, selectCatalog, selectIsLoaded } from '@common/selectors';

@Injectable()
export class ProductEvents {
    get getProducts$(): Observable<Product[]> {
        return this.store.pipe(select(selectCatalog));
    }

    get getCart$(): Observable<Product[]> {
        return this.store.pipe(select(selectCart));
    }

    get isLoaded$(): Observable<boolean> {
        return this.store.pipe(select(selectIsLoaded));
    }

    constructor(private store: Store<State>) {}

    public LoadProducts() {
        this.store.dispatch(new LoadProducts());
    }

    public AddProduct(product: Product) {
        this.store.dispatch(new AddProduct({ product }));
    }

    public RemoveProduct(product: Product) {
        this.store.dispatch(new RemoveProduct({ product }));
    }

    public RemoveAllProducts(cartId: number) {
        this.store.dispatch(new RemoveAllProducts({ cartId }));
    }
}
