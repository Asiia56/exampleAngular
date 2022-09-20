import { Component, OnInit } from '@angular/core';
import { Crane } from '../../cranes';
import { CraneService } from '../../services/crane.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cranes',
  templateUrl: './cranes.component.html',
  styleUrls: ['./cranes.component.css']
})
export class CranesComponent implements OnInit {
  p: number = 1;
  Crane: Crane[];
  hideWhenNoCrane: boolean = false;
  noData: boolean = false;

  constructor(public crudApi: CraneService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.dataState();
    let c = this.crudApi.getCraneList();
    c.snapshotChanges().subscribe(data => {
      this.Crane = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$id'] = item.key ;
        this.Crane.push(a as Crane);
      })
    })
  }

  dataState() {
    this.crudApi.getCraneList().valueChanges().subscribe(data => {
      if(data.length <= 0) {
        this.hideWhenNoCrane = false;
        this.noData = true;
      } else {
        this.hideWhenNoCrane = true;
        this.noData = false;
      }
    })
  }

  deleteCrane(crane) {
    if(window.confirm('Are sure you want to delete this crane ?')) {
      this.crudApi.deleteCrane(crane.$id)
      this.toastr.success(crane.name + ' successfully deleted!');
    }
  }
    
}
