import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { weaponInterface } from 'src/app/interfaces/weaponInterface';

@Component({
  selector: 'app-weapon-dialog',
  templateUrl: './weapon-dialog.component.html',
  styleUrls: ['./weapon-dialog.component.scss'],
})
export class WeaponDialogComponent implements OnInit {
  weaponMeleeTypes: Array<string> = [
    'Faca pequena',
    'Porrete',
    'Membro modificado',
    'Correntes/Chicore',
    'Espada',
    'Machado',
    'Ferramenta',
    'Lança',
    'Arma grande',
    'Espada nobre',
  ];

  types = [
    { name: 'Corpo a corpo lento', value: 'slow-melee' },
    { name: 'Corpo a corpo rápido', value: 'fast-melee' },
    { name: 'Pistola', value: 'pistol' },
    { name: 'Rifle', value: 'rifle' },
    { name: 'Metralhadora', value: 'machine-gun' },
  ];
  classes: Array<string> = ['D', 'C', 'B', 'A'];
  weapon: weaponInterface = {
    type: 'fast-melee',
    class: 'D',
    title: '',
    description: '',
    imageUrl: '',
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) private parentData: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<WeaponDialogComponent>
  ) {}

  formGroup = new FormGroup({
    type: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    class: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    imageUrl: new FormControl(''),
  });

  ngOnInit(): void {}

  submitData(form: FormGroup): void {
    if (form.valid) {
      this.weapon.type = form.value.type;
      this.weapon.description = form.value.description;
      this.weapon.class = form.value.class;
      this.weapon.imageUrl = form.value.imageUrl;
      this.weapon.title = form.value.title;
      this.dialogRef.close(this.weapon);
    }
  }
}
