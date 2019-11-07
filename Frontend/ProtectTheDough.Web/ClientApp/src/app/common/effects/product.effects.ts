import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Product } from '@common/models/product';
import { Observable } from 'rxjs';
import { LoadedProducts, ProductActionTypes } from '@common/actions/product.actions';
import { map, mapTo, mergeMap, switchMap, tap } from 'rxjs/operators';
import { ProductsService } from '@common/services/products.service';

@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions, private prodService: ProductsService) {}

    @Effect()
    private getAllProducts: Observable<LoadedProducts> = this.actions$.pipe(
        ofType(ProductActionTypes.LoadProducts),
        switchMap(() => this.prodService.getAllProducts()),
        map((products: Product[]) => new LoadedProducts({ products })),
        tap(x => console.log('Products: ', x))
    );
}
