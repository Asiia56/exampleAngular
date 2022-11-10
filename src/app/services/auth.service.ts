import { Injectable } from '@angular/core';
import { LoginData } from '../interfaces/login-data';

import {
  Auth, GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup, signOut
} from '@angular/fire/auth';

import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  //logStatus = false;

  constructor(private auth: Auth) {
    if(this.isLoggedIn){
      this.logStatus.next(true);
    }
  }

  get isLoggedIn() {
    return this.logStatus.asObservable();
  }

  login({ email, password }: LoginData) {
    if (email !== '' && password !== '') {
      this.logStatus.next(true);
    }
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register({ email, password }: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  logOut() {
    this.logStatus.next(false);
    return signOut(this.auth);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }


}
