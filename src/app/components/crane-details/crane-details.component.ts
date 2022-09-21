import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CraneService } from 'src/app/services/crane.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Crane } from '../../cranes';
import { Observable } from 'rxjs';
import { CranesComponent } from '../cranes/cranes.component';

@Component({
  selector: 'app-crane-details',
  templateUrl: './crane-details.component.html',
  styleUrls: ['./crane-details.component.css']
})

export class CraneDetailsComponent implements OnInit {
  editCraneForm: FormGroup;
  crane: Observable<Crane>;

  constructor(public fb: FormBuilder,
    public toastr: ToastrService,
    public crudApi: CraneService,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router) {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi.getCrane(id).valueChanges().subscribe(data => {
      this.editCraneForm.setValue(data)
    })
  }

  ngOnInit(): void {
    this.updateCraneForm();
  }

  get name() { return this.editCraneForm.get('name')!; }
  get loadCapacity() { return this.editCraneForm.get('loadCapacity')!; }
  get telescopicBoom() { return this.editCraneForm.get('telescopicBoom')!; }
  get maxHeight() { return this.editCraneForm.get('maxHeight')!; }
  get maxRadius() { return this.editCraneForm.get('maxRadius')!; }
  get axles() { return this.editCraneForm.get('axles')!; }

  //update form
  updateCraneForm() {
    this.editCraneForm = this.fb.group({
      name: ['', Validators.required],
      loadCapacity: ['', Validators.required],
      telescopicBoom: ['', Validators.required],
      maxHeight: ['', Validators.required],
      maxRadius: ['', Validators.required],
      axles: ['', Validators.required]
    });
  }

  //submit form
  updateCrane() {
    const id = this.actRoute.snapshot.paramMap.get('id');
      this.crudApi.updateCrane(id, this.editCraneForm.value);
      this.toastr.success(
        this.editCraneForm.controls['name'].value + ' successfully changed!');
      this.router.navigate(['cranes']);
  }

  goBack() {
    this.location.back();
  }

  resetForm() {
    this.editCraneForm.reset();
  }


}
