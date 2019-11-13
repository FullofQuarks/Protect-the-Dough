import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@common/models/product';
import { ProductEvents } from '@common/events';

/* tslint:disable:component-selector */
@Component({
    selector: '[app-cart-product]',
    templateUrl: './cart-product.component.html'
})
export class CartProductComponent implements OnInit {
    @Input() product: Product;

    constructor(private productEvents: ProductEvents) {}

    ngOnInit() {}

    removeProductFromCart() {
        this.productEvents.RemoveProduct(this.product);
    }
}
