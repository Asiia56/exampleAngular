import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Crane } from 'src/app/interfaces/cranes';
import { CraneService } from 'src/app/services/crane.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() Crane: Crane[];//crane$: Observable<Crane[]>;
  @Output() craneEmitter = new EventEmitter<Crane>();

  constructor(public crudApi: CraneService) { }

  ngOnInit(): void {
    let c = this.crudApi.getCraneList();
    c.snapshotChanges().subscribe(data => {
      this.Crane = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$id'] = item.key;
        this.Crane.push(a as Crane);
      })
    })
  }

  selectCrane(crane: Crane) {
    this.craneEmitter.emit(crane);
  }
}
