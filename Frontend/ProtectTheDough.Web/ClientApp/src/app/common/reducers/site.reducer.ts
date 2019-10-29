import { AddProduct, ProductActionTypes, RemoveProduct } from '../actions/product.actions';
import { initialState, SiteState } from '@common/state/site.state';

export function siteReducer(state = initialState, action: AddProduct | RemoveProduct): SiteState {
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

        case ProductActionTypes.RemoveProduct: {
            return {
                ...state,
                cart: {
                    products: [...state.cart.products.filter(x => x.id != action.payload.id)],
                    id: state.cart.id
                }
            };
        }

        default:
            return state;
    }
}
