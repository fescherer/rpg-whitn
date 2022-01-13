import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.scss'],
})
export class EffectsComponent implements OnInit {
  @Input() state: any;
  data: any;
  constructor() {}

  ngOnInit(): void {}

  turn(): void {
    this.state.state = !this.state.state;
  }
}
