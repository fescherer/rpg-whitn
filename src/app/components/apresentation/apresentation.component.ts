import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-apresentation',
  templateUrl: './apresentation.component.html',
  styleUrls: ['./apresentation.component.scss']
})
export class ApresentationComponent implements OnInit {

  apresentationForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.apresentationForm = this.formBuilder.group({
      name: [''],
      motivation: [''],
      age:['',[Validators.required, Validators.pattern("^[0-9]*$")]],
      gender:['']
    })
  }

  save() {
    if(this.apresentationForm.valid)
      console.log(this.apresentationForm.value);
  }
}
