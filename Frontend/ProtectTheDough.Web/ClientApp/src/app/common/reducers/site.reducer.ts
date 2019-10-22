import {ProductActions, ProductActionTypes} from "../actions/product.actions";


export const siteFeatureKey = 'site';

export interface State {
  counter: number;
  loaded: boolean;
}

export const initialState: State = {
  counter: 1,
  loaded: false
};

export const getCounter = (state: State) => state.counter;

export function reducer(state = initialState, action: ProductActions): State {
  switch (action.type) {
    case ProductActionTypes.Next: {
      return {
        ...state,
        counter: state.counter + 1
      }
    }

    default:
      return state;
  }
}
