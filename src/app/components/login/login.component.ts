import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginData } from 'src/app/interfaces/login-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private router: Router, private readonly auth: AuthService) { }
  isEnabledForUserLogOut = false;
  isEnabledForUserLogIn = true;

  ngOnInit(): void {
  }

  login(data: LoginData) {
    this.auth.login(data)
      .then(() => this.router.navigate(['/cranes']))
      .catch(e => console.log(e.message));
      this.isEnabledForUserLogOut = true;
      this.isEnabledForUserLogIn = false;
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle()
    .then(() => this.router.navigate(['/cranes']))
    .catch(e => console.log(e.message));
  }

}
