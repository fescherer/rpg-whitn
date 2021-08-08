import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { effectTypeInterface } from 'src/app/interfaces/stabilityInterface';
import { HexDialogComponent } from '../hexagon/hex-dialog/hex-dialog.component';

@Component({
  selector: 'app-list-effects-dialog',
  templateUrl: './list-effects-dialog.component.html',
  styleUrls: ['./list-effects-dialog.component.scss']
})
export class ListEffectsDialogComponent implements OnInit {
  effectsTypes: effectTypeInterface[] = [
    {title:"Trauma",duration:"", relatedTo: ""},
    {title:"Paranoia",duration:"", relatedTo: ""},
    {title:"Medo(Fobia)",duration:"", relatedTo: ""},
    {title:"Amnésia Seletiva",duration:"", relatedTo: ""},
    {title:"Obssesão",duration:"", relatedTo: ""},
    {title:"Mania",duration:"", relatedTo: ""}
  ]
  constructor(
    @Inject(MAT_DIALOG_DATA) private parentData: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ListEffectsDialogComponent>,
  ) { 
  }

  formGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    relatedTo: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
  }

  submitData(form: FormGroup): void{
    if(form.valid){
      const object:effectTypeInterface = {
        title: form.value.title,
        duration: form.value.duration,
        relatedTo: form.value.relatedTo
      }
      this.dialogRef.close(object);
    }
  }
}
