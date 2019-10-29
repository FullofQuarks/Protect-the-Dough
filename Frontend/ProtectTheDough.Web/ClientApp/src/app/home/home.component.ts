import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '../common/reducers';
import { ProductActionTypes } from '../common/actions/product.actions';
import { siteFeatureKey } from '../common/reducers/site.reducer';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private store: Store<State>) {}
    message: Observable<string>;

    ngOnInit() {
    }
}
