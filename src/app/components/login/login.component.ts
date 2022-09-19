import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  submit(login: NgForm) {
    alert("Form Submitted! Thank you!");
    console.log("Send", login)
  }

  constructor() { }

  ngOnInit(): void {   
  }

}
