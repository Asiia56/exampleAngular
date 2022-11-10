import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginData } from 'src/app/interfaces/login-data';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor(private router: Router, private readonly auth: AuthService,
    private toastr: ToastrService) { }
  isEnabledForUserLogOut = false;
  isEnabledForUserLogIn = true;

  ngOnInit(): void {
  }

  login(data: LoginData) {
    this.auth.login(data)
      .then(() => this.router.navigate(['/cranes-card-view']))
      .catch(e => console.log(e.message));
      this.isEnabledForUserLogOut = true;
      this.isEnabledForUserLogIn = false;
      this.toastr.success('Successfully logged in!');
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle()
    .then(() => this.router.navigate(['/cranes-card-view']))
    .catch(e => console.log(e.message));
  }

}
