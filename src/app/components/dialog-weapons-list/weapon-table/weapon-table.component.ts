import { Component, Input, OnInit } from '@angular/core';
import { weaponInterface } from 'src/app/interfaces/weaponInterface';

@Component({
  selector: 'app-weapon-table',
  templateUrl: './weapon-table.component.html',
  styleUrls: ['./weapon-table.component.scss'],
})
export class WeaponTableComponent {
  @Input() data: weaponInterface[];
  displayedColumns: string[] = ['name', 'special', 'damage', 'aimed'];

  constructor() {}
}
