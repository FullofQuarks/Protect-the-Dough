import { AddProduct, ProductActionTypes } from '../actions/product.actions';
import { initialState, SiteState } from '@common/state/site.state';

export function siteReducer(state = initialState, action: AddProduct): SiteState {
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
