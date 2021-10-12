import { Component, Input, OnInit } from '@angular/core';
import { weaponInterface } from 'src/app/interfaces/weaponInterface';

@Component({
  selector: 'app-weapon-table',
  templateUrl: './weapon-table.component.html',
  styleUrls: ['./weapon-table.component.scss'],
})
export class WeaponTableComponent implements OnInit {
  @Input() data: weaponInterface[];
  @Input() ranged: boolean = false;
  displayedColumns: string[];

  constructor() {}

  ngOnInit(): void {
    if (this.ranged) {
      this.displayedColumns = ['class', 'damage', 'eg', 'distance', 'fireRate'];
    } else {
      this.displayedColumns = ['class', 'damage', 'eg', 'distance'];
    }
  }
}
