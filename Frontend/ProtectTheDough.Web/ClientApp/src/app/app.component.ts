import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { AuthService } from '@common/services/auth/auth.service';
import { StripeScriptTag } from 'stripe-angular';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    private publishableKey = 'pk_test_xT1uGky9AEXl624nlhfoL7x000rVHcOqAL';
    title = 'app';

    constructor(private auth: AuthService, public stripeScriptTag: StripeScriptTag) {
        console.log(environment.production);
        console.log('API Url:', environment.backendUrl);
        this.stripeScriptTag.setPublishableKey(this.publishableKey);
    }

    ngOnInit() {
        this.auth.localAuthSetup();
        this.auth.handleAuthCallback();
    }
}
