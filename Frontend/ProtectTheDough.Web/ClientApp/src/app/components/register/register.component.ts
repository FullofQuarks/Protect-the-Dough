import { Component, OnInit } from '@angular/core';
import { User } from '@common/models/user';
import { NumberValueAccessor } from '@angular/forms';
import { UserService } from '@common/services/user.service';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    constructor(private uService: UserService) {}
    newUser: User;
    repeatedPassword: string;
    lastUserID: number;
    ngOnInit() {
        this.newUser = new User(999, '', '', '', '', false);
        this.uService.getNumOfUsers().subscribe((data: any) => {
            this.lastUserID = data;
            console.log(this.lastUserID);
        });
    }

    ValidateForm(): boolean {
        if (this.newUser.username === '') {
            return false;
        }
        if (this.newUser.password === '' || this.newUser.password !== this.repeatedPassword) {
            return false;
        }
        if (this.newUser.email === '') {
            return false;
        }
        if (this.newUser.address === '') {
            return false;
        }
        if (this.newUser.userID === 999) {
            return false;
        }
        return true;
    }
    Submit() {
        this.newUser.userID = this.lastUserID + 1;
        if (this.ValidateForm()) {
            this.uService.addUser(this.newUser).subscribe();
            this.ClearForm();
            alert('User Added!');
        } else {
            alert('errors with form!');
            return false;
        }
    }
    ClearForm() {
        this.newUser.username = '';
        this.newUser.password = '';
        this.newUser.email = '';
        this.newUser.address = '';
        this.newUser.userID = 999;
        this.repeatedPassword = '';
    }
}
