import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@app/components/home/home.component';
import { AboutComponent } from '@app/about/about.component';
import { ProfileComponent } from '@app/components/profile/profile.component';
import { NgModule } from '@angular/core';
import { ProductGuard } from '@common/guards/product.guard';
import { AuthGuard } from '@common/guards/auth.guard';
import { UserInfoComponent } from '@app/components/user-info/user-info.component';
import { RegisterComponent } from '@app/components/register/register.component';
import { LoginComponent } from '@app/components/login/login.component';
import { CartComponent } from '@app/components/cart/cart.component';
import { CheckoutComponent } from '@app/components/checkout/checkout.component';
import { ProfileMfaComponent } from './components/profile/profile-mfa/profile-mfa.component';
import { ProfileSettingsComponent } from './components/profile/profile-settings/profile-settings.component';

const appRoutes: Routes = [
    {
        path: '',
        canActivateChild: [ProductGuard],
        children: [
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'home', component: HomeComponent, pathMatch: 'full' },
            { path: 'about', component: AboutComponent, pathMatch: 'full' },
            { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], pathMatch: 'full' },
            { path: 'register', component: RegisterComponent, pathMatch: 'full' },
            { path: 'userinfo', component: UserInfoComponent, pathMatch: 'full' },
            { path: 'cart', component: CartComponent, pathMatch: 'full' },
            { path: 'userinfo', component: UserInfoComponent, pathMatch: 'full' },
            { path: 'login', component: LoginComponent, pathMatch: 'full' },
            { path: 'checkout', component: CheckoutComponent, pathMatch: 'full' },
            { path: 'mfa', component: ProfileMfaComponent, canActivate: [AuthGuard], pathMatch: 'full' },
            { path: 'settings', component: ProfileSettingsComponent, canActivate: [AuthGuard], pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}
