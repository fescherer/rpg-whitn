import { Component, Input, OnInit } from '@angular/core';
import { effectInterface } from 'src/app/interfaces/effect';

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.scss']
})
export class EffectsComponent implements OnInit {
  @Input() data: effectInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
