import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductEvents } from '@common/events/product.events';
import { Product } from '@common/models/product';
import { UserEvents } from '@common/events';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public products: Observable<Product[]>;
    public isSiteLoaded$: Observable<boolean>;
    public loggedIn$: Observable<boolean>;

    constructor(private productEvents: ProductEvents, private userEvents: UserEvents) {}

    ngOnInit() {
        this.products = this.productEvents.getProducts$;
        this.loggedIn$ = this.userEvents.isLoggedIn$;
    }
}
