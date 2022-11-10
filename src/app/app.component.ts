import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn$ : Observable<boolean>;

  title = 'exampleAngular';

  constructor(private readonly auth: AuthService,
    private readonly router: Router, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.auth.isLoggedIn;
  }

  logout() {
    this.auth.logOut()
      .then(() => this.router.navigate(['']))
      .catch((e) => console.log(e.message));
      this.toastr.success('Successfully logged out!');
  }
}
