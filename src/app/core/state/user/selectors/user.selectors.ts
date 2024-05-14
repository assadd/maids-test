import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../user.state';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectUsersByPage = createSelector(
    selectUserState,
    (state: UserState) => state.usersByPage
);

export const selectUsersForPage = (page: number) => createSelector(
    selectUsersByPage,
    (usersByPage) => usersByPage[page] || []
);

export const selectLoading = createSelector(
    selectUserState,
    (state: UserState) => state.loading
);

export const selectError = createSelector(
    selectUserState,
    (state: UserState) => state.error
);
