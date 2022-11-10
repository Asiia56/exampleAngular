import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

  //templateUrl: './dashboard-c-on-css.component.html',
  //styleUrls: ['./dashboard-c-on-css.component.scss']

})
export class DashboardComponent implements OnInit {

  isLoggedIn$ : Observable<boolean>;

  constructor(private readonly auth: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.auth.isLoggedIn;
  }

}
