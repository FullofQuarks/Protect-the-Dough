import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '@common/state';
import { selectUserLoggedIn } from '@common/selectors/user.selector';
import { Observable } from 'rxjs';

@Injectable()
export class UserEvents {
    get isLoggedIn$(): Observable<boolean> {
        return this.store.pipe(select(selectUserLoggedIn));
    }

    constructor(private store: Store<State>) {}
}
