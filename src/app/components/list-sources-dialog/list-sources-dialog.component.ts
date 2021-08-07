import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HexDialogComponent } from '../hexagon/hex-dialog/hex-dialog.component';

@Component({
  selector: 'app-list-sources-dialog',
  templateUrl: './list-sources-dialog.component.html',
  styleUrls: ['./list-sources-dialog.component.scss']
})
export class ListSourcesDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private parentData: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ListSourcesDialogComponent>,
  ) {
  }

  formGroup = new FormGroup({
    data: new FormControl(''),
  })

  ngOnInit(): void {  

  }

  submitData(form: FormGroup): void{
    if(form.valid)
      this.dialogRef.close(`${form.value.data}`);
  }
}
