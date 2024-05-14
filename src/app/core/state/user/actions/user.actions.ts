import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction(
    '[User] Load Users',
    props<{ page: number }>()
);

export const usersLoaded = createAction(
    '[User] Users Loaded',
    props<{ page: number, users: any[] }>()
);

export const loadUsersFailed = createAction(
    '[User] Load Users Failed',
    props<{ page: number, error: any }>()
);
