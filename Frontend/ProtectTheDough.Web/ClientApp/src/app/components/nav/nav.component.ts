import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '@common/models/product';
import { Subscription } from 'rxjs';
import { ProductEvents } from '@common/events/product.events';
import { UserEvents } from '@common/events';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
    private products$: Subscription;
    loggedIn$;
    products: Product[];

    constructor(private productEvents: ProductEvents, private userEvents: UserEvents) {}

    ngOnInit() {
        this.products$ = this.productEvents.getProducts$.subscribe(x => {
            this.products = x;
        });
        this.loggedIn$ = this.userEvents.isLoggedIn$;
    }

    ngOnDestroy() {
        this.products$.unsubscribe();
    }

    login() {
        this.userEvents.Login();
    }

    logout() {
        this.userEvents.Logout();
    }
}
