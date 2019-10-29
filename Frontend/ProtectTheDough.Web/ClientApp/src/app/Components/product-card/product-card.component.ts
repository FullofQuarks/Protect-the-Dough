import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@common/models/product';
import { ProductEvents } from '@common/events/product.events';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
    @Input() product: Product;
    counter: number;

    constructor(private productEvents: ProductEvents) {}

    ngOnInit() {
        this.counter = 0;
    }

    addProduct() {
        const tempProduct: Product = {
            id: this.counter,
            name: 'Temp Product',
            cost: 4
        };
        this.counter += 1;
        this.productEvents.AddProduct(tempProduct);
    }
}
