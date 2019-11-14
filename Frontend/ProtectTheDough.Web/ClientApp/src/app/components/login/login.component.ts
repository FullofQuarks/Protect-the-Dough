import { Component, OnInit } from '@angular/core';
import { User } from '@app/common/models/user';
import { UserService } from '@app/common/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;
    user: User;
    constructor(private uService: UserService) {}

    ngOnInit() {}

    Submit() {}
}
