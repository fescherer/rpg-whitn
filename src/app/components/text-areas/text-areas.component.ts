import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-areas',
  templateUrl: './text-areas.component.html',
  styleUrls: ['./text-areas.component.scss'],
})
export class TextAreasComponent implements OnInit {
  @Input() data;
  constructor() {}

  ngOnInit(): void {}
}
