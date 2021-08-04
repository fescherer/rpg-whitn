import { Component, Input, OnInit } from '@angular/core';
import { characterSheetDataInterface } from 'src/app/interfaces/characterSheetDataInterface';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
  @Input() data: characterSheetDataInterface;


  constructor() { }

  ngOnInit(): void {
  }

}
