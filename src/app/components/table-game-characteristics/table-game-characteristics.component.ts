import { Component, Input, OnInit } from '@angular/core';
import {
  characterSheetDataInterface,
  gameplayCharacteristicsInterface,
} from 'src/app/interfaces/characterSheetDataInterface';
import { hex3Interface } from 'src/app/interfaces/hexInterface';

@Component({
  selector: 'app-table-game-characteristics',
  templateUrl: './table-game-characteristics.component.html',
  styleUrls: ['./table-game-characteristics.component.scss'],
})
export class TableGameCharacteristicsComponent implements OnInit {
  @Input() data: characterSheetDataInterface;

  constructor() {}

  ngOnInit(): void {}
}
