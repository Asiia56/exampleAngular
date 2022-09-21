import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CraneService } from 'src/app/services/crane.service';

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
      name: ['', Validators.required],
      url: ['', Validators.required/*, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]?')*/],
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
    this.resetForm();
  }

  resetForm() {
    this.addCraneForm.reset();
  }

  get name() { return this.addCraneForm.get('name')!; }
  get url() { return this.addCraneForm.get('url')!; }
  get loadCapacity() { return this.addCraneForm.get('loadCapacity')!; }
  get telescopicBoom() { return this.addCraneForm.get('telescopicBoom')!; }
  get maxHeight() { return this.addCraneForm.get('maxHeight')!; }
  get maxRadius() { return this.addCraneForm.get('maxRadius')!; }
  get axles() { return this.addCraneForm.get('axles')!; }
}
