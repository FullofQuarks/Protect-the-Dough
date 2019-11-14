import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AboutComponent } from './about/about.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './common/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppEffects } from '@common/effects/site.effects';
import { EffectsModule } from '@ngrx/effects';
import { RegisterComponent } from './components/register/register.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ProductEvents } from '@common/events/product.events';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserEvents } from '@common/events';
import { ProductEffects } from '@common/effects/product.effects';
import { AppRoutingModule } from '@app/app.routing';
import { ProfileComponent } from './components/profile/profile.component';
import { UserEffects } from '@common/effects/user.effects';
import { AuthService } from '@common/services/auth/auth.service';
import { AuthGuard } from '@common/guards/auth.guard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { CartSubtotalComponent } from '@app/components/cart/cart-subtotal/cart-subtotal.component';
import { LoginComponent } from '@app/components/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        CartComponent,
        CartProductComponent,
        CartSubtotalComponent,
        HomeComponent,
        NavComponent,
        ProductCardComponent,
        AboutComponent,
        RegisterComponent,
        UserInfoComponent,
        ProfileComponent,
        LoginComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        FontAwesomeModule,
        NgbModule,
        HttpClientModule,
        FormsModule,
        EffectsModule.forRoot([AppEffects]),
        AppRoutingModule,
        EffectsModule.forRoot([AppEffects, ProductEffects, UserEffects]),
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
        }),
        ToastrModule.forRoot(),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    ],
    providers: [ProductEvents, UserEvents, AuthService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
