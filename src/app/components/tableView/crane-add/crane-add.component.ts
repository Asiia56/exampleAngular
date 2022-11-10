import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CraneService } from 'src/app/services/crane.service';
import { DeepFoundationService } from 'src/app/services/deep-foundation.service';

@Component({
  selector: 'app-crane-add',
  templateUrl: './crane-add.component.html',
  styleUrls: ['./crane-add.component.scss']
})
export class CraneAddComponent implements OnInit {
  public addCraneForm: FormGroup;

  constructor(public fb: FormBuilder,
    public toastr: ToastrService,
    public crudApi: DeepFoundationService,
    private location: Location) { }

  ngOnInit(): void {
    this.crudApi.getCraneList();
    this.craneForm();
  }

  sliderValue: number = 30;
  updateSetting(event: { value: number; }) {
    this.sliderValue = event.value;
  }

  craneForm() {
    this.addCraneForm = this.fb.group({
      name: ['', Validators.required],
      url: ['', Validators.required],
      operWeight: ['', Validators.required],
      maxTorque: ['', Validators.required],
      kellyDrillingDepth: ['', Validators.required],
      kellyDrillingDiameter: ['', Validators.required]
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

  goBack() {
    this.location.back();
  }

  confirmExit() {
    return confirm ('Do you really want to exit without saving this data?');
  }

  get name() { return this.addCraneForm.get('name')!; }
  get url() { return this.addCraneForm.get('url')!; }
  get operWeight() { return this.addCraneForm.get('operWeight')!; }
  get maxTorque() { return this.addCraneForm.get('maxTorque')!; }
  get kellyDrillingDepth() { return this.addCraneForm.get('kellyDrillingDepth')!; }
  get kellyDrillingDiameter() { return this.addCraneForm.get('kellyDrillingDiameter')!; }

}
