import { Action } from '@ngrx/store';
import { User } from '@common/models/user';

export enum UserActionTypes {
    UserLogin = '[User] Login',
    UserLogout = '[User] Logout',
    LoginSuccess = '[User] Login Successful'
}

export class UserLogin implements Action {
    readonly type = UserActionTypes.UserLogin;
}

export class UserLogout implements Action {
    readonly type = UserActionTypes.UserLogout;

    constructor() {}
}

export class LoginSuccess implements Action {
    readonly type = UserActionTypes.LoginSuccess;

    constructor(public payload: { user: any }) {}
}

export type UserActions = UserLogin | UserLogout | LoginSuccess;
