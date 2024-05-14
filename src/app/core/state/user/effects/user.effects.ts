import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';

import * as UserActions from '../actions/user.actions';
import { of } from 'rxjs';
import { UserService } from 'src/app/modules/users/user.service';

@Injectable()
export class UserEffects {

    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.loadUsers),
        mergeMap(({ page }) => this.userService.getUsers(page).pipe(
            map(users => UserActions.usersLoaded({ page, users })),
            catchError(error => of(UserActions.loadUsersFailed({ page, error })))
        ))
    ));

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }
}
