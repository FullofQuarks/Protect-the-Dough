import { Component, OnInit } from '@angular/core';
import { AuthService } from '@common/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-mfa.component.html',
  styleUrls: ['./profile-mfa.component.css']
})
export class ProfileMfaComponent implements OnInit {

  profile: any;

  constructor(public auth: AuthService) {
      this.profile = JSON.parse(localStorage.getItem('profile'));
      console.log(this.profile);
  }
  ngOnInit() {
  }

}
