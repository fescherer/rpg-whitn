import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-url-dialog',
  templateUrl: './url-dialog.component.html',
  styleUrls: ['./url-dialog.component.scss'],
})
export class UrlDialogComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<UrlDialogComponent>) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      url: '',
    });
  }

  submitUrl(form: FormGroup): void {
    this.dialogRef.close(`${form.value.url}`);
  }
}
