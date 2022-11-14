import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Crane, DeepFoundation } from 'src/app/interfaces/cranes';
import { CraneService } from 'src/app/services/crane.service';
import { HighlightDirective } from 'src/app/directives/highlight.directive';
import { NgxShowOddDirective } from 'src/app/directives/ngx-show-odd.directive';
import { DeepFoundationService } from 'src/app/services/deep-foundation.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() Crane: Crane[];//crane$: Observable<Crane[]>;
  @Output() craneEmitter = new EventEmitter<Crane>();
  @Output() dfEmitter = new EventEmitter<DeepFoundation>();

  @ViewChild(HighlightDirective)
  highlighted: HighlightDirective;


  constructor(public crudApi: CraneService,
    public crudApiDF: DeepFoundationService) { }

  ngOnInit(): void {
    this.addCranes();
  }

  addCranes() {
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

  selectDF(deepFoundation: DeepFoundation) {
    this.dfEmitter.emit(deepFoundation);
  }

  drop(event: CdkDragDrop<Crane[]>) {

    moveItemInArray(this.Crane, event.previousIndex, event.currentIndex);

  }
}
