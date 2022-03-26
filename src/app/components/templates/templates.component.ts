import { Component, Input, OnChanges } from '@angular/core';
import { FallenAngelInterface } from 'src/app/interfaces/fallenAngelInterface';
import { dataList } from './data';
@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
})
export class TemplatesComponent implements OnChanges {
  @Input() data: { faId: number; class: number };
  selectedOption: string = 'default';
  fallenAngel: any;
  fallenAngelsList = dataList;

  constructor() {}

  ngOnChanges() {
    this.fallenAngel = this.fallenAngelsList[this.data.faId];
  }

  getClass(num: number): string {
    switch (num) {
      case 0:
        return 'D';
      case 1:
        return 'C';
      case 2:
        return 'B';
      case 3:
        return 'A';
      default:
        return '';
    }
  }
}
