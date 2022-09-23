import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'ExampleTask Angular';

  isLoggedIn$ : Observable<boolean>;

  constructor(private readonly auth: AuthService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.auth.isLoggedIn;
  }

  logout() {
    this.auth.logOut()
      .then(() => this.router.navigate(['']))
      .catch((e) => console.log(e.message));
  }
}
