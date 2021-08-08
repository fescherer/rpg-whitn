import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { filter } from 'rxjs/operators';
import { weaponInterface } from 'src/app/interfaces/weaponInterface';
import { WeaponDialogComponent } from './weapon-dialog/weapon-dialog.component';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent implements OnInit {
  @Input() data: string;

  constructor(private dialog: MatDialog) { }
  hexDialogRef: MatDialogRef<WeaponDialogComponent>;
  weapons: Array<weaponInterface> = [
    {
      type: 'melee',
      class: 'D',
      title: "Faca flamejante",
      weaponType: "Faca",
      description: "uma faca pegando fogo",
      damage: "d6",
      range: "Curto",
      rateOfFire: [],
      imageUrl: "https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png",
    },
    {
      type: 'ranged',
      class: 'D',
      title: "Pistola a laser",
      weaponType: "Pistola",
      description: "Uma pistola que solta laser",
      damage: "d8",
      range: "Médio",
      rateOfFire: [true,true,true,false,true],
      imageUrl: "",
    },
    {
      type: 'melee',
      class: 'D',
      title: "Faca flamejante",
      weaponType: "Faca",
      description: "uma faca pegando fogo",
      damage: "d6",
      range: "Curto",
      rateOfFire: [],
      imageUrl: "https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png",
    },
    {
      type: 'melee',
      class: 'D',
      title: "Faca flamejante",
      weaponType: "Faca",
      description: "uma faca pegando fogo",
      damage: "d6",
      range: "Curto",
      rateOfFire: [],
      imageUrl: "https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png",
    },
    

  ];

  ngOnInit(): void {

  }
  
  openWeaponDialog(): void {
    this.hexDialogRef = this.dialog.open(WeaponDialogComponent, {data: {title: '', label: 'modificador'}});
    this.hexDialogRef.afterClosed()
      .pipe(filter(data => data))
      .subscribe(data => {
        this.weapons.push(data);
      });
  }

  changeBulletState(rate: number, weapon: weaponInterface): void {
    weapon.rateOfFire[rate] = !weapon.rateOfFire[rate];
  }

  removeWeapon(weapon: weaponInterface): void {
    const index = this.weapons.indexOf(weapon);
    if (index > -1) {
      this.weapons.splice(index, 1);
    }
  }
}
