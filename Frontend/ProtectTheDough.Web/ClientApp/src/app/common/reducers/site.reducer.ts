import { AddProduct, ProductActions, ProductActionTypes } from '../actions/product.actions';
import { Cart } from '@common/models/cart';
import { Product } from '@common/models/product';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const siteFeatureKey = 'site';
export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export interface State extends EntityState<Product> {
    loaded: boolean;
    cart: Cart;
}

export const initialState: State = productAdapter.getInitialState({
    loaded: false,
    cart: {
        id: 0,
        products: []
    }
});

export const getLoaded = (state: State) => state.loaded;

export function reducer(state = initialState, action: AddProduct): State {
    switch (action.type) {
        case ProductActionTypes.AddProduct: {
            return {
                ...state,
                cart: {
                    products: [...state.cart.products, action.payload.product],
                    id: state.cart.id
                }
            };
        }

        default:
            return state;
    }
}
