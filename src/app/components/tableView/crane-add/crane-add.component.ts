import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CraneService } from 'src/app/services/crane.service';
import { DeepFoundationService } from 'src/app/services/deep-foundation.service';
import { HostListener } from '@angular/core';

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
    private location: Location,
    private router: Router) { }

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
      kellyDrillingDiameter: ['', Validators.required],
      shortDescription: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(60)]]
    });
  }

  onSubmit() {
    this.crudApi.addCrane(this.addCraneForm.value);
    this.router.navigate(['cranes-table-view']);
    this.toastr.success(
      this.addCraneForm.controls['name'].value + ' successfully added!');
  }

  resetForm() {
    this.addCraneForm.reset();
  }

  goBack() {
    this.location.back();
  }

  confirmExit() {
    if(!this.addCraneForm.valid) {
      return confirm('Do you really want to exit without saving this data?');
    } else {
      return null;
    }
  }

  get name() { return this.addCraneForm.get('name')!; }
  get url() { return this.addCraneForm.get('url')!; }
  get operWeight() { return this.addCraneForm.get('operWeight')!; }
  get maxTorque() { return this.addCraneForm.get('maxTorque')!; }
  get kellyDrillingDepth() { return this.addCraneForm.get('kellyDrillingDepth')!; }
  get kellyDrillingDiameter() { return this.addCraneForm.get('kellyDrillingDiameter')!; }
  get shortDescription() { return this.addCraneForm.get('shortDescription'); }

}
