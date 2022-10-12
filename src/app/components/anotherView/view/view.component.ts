import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, filter, tap, Subject } from 'rxjs';
import { FormComponent } from '../form/form.component';

import { CraneService } from 'src/app/services/crane.service';
import { Crane } from 'src/app/interfaces/cranes';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  crane: Crane[];
  selectedCrane?: Crane;
  destroyed$ = new Subject<void>();
  isLoggedIn$ : Observable<boolean>;

  constructor(private readonly crudApi: CraneService,
    private readonly dialog: MatDialog, private readonly auth: AuthService) {
  }

  ngOnInit(): void {
    this.dataState();
    this.isLoggedIn$ = this.auth.isLoggedIn;
  }

  dataState() {
    this.crudApi.getCraneList().valueChanges().subscribe();
  }

  addCrane() {
    const dialogRef = this.dialog.open(FormComponent, {
      data: {},
      width: '50%',
    });
    dialogRef.afterClosed().pipe(filter(Boolean),
      tap(crane => this.crudApi.addCrane(crane))).subscribe();
  }

  updateCrane() {
    const dialogRef = this.dialog.open(FormComponent, {
      data: { ...this.selectedCrane }, //send data about selected crane to form, spread operator for sending data as object
      width: '50%',
    });

    dialogRef.afterClosed().pipe(filter(Boolean),
      tap((crane) => this.crudApi.updateCrane(crane)),
      tap((crane) => this.selectCrane(crane))
    ).subscribe();
  }

  selectCrane(crane: Crane) {
    this.selectedCrane = crane;
  }

  deleteCrane(selectedCrane) {
    this.crudApi.deleteCrane(selectedCrane.$id);
    this.selectedCrane = undefined;
  }
}
