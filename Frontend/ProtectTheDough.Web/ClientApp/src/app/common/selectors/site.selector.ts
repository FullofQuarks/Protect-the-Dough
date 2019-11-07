import { State } from '@common/state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SiteState } from '@common/state/site.state';

export const selectSiteState = (state: State) => state.site;

export const selectCartProducts = createSelector(
    selectSiteState,
    (state: SiteState) => state.cart.products
);

export const selectIsLoaded = createSelector(
    selectSiteState,
    (state: SiteState) => state.loaded
);
