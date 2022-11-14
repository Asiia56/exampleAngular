import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, filter, tap, Subject, takeUntil } from 'rxjs';
import { FormComponent } from '../form/form.component';

import { CraneService } from 'src/app/services/crane.service';
import { Crane, DeepFoundation } from 'src/app/interfaces/cranes';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { DeepFoundationService } from 'src/app/services/deep-foundation.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  crane: Crane[];
  allCrane$: Observable<Crane[]>;
  selectedCrane?: Crane;
  destroyed$ = new Subject<void>();
  isLoggedIn$: Observable<boolean>;

  deepFoundation: DeepFoundation[];
  allDF$: Observable<DeepFoundation[]>;
  selectedDF?: DeepFoundation;

  constructor(private readonly crudApi: CraneService,
    private readonly crudApiDF: DeepFoundationService,
    private readonly dialog: MatDialog, private readonly auth: AuthService,
    private actRoute: ActivatedRoute) {
    const id = this.actRoute.snapshot.paramMap.get('id') as string;
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
      tap(crane => this.crudApi.addCrane(crane)),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

  updateCrane(selectedCrane) {
    const dialogRef = this.dialog.open(FormComponent, {
      data: { ...this.selectedCrane }, //send data about selected crane to form, spread operator for sending data as object
      width: '50%',
    });

    dialogRef.afterClosed().pipe(filter(Boolean),
      tap((crane) => this.selectCrane(crane)),
      tap((crane) => this.crudApi.updateCrane(selectedCrane.$id, crane)),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

  selectCrane(crane: Crane) {
    this.selectedCrane = crane;
  }

  selectDF(deepFoundation: DeepFoundation) {
    this.selectedDF = deepFoundation;
  }


  deleteCrane(selectedCrane) {
    this.crudApi.deleteCrane(selectedCrane.$id);
    this.selectedCrane = undefined;
  }

  closeCrane(selectedCrane) {
    this.selectedCrane = undefined;
    //additional window with crane details emits when some crane is selected, so to close this window there should be no specific crane.
    // Also, it's not a modal window created with MatDialog as it was done with form of add/update crane
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}
