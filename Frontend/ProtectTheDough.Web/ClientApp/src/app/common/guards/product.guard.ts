import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductEvents } from '@common/events/product.events';

@Injectable({ providedIn: 'root' })
export class ProductGuard implements CanActivateChild {
    constructor(private productEvents: ProductEvents) {}

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.productEvents.isLoaded$.pipe(
            tap(loaded => {
                if (!loaded) {
                    this.productEvents.LoadProducts();
                }
            }),
            filter(loaded => loaded),
            take(1),
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }
}
