import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import {State} from '@common/state';

@Injectable()
export class AppEffects {
    constructor(private actions$: Actions, private store: Store<State>) {}

    // @Effect()
    // private sendMessage: Observable<Action> = this.actions$.pipe(
    //     ofType(ProductActionTypes.AddProduct),
    // );
}
