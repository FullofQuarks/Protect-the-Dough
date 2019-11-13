import { State } from '@common/state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SiteState } from '@common/state/site.state';

export const selectSiteState = (state: State) => state.site;

export const selectCatalog = createSelector(
    selectSiteState,
    (state: SiteState) => state.catalog
);

export const selectIsLoaded = createSelector(
    selectSiteState,
    (state: SiteState) => state.loaded
);

export const selectCart = createSelector(
    selectSiteState,
    (state: SiteState) => state.cart.products
);
