import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Crane } from 'src/app/interfaces/cranes';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() crane: Crane;
  @Output() updateCrane = new EventEmitter<void>;
  @Output() deleteCrane = new EventEmitter<void>;
  @Output() closeCrane = new EventEmitter<void>;
  isLoggedIn$: Observable<boolean>;

  constructor(private readonly auth: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.auth.isLoggedIn;
  }

  close() {
    this.closeCrane.emit();
  }

  update() {
    this.updateCrane.emit();
  }

  delete() {
    this.deleteCrane.emit();
  }

}
