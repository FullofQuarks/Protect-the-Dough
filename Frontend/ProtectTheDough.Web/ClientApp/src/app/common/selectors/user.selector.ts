import { State } from '@common/state';
import { User } from '@common/models/user';
import { createSelector } from '@ngrx/store';
import { UserState } from '@common/state/user.state';

export const selectUserState = (state: State) => state.user;

export const selectUserLoggedIn = createSelector(
    selectUserState,
    (state: UserState) => state.isLoggedIn
);
