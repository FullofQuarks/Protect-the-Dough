import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@common/models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private apiUrl = 'api/products';
    constructor(private http: HttpClient) {}

    getAllProducts() {
        return this.http.get<Product[]>(this.apiUrl);
    }
}
