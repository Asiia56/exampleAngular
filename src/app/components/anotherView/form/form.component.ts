import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Crane } from 'src/app/interfaces/cranes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
form: FormGroup;

  constructor(private readonly fb: FormBuilder, 
    public readonly dialogRef: MatDialogRef<FormComponent>,//close the dialog in which our form is contained
    @Inject(MAT_DIALOG_DATA) private readonly crane: Crane) { }

  ngOnInit(): void {
    this.setForm();
  }

 setForm() {
  this.form = this.fb.group({
    name: ['', Validators.required],
    url: ['', Validators.required],
    loadCapacity: ['', Validators.required],
    telescopicBoom: ['', Validators.required],
    maxHeight: ['', Validators.required],
    maxRadius: ['', Validators.required],
    axles: ['', Validators.required]
  });
 }

 onSubmit() {
  this.dialogRef.close({ ...this.crane, ...this.form.value});//usage of spread operator to reuse the form both for creating and updating 
 }
}
