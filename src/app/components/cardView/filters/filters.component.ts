import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Crane } from 'src/app/interfaces/cranes';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(private readonly fb:FormBuilder) { }

  ngOnInit(): void {
    this.setForm();
  }

  filter: FormGroup;
  setForm() {
    this.filter = this.fb.group({
      loadCapacity: [''],
      axles: [''],
    });
  }
}
