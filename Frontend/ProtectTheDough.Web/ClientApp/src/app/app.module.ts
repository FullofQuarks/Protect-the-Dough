import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './common/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppEffects } from '@common/effects/site.effects';
import { EffectsModule } from '@ngrx/effects';
import { ProductEvents } from '@common/events/product.events';
import { InMemoryDataService } from '@common/services/in-memory-data.service';
import { UserEvents } from '@common/events';
import { ProductEffects } from '@common/effects/product.effects';
import { AppRoutingModule } from '@app/app.routing';

@NgModule({
    declarations: [AppComponent, HomeComponent, NavComponent, ProductCardComponent, AboutComponent, ShopComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        NgbModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
        FormsModule,
        AppRoutingModule,
        EffectsModule.forRoot([AppEffects, ProductEffects]),
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
            serialize: true
        })
    ],
    providers: [ProductEvents, UserEvents],
    bootstrap: [AppComponent]
})
export class AppModule {}
