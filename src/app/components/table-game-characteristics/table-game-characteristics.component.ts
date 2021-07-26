import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-game-characteristics',
  templateUrl: './table-game-characteristics.component.html',
  styleUrls: ['./table-game-characteristics.component.scss']
})
export class TableGameCharacteristicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log('oi');
  }

}
