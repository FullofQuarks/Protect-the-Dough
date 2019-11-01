import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '@common/models/user';

export const productAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export interface UserState extends EntityState<User> {
    userId: number;
    username: string;
    isLoggedIn: boolean;
}

export const initialState: UserState = productAdapter.getInitialState({
    userId: 0,
    username: '',
    isLoggedIn: false
});
