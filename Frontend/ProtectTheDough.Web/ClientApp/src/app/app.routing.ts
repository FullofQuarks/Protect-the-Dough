import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';
import { ShopComponent } from '@app/shop/shop.component';
import { NgModule } from '@angular/core';
import { ProductGuard } from '@common/guards/product.guard';

const appRoutes: Routes = [
    {
        path: '',
        canActivateChild: [ProductGuard],
        children: [
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'home', component: HomeComponent, pathMatch: 'full' },
            { path: 'about', component: AboutComponent, pathMatch: 'full' },
            { path: 'shop', component: ShopComponent, pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}
