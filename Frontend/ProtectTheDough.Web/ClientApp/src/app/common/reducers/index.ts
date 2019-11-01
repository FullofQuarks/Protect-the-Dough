import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { siteReducer } from './site.reducer';
import { State } from '@common/state';
import { storeFreeze } from 'ngrx-store-freeze';
import { userReducer } from '@common/reducers/user.reducer';

export const reducers: ActionReducerMap<State> = {
    site: siteReducer,
    user: userReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];
