import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { filter } from 'rxjs/operators';
import { weaponInterface } from 'src/app/interfaces/weaponInterface';
import { WeaponDialogComponent } from './weapon-dialog/weapon-dialog.component';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss'],
})
export class WeaponsComponent implements OnInit {
  @Input() data: Array<weaponInterface>;

  constructor(private dialog: MatDialog) {}
  hexDialogRef: MatDialogRef<WeaponDialogComponent>;

  ngOnInit(): void {}

  openWeaponDialog(): void {
    this.hexDialogRef = this.dialog.open(WeaponDialogComponent, { data: { title: '', label: 'modificador' } });
    this.hexDialogRef
      .afterClosed()
      .pipe(filter((data) => data))
      .subscribe((data) => {
        this.data.push(data);
      });
  }

  changeBulletState(rate: number, weapon: weaponInterface): void {
    weapon.rateOfFire[rate] = !weapon.rateOfFire[rate];
  }

  removeWeapon(weapon: weaponInterface): void {
    const index = this.data.indexOf(weapon);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  }
}
