import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginData } from 'src/app/interfaces/login-data';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  @Output() formData: EventEmitter<LoginData> = new EventEmitter();
  
  hide = true;

  constructor(private fb: FormBuilder, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(7),
        Validators.maxLength(60)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit() {
    this.formData.emit(this.form.value);
  }

  get email() { return this.form.get('email') };
  get password() { return this.form.get('password') };


}
