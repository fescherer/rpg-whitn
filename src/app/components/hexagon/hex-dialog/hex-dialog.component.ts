import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-hex-dialog',
  templateUrl: './hex-dialog.component.html',
  styleUrls: ['./hex-dialog.component.scss'],
})
export class HexDialogComponent implements OnInit {
  title: string;
  label: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private parentData: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<HexDialogComponent>
  ) {
    this.title = parentData.title;
    this.label = parentData.label;
  }

  formGroup = new FormGroup({
    data: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]),
  });

  ngOnInit(): void {}

  submitData(form: FormGroup): void {
    if (form.valid) this.dialogRef.close(`${form.value.data}`);
  }
}
