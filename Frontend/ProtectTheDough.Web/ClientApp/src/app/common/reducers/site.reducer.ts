import {
    AddProduct,
    LoadedProducts,
    ProductActionTypes,
    RemoveAllProducts,
    RemoveProduct
} from '../actions/product.actions';
import { initialState, SiteState } from '@common/state/site.state';

export function siteReducer(
    state = initialState,
    action: AddProduct | RemoveProduct | RemoveAllProducts | LoadedProducts
): SiteState {
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
            const index = state.cart.products.findIndex(prod => prod.CatalogID === action.payload.product.CatalogID);
            return {
                ...state,
                cart: {
                    products: [...state.cart.products.filter((prod, idx) => idx !== index)],
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

        case ProductActionTypes.LoadedProducts: {
            return {
                ...state,
                loaded: true,
                cart: {
                    products: [...state.cart.products],
                    id: state.cart.id
                },
                catalog: action.payload.products
            };
        }

        default:
            return state;
    }
}
