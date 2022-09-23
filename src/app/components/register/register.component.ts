import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginData } from 'src/app/interfaces/login-data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private readonly auth: AuthService) { }

  ngOnInit(): void {
  }

  register(data: LoginData) {
    this.auth.register(data)
      .then(() => this.router.navigate(['/login']))
      .catch(e => console.log(e.message));
  }

}
