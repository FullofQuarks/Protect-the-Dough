import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { siteReducer } from './site.reducer';
import { State } from '@common/state';
import { storeFreeze } from 'ngrx-store-freeze';

export const reducers: ActionReducerMap<State> = {
    site: siteReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];
