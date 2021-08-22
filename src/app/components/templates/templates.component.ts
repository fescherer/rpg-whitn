import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {
  foods =[
    {value:'apple', viewValue:'Apple'},
    {value:'pineaple', viewValue:'Pineaple'},
    {value:'grape', viewValue:'Grape'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  createTemplate() {

  }

}
