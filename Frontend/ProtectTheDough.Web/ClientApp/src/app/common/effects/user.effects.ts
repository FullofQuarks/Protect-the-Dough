import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '@common/services/auth/auth.service';
import { LoginSuccess, UserActionTypes, UserLogout } from '@common/actions/user.actions';

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private auth: AuthService) {}

    @Effect()
    private userLogin: Observable<LoginSuccess> = this.actions$.pipe(
        ofType(UserActionTypes.UserLogin),
        tap(x => {
            this.auth.login();
        }),
        switchMap(x => this.auth.getUser$()),
        tap(x => console.log('Login success:', x)),
        map(user => new LoginSuccess({ user }))
    );

    @Effect({ dispatch: false })
    private userLogout: Observable<UserLogout> = this.actions$.pipe(
        ofType(UserActionTypes.UserLogout),
        tap(() => this.auth.logout())
    );
}
