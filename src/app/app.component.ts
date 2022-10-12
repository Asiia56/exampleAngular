import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn$ : Observable<boolean>;

  title = 'exampleAngular';

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
