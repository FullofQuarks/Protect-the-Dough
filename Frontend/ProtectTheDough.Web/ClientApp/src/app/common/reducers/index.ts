import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromSite from './site.reducer';
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {Product} from '@common/models/product';

export interface State {
    fizzbuzz: fromSite.State;
}

export const reducers: ActionReducerMap<State> = {
    fizzbuzz: fromSite.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getFizzBuzzState = createFeatureSelector<fromSite.State>('fizzbuzz');

export const isLoaded = createSelector(
    getFizzBuzzState,
    fromSite.getLoaded
);
