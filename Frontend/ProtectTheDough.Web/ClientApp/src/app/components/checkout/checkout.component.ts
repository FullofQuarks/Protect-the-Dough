import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { StripeSource, StripeToken } from 'stripe-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '@common/models/product';
import { ProductEvents } from '@common/events';
import { map } from 'rxjs/operators';
import { ProductSku } from '@common/models/ProductSku';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit, OnDestroy {
    @ViewChild('stripeCard', { static: false }) stripeCard;
    stripe: stripe.Stripe = Stripe('pk_test_xT1uGky9AEXl624nlhfoL7x000rVHcOqAL');
    public checkoutForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(4)]),
        city: new FormControl('', Validators.required),
        address: new FormControl('', [Validators.required, Validators.minLength(4)]),
        state: new FormControl('', [Validators.required, Validators.maxLength(2)]),
        zip: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    });
    private cartProducts: Product[];
    private cartSkus: ProductSku[];
    private products$;

    public invalidError: any;
    constructor(private productEvents: ProductEvents) {}

    ngOnInit() {
        this.products$ = this.productEvents.getCart$.subscribe(x => (this.cartProducts = x));
    }

    ngOnDestroy(): void {
        this.products$.unsubscribe();
    }

    payWithStripe() {
        this.cartSkus = this.cartProducts.map(x => ({ sku: x.sku, quantity: 1 }));
        this.checkoutRedirect().then(x => {
            console.log('Promise returned: ', x);
        });
    }

    async checkoutRedirect() {
        const { error } = await this.stripe.redirectToCheckout({
            items: this.cartSkus,
            successUrl: 'https://protectthedough.shop',
            cancelUrl: 'https://protectthedoughs.hop'
        });
    }

    onStripeInvalid(error: Error) {
        console.log('Validation Error', error);
    }

    setStripeToken(token: StripeToken) {
        console.log('Stripe token', token);
    }

    setStripeSource(source: StripeSource) {
        console.log('Stripe source', source);
    }

    onStripeError(error: Error) {
        console.error('Stripe error', error);
    }

    tokenizeData() {
        const dataToTokenize = {
            address_city: this.checkoutForm.get('city').value,
            address_line1: this.checkoutForm.get('address').value,
            address_state: this.checkoutForm.get('state').value,
            address_zip: this.checkoutForm.get('zip').value,
            name: this.checkoutForm.get('name').value
        };

        this.stripeCard.createToken(dataToTokenize);
    }
}
