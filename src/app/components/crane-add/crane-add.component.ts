import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CraneService } from 'src/app/crane.service';

@Component({
  selector: 'app-crane-add',
  templateUrl: './crane-add.component.html',
  styleUrls: ['./crane-add.component.css']
})
export class CraneAddComponent implements OnInit {
  public addCraneForm: FormGroup;

  constructor(public fb: FormBuilder,
    public toastr: ToastrService,
    public crudApi: CraneService) { }

  ngOnInit(): void {
    this.crudApi.getCraneList();
    this.craneForm();
  }

  craneForm() {
    this.addCraneForm = this.fb.group({
      cranename: ['', Validators.required],
      loadCapacity: ['', Validators.required],
      telescopicBoom: ['', Validators.required],
      maxHeight: ['', Validators.required],
      maxRadius: ['', Validators.required],
      axles: ['', Validators.required]
    });
  }

  onSubmit() {
    this.crudApi.addCrane(this.addCraneForm.value);
    this.toastr.success(
      this.addCraneForm.controls['name'].value + ' successfully added!');
    this.ResetForm();
  }

  ResetForm() {
    this.addCraneForm.reset();
  }
  get cranename() { return this.addCraneForm.get('cranename')!; }
  get loadCapacity() { return this.addCraneForm.get('loadCapacity')!; }
  get telescopicBoom() { return this.addCraneForm.get('telescopicBoom')!; }
  get maxHeight() { return this.addCraneForm.get('maxHeight')!; }
  get maxRadius() { return this.addCraneForm.get('maxRadius')!; }
  get axles() { return this.addCraneForm.get('axles')!; }
}
