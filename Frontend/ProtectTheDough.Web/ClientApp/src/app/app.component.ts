import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { AuthService } from '@common/services/auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    title = 'app';

    constructor(private auth: AuthService) {
        console.log(environment.production);
        console.log('API Url:', environment.backendUrl);
    }

    ngOnInit() {
        this.auth.localAuthSetup();
        this.auth.handleAuthCallback();
    }
}
