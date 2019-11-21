import { Component, OnInit } from '@angular/core';
import { AuthService } from '@common/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {

  profile: any;

  constructor(public auth: AuthService) {
      this.profile = JSON.parse(localStorage.getItem('profile'));
      console.log(this.profile);
  }
  ngOnInit() {
  }

  Save() {
    window.location.reload();
  }
}
