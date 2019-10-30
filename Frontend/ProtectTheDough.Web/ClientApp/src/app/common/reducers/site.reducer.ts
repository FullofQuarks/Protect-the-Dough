import { AddProduct, ProductActionTypes, RemoveAllProducts, RemoveProduct } from '../actions/product.actions';
import { initialState, SiteState } from '@common/state/site.state';

export function siteReducer(state = initialState, action: AddProduct | RemoveProduct | RemoveAllProducts): SiteState {
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
                    products: [
                        ...state.cart.products.filter(x => {
                            if (state.cart.id === action.payload.cartId) {
                                return x.id !== action.payload.id;
                            }
                        })
                    ],
                    id: state.cart.id
                }
            };
        }

        case ProductActionTypes.RemoveAllProducts: {
            return {
                ...state,
                cart: {
                    products: [],
                    id: state.cart.id
                }
            };
        }

        default:
            return state;
    }
}
