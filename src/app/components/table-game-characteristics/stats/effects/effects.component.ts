import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.scss']
})
export class EffectsComponent implements OnInit {
  state: boolean = false;
  @Input() color: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
