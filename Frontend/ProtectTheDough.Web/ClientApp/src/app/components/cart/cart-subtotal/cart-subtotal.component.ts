import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Product } from '@common/models/product';
import { ProductEvents } from '@common/events';
import { Observable } from 'rxjs';

/* tslint:disable:component-selector */
@Component({
    selector: 'app-cart-subtotal',
    templateUrl: './cart-subtotal.component.html'
})
export class CartSubtotalComponent implements OnInit, OnDestroy {
    public products$;
    public subtotal: number;
    public tax: number;
    public total: number;

    constructor(private productEvents: ProductEvents) {}

    ngOnInit() {
        this.products$ = this.productEvents.getCart$.subscribe(prods => {
            this.subtotal = prods.reduce((acc, obj) => acc + obj.Price, 0);
            this.tax = this.subtotal * 0.0825;
            this.total = this.tax + this.subtotal + 10;
        });
    }

    ngOnDestroy(): void {
      this.products$.unsubscribe();
    }
}
