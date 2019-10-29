import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { interval, Observable } from 'rxjs';
import { delay, map, mapTo, take, timeout } from 'rxjs/operators';
import { ProductActionTypes } from '../actions/product.actions';
import { Action, Store } from '@ngrx/store';
import { State } from '../reducers';

@Injectable()
export class AppEffects {
    constructor(private actions$: Actions, private store: Store<State>) {}

    // @Effect()
    // private sendMessage: Observable<Action> = this.actions$.pipe(
    //     ofType(ProductActionTypes.AddProduct),
    // );
}
