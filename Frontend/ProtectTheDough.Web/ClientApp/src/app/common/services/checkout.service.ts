import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Checkout } from '@common/models/checkout';
import {Product, ProductDto} from '@common/models/product';

@Injectable({
    providedIn: 'root'
})
export class CheckoutService {
    private apiUrl = 'checkout';
    private fullUrl = environment.backendUrl + this.apiUrl;
    constructor(private http: HttpClient) {}

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    startCheckout(products: ProductDto[]): Observable<string> {
        return this.http.post<Checkout>(this.fullUrl, products, this.httpOptions).pipe(map(x => x.sessionId));
    }
}
