import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Crane } from 'src/app/interfaces/cranes';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() crane: Crane;
  @Output() updateCrane = new EventEmitter<void>;
  @Output() deleteCrane = new EventEmitter<void>;

  constructor() { }

  ngOnInit(): void {
  }

  update() {
    this.updateCrane.emit();
  }

  delete() {
    this.deleteCrane.emit();
  }

}
