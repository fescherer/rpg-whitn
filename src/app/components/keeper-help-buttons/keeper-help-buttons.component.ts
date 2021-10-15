import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keeper-help-buttons',
  templateUrl: './keeper-help-buttons.component.html',
  styleUrls: ['./keeper-help-buttons.component.scss'],
})
export class KeeperHelpButtonsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openLink(url: string) {
    window.open(url);
  }
}
