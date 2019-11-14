import { Component, OnInit } from '@angular/core';
import { User } from '@common/models/user';
import { UserService } from '@app/common/services/user.service';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
    user: User;
    StreetNumber: string;
    StreetName: string;
    City: string;
    State: string;
    ZipCode: string;
    repeatedPassword: string;

    constructor(private uService: UserService) {
        this.user = new User(999, '', '', '', '', false);
        this.user.username = 'user1';
        this.user.email = 'email@email.com';
        this.user.address = 'My address';
    }

    ngOnInit() {
        this.user = new User(999, '', '', '', '', false);
        this.uService.getUserInfo(1).subscribe((data: any) => {
            this.user = data;
            console.log(this.user);
        });
    }

    Save() {
        console.log(this.user);
        if (this.ValidateForm()) {
            this.uService.updateUser(this.user).subscribe();
            alert('User Updated!');
        } else {
            alert('errors with form!');
            return false;
        }
    }

    ValidateForm(): boolean {
        if (this.user.username === '') {
            return false;
        }
        if (this.user.password === '' || this.user.password !== this.repeatedPassword) {
            return false;
        }
        if (this.user.email === '') {
            return false;
        }
        if (this.user.address === '') {
            return false;
        }
        if (this.user.userID === 999) {
            return false;
        }
        return true;
    }
}
