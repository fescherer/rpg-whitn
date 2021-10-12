import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { weaponInterface } from 'src/app/interfaces/weaponInterface';
import {
  weaponBow,
  weaponMachineGun,
  weaponMeleeStrong,
  weaponMeleeWeak,
  weaponPistol,
  weaponRifle,
  weaponShotgun,
} from './weapon-data';
@Component({
  selector: 'app-dialog-weapons-list',
  templateUrl: './dialog-weapons-list.component.html',
  styleUrls: ['./dialog-weapons-list.component.scss'],
})
export class DialogWeaponsListComponent implements OnInit {
  dataWeaponMeleeWeak: weaponInterface[] = weaponMeleeWeak;
  dataWeaponMeleeStrong: weaponInterface[] = weaponMeleeStrong;
  weaponBow: weaponInterface[] = weaponBow;
  weaponPistol: weaponInterface[] = weaponPistol;
  weaponShotgun: weaponInterface[] = weaponShotgun;
  weaponRifle: weaponInterface[] = weaponRifle;
  weaponMachineGun: weaponInterface[] = weaponMachineGun;

  constructor(public dialogRef: MatDialogRef<DialogWeaponsListComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close();
  }
}
