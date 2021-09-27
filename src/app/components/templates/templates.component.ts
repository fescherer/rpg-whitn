import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { data } from './data';
@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
})
export class TemplatesComponent implements OnInit {
  selectedOption: string = 'default';
  selectedFallenAngel;
  fallenAngelsList = data;
  stats = {
    class: 'D',
  };

  constructor() {}

  ngOnInit(): void {}

  createTemplate() {}

  saveOption() {
    console.log(this.selectedOption);
    this.selectedFallenAngel = this.fallenAngelsList.find((element) => element.value == this.selectedOption);
  }
}
