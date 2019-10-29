import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '@common/models/product';
import { Cart } from '@common/models/cart';

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export interface SiteState extends EntityState<Product> {
    loaded: boolean;
    cart: Cart;
}

export const initialState: SiteState = productAdapter.getInitialState({
    loaded: false,
    cart: {
        id: 0,
        products: []
    }
});
