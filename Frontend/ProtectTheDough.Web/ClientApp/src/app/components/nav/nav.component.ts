import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '@common/models/product';
import { Subscription } from 'rxjs';
import { ProductEvents } from '@common/events/product.events';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
    private products$: Subscription;
    products: Product[];

    constructor(private productEvents: ProductEvents) {}

    ngOnInit() {
        this.products$ = this.productEvents.getProducts$.subscribe(x => {
            this.products = x;
        });
    }

    ngOnDestroy() {
        this.products$.unsubscribe();
    }
}
