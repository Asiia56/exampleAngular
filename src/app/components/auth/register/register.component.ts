import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginData } from 'src/app/interfaces/login-data';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;

  constructor(private router: Router,
    private readonly auth: AuthService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register(data: LoginData) {
    this.auth.register(data)
      .then(() => this.router.navigate(['/cranes-card-view']))
      .catch(e => console.log(e.message));

    this.toastr.success('Successfully registered!');
  }

}
