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

    constructor(private productEvents: ProductEvents) {}

    ngOnInit() {}

    addProduct() {
        this.productEvents.AddProduct(this.product);
    }
}
