import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserId } from '@common/models/user';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'api/products';
    // private fullUrl = environment.backendUrl + "catalog";
    private fullUrl = environment.backendUrl;
    constructor(private http: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    addUser(user: User) {
        const url = environment.backendUrl + 'users';
        return this.http.post<User>(url, user, this.httpOptions);
    }

    updateUser(user: User) {
        const url = environment.backendUrl + 'updateuser/' + user.userID;
        return this.http.post<User>(url, user, this.httpOptions);
    }

    getNumOfUsers() {
        const url = environment.backendUrl + 'numofusers';
        return this.http.get<User[]>(url, this.httpOptions);
    }

    getUserInfo(userInfo: number) {
        const url = environment.backendUrl + 'userinfo/' + userInfo;
        return this.http.get<UserId>(url, this.httpOptions);
    }
}
