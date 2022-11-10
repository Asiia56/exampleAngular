import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { DeepFoundation } from 'src/app/interfaces/cranes';
import { Observable } from 'rxjs';
import { DeepFoundationService } from 'src/app/services/deep-foundation.service';

@Component({
  selector: 'app-crane-edit',
  templateUrl: './crane-edit.component.html',
  styleUrls: ['./crane-edit.component.scss']
})
export class CraneEditComponent implements OnInit {

  editCraneForm: FormGroup;
  crane: Observable<DeepFoundation>;

  constructor(public fb: FormBuilder,
    public toastr: ToastrService,
    public crudApi: DeepFoundationService,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router) {
    const id = this.actRoute.snapshot.paramMap.get('id') as string;
    this.crudApi.getCrane(id).valueChanges().subscribe(data => {
      this.editCraneForm.setValue(data)
    })
  }

  ngOnInit(): void {
    this.updateCraneForm();
  }

  get name() { return this.editCraneForm.get('name')!; }
  get url() { return this.editCraneForm.get('url')!; }
  get operWeight() { return this.editCraneForm.get('operWeight')!; }
  get maxTorque() { return this.editCraneForm.get('maxTorque')!; }
  get kellyDrillingDepth() { return this.editCraneForm.get('kellyDrillingDepth')!; }
  get kellyDrillingDiameter() { return this.editCraneForm.get('kellyDrillingDiameter')!; }

  //update form
  updateCraneForm() {
    this.editCraneForm = this.fb.group({
      name: ['', Validators.required],
      url: ['', Validators.required],
      operWeight: ['', Validators.required],
      maxTorque: ['', Validators.required],
      kellyDrillingDepth: ['', Validators.required],
      kellyDrillingDiameter: ['', Validators.required]
    });
  }

  //submit form
  updateCrane() {
    const id = this.actRoute.snapshot.paramMap.get('id') as string;
    console.log("crane details sends " + this.editCraneForm.controls['name'].value)
      this.crudApi.updateCrane(id, this.editCraneForm.value);
      this.toastr.success(
        this.editCraneForm.controls['name'].value + ' successfully changed!');
      this.router.navigate(['cranes-table-view']);
  }

  goBack() {
    this.location.back();
  }

  resetForm() {
    this.editCraneForm.reset();
  }
}
