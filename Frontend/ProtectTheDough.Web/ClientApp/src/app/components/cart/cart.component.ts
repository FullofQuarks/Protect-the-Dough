import { Component, OnInit } from '@angular/core';
import { ProductEvents } from '@common/events';
import { Product } from '@common/models/product';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
    public products$: Observable<Product[]>;
    constructor(private productEvents: ProductEvents) {}

    ngOnInit() {
        this.products$ = this.productEvents.getCart$;
    }
}
