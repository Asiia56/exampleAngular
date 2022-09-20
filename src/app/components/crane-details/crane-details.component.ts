import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CraneService } from 'src/app/services/crane.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Crane } from '../../cranes';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crane-details',
  templateUrl: './crane-details.component.html',
  styleUrls: ['./crane-details.component.css']
})

export class CraneDetailsComponent implements OnInit {
  updateCraneForm: FormGroup;
  crane: Observable<Crane>;
  public singleCrane = null;

  constructor(public fb: FormBuilder,
    public toastr: ToastrService,
    public crudApi: CraneService,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.updateCraneData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    console.log(id);
     this.crudApi.getCrane(id).valueChanges().subscribe(data => {
      this.updateCraneForm.setValue(data)
    });
  }

  get name() { return this.updateCraneForm.get('name')!; }
  get loadCapacity() { return this.updateCraneForm.get('loadCapacity')!; }
  get telescopicBoom() { return this.updateCraneForm.get('telescopicBoom')!; }
  get maxHeight() { return this.updateCraneForm.get('maxHeight')!; }
  get maxRadius() { return this.updateCraneForm.get('maxRadius')!; }
  get axles() { return this.updateCraneForm.get('axles')!; }

  updateCraneData() {
    this.updateCraneForm = this.fb.group({
      name: ['', Validators.required],
      loadCapacity: ['', Validators.required],
      telescopicBoom: ['', Validators.required],
      maxHeight: ['', Validators.required],
      maxRadius: ['', Validators.required],
      axles: ['', Validators.required]
    });
  }

  updateForm() {
this.crudApi.updateCrane(this.updateCraneForm.value);
    this.toastr.success(
      this.updateCraneForm.controls['name'].value + ' successfully changed!');
    this.router.navigate(['cranes']);
  }

  goBack() {
    this.location.back();
  }

  resetForm() {
    this.updateCraneForm.reset();
  }


}
