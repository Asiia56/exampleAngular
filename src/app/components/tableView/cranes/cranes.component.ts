import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DeepFoundation } from 'src/app/interfaces/cranes';
import { DeepFoundationService } from '../../../services/deep-foundation.service';
import { ToastrService } from 'ngx-toastr';
import { MatSort } from '@angular/material/sort';
import { tap } from 'rxjs';

@Component({
  selector: 'app-cranes',
  templateUrl: './cranes2.component.html',
  styleUrls: ['./cranes.component.scss']
})
export class CranesComponent implements OnInit, AfterViewInit {

  constructor(public crudApi: DeepFoundationService, public toastr: ToastrService) {}

  hideWhenNoCrane: boolean = false;
  noData: boolean = false;

  cranes: DeepFoundation[] = [];

  displayedCols = ['name', 'url', 'operWeight', 'maxTorque', 'kellyDrillingDepth', 'kellyDrillingDiameter', 'edit']
  currentCrane: DeepFoundation = null;

  ngOnInit(): void {
    this.dataState();
    this.loadCranes();
  };

  loadCranes() {
    this.crudApi.getCraneList().snapshotChanges().subscribe(data => {
      this.cranes = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$id'] = item.key;
        this.cranes.push(a as DeepFoundation);
      })
    });
  };

  dataState() {
    this.crudApi.getCraneList().valueChanges().subscribe((data: DeepFoundation[]) => {
      if (data.length <= 0) {
        this.hideWhenNoCrane = false;
        this.noData = true;
      } else {
        this.hideWhenNoCrane = true;
        this.noData = false;
      }
    })
  }

  deleteCrane(crane) {
    if (window.confirm('Are sure you want to delete this crane ?')) {
      this.crudApi.deleteCrane(crane.$id)
      this.toastr.success(crane.name + ' successfully deleted!');
    }
  }

  onToggleCrane(crane: DeepFoundation) {
    if (crane == this.currentCrane) {
      this.currentCrane = null;
    }
    else {
      this.currentCrane = crane;
    }
  }

  @ViewChild(MatSort)
  matSort: MatSort;

  ngAfterViewInit() {
    console.log({SORT:this.matSort});
    this.matSort.sortChange.pipe(tap(() => this.loadCranes()));

    /*ERROR TypeError: Cannot read properties of undefined (reading 'sortChange')*/
  }


}
