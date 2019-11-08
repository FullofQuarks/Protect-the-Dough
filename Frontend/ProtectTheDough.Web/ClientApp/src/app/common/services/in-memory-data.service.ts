import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const products = [
            { id: 1, name: 'baguette' },
            { id: 2, name: 'croissant' },
            { id: 3, name: 'Apple Strudel' },
            { id: 4, name: 'Pain au chocolat' }
        ];
        return { products };
    }
}
