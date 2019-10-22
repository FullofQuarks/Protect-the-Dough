import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromSite from './site.reducer';

export interface State {
    fizzbuzz: fromSite.State;
}

export const reducers: ActionReducerMap<State> = {
    fizzbuzz: fromSite.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getFizzBuzzState = createFeatureSelector<fromSite.State>('fizzbuzz');

export const getCounter = createSelector(
    getFizzBuzzState,
    fromSite.getCounter
);

export const getMessage = createSelector(
    getCounter,
    counter => {
        let message = '';
        if (counter % 3 === 0) {
            message += 'Fizz';
        }
        if (counter % 5 === 0) {
            message += 'Buzz';
        }
        return message || counter.toString();
    }
);
