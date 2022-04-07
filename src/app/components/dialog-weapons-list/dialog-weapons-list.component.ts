import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { weaponInterface } from 'src/app/interfaces/weaponInterface';
import { weaponD, weaponC, weaponB, weaponA } from './weapon-data';
@Component({
  selector: 'app-dialog-weapons-list',
  templateUrl: './dialog-weapons-list.component.html',
  styleUrls: ['./dialog-weapons-list.component.scss'],
})
export class DialogWeaponsListComponent implements OnInit {
  dataWeaponD: weaponInterface[] = weaponD;
  dataWeaponC: weaponInterface[] = weaponC;
  dataWeaponB: weaponInterface[] = weaponB;
  dataWeaponA: weaponInterface[] = weaponA;

  constructor(public dialogRef: MatDialogRef<DialogWeaponsListComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close();
  }
}
