import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Crane } from 'src/app/interfaces/cranes';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() crane$: Observable<Crane[]>;
  @Output() craneEmitter = new EventEmitter<Crane>();

  constructor() { }

  ngOnInit(): void {
  }
  
  selectCrane(crane: Crane) {
    this.craneEmitter.emit(crane);
  }
}
