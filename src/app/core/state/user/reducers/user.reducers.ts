import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { UserState } from '../user.state';

export const initialState: UserState = {
    usersByPage: {},
    loading: false,
    error: null
};

export const userReducer = createReducer(
    initialState,

    on(UserActions.loadUsers, (state, { page }) => ({
        ...state,
        loading: true
    })),

    on(UserActions.usersLoaded, (state, { page, users }) => ({
        ...state,
        usersByPage: {
            ...state.usersByPage,
            [page]: users
        },
        loading: false
    })),

    on(UserActions.loadUsersFailed, (state, { page, error }) => ({
        ...state,
        loading: false,
        error
    }))
);
