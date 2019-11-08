import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const products = [
            { id: 1, name: 'baguette', cost: 1.75 },
            { id: 2, name: 'croissant', cost: 1.50 },
            { id: 3, name: 'Apple Strudel', cost: 2.50 },
            { id: 4, name: 'Pain au chocolat', cost: 2.75 }
        ];
        return { products };
    }
}
