import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductEvents } from '@common/events/product.events';
import { Product } from '@common/models/product';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public products: Observable<Product[]>;
    public subtotal: number;

    constructor(private productEvents: ProductEvents) {}

    ngOnInit() {
        this.products = this.productEvents.getProducts$;
    }

    removeProduct(id: number) {
        this.productEvents.RemoveProduct(0, id);
    }

    emptyCart() {
        this.productEvents.RemoveAllProducts(0);
    }
}
