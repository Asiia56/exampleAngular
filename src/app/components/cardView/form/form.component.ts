import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Crane } from 'src/app/interfaces/cranes';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: UntypedFormGroup;

  constructor(
    private readonly fb: UntypedFormBuilder,
    public readonly dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly crane: Crane) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.form = this.fb.group({
      name: [this.crane.name, Validators.required], //this.crane.name as reference to data, which received from @Input and should be inserted into respetive input field.
      url: [this.crane.url, Validators.required], //w/o it, form will not understand what to do with received object
      loadCapacity: [this.crane.loadCapacity, Validators.required],
      telescopicBoom: [this.crane.telescopicBoom, Validators.required],
      maxHeight: [this.crane.maxHeight, Validators.required],
      maxRadius: [this.crane.maxRadius, Validators.required],
      axles: [this.crane.axles, Validators.required],
      shortDescription: [this.crane.shortDescription, [Validators.required, Validators.minLength(10), Validators.maxLength(60)]]
    });
  }

  onSubmit() {
    this.dialogRef.close({ ...this.crane, ...this.form.value });//usage of spread operator to reuse the form both for creating and updating
  }

  close() {
    this.dialogRef.close();
  }
}
