import { Component, OnInit } from '@angular/core';
import { DeepFoundation } from 'src/app/interfaces/cranes';
import { DeepFoundationService } from '../../../services/deep-foundation.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cranes',
  templateUrl: './cranes.component.html',
  styleUrls: ['./cranes.component.scss']
})
export class CranesComponent implements OnInit {
  p: number = 1;
  Crane: DeepFoundation[] = [];
  hideWhenNoCrane: boolean = false;
  noData: boolean = false;

  cranes: DeepFoundation[] = [];

  displayedCols = ['CraneId', 'Name', 'Visual', 'LoadCapacity', 'TelescopicBoom', 'maxHeight', 'maxRadius', 'axles', 'Edit']

  constructor(public crudApi: DeepFoundationService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.dataState();
    let c = this.crudApi.getCraneList();
    c.snapshotChanges().subscribe(data => {
      this.Crane = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$id'] = item.key;
        this.Crane.push(a as DeepFoundation);
      })
    })
  }

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

}
