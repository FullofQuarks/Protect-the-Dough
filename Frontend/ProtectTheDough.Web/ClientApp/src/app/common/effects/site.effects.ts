import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { State } from '@common/state';
import { AddProduct, ProductActionTypes, RemoveProduct } from '@common/actions/product.actions';
import { Observable, of, pipe } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AppEffects {
    constructor(private actions$: Actions, private store: Store<State>, private toastr: ToastrService) {}

    @Effect({ dispatch: false })
    private productAdded: Observable<Action> = this.actions$.pipe(
        ofType<AddProduct>(ProductActionTypes.AddProduct),
        switchMap((action: AddProduct) => {
            this.toastr.success('Added to cart', action.payload.product.Name);
            return of(action);
        })
    );

    @Effect({ dispatch: false })
    private productRemoved: Observable<Action> = this.actions$.pipe(
        ofType<RemoveProduct>(ProductActionTypes.RemoveProduct),
        switchMap((action: RemoveProduct) => {
            this.toastr.error('Removed from cart', action.payload.product.Name);
            return of(action);
        })
    );
}
