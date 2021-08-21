import { Component, Input, OnInit } from '@angular/core';
import { attributesInterface, characterSheetDataInterface } from 'src/app/interfaces/characterSheetDataInterface';

@Component({
  selector: 'app-secondary-attributes',
  templateUrl: './secondary-attributes.component.html',
  styleUrls: ['./secondary-attributes.component.scss']
})
export class SecondaryAttributesComponent implements OnInit {
  @Input() data: characterSheetDataInterface;
  @Input() attributes: attributesInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
