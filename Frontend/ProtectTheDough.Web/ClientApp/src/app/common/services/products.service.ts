import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '@common/models/product';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private apiUrl = 'api/products';
    // private fullUrl = environment.backendUrl + "catalog";
    private fullUrl = environment.backendUrl + 'catalog';
    constructor(private http: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    getAllProducts() {
        return this.http.get<Product[]>(this.fullUrl, this.httpOptions);
    }
}
