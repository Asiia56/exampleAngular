import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Crane } from 'src/app/interfaces/cranes';
import { CraneService } from 'src/app/services/crane.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() crane: Crane;
  @Output() updateCrane = new EventEmitter<void>;
  @Output() deleteCrane = new EventEmitter<void>;
  isLoggedIn$: Observable<boolean>;

  constructor(private readonly auth: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.auth.isLoggedIn;
  }

  update() {
    this.updateCrane.emit();
  }

  delete() {
    this.deleteCrane.emit();
  }

}
