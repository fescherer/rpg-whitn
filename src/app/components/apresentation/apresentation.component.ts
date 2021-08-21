import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { apresentationInterface } from 'src/app/interfaces/characterSheetDataInterface';

@Component({
  selector: 'app-apresentation',
  templateUrl: './apresentation.component.html',
  styleUrls: ['./apresentation.component.scss']
})
export class ApresentationComponent implements OnInit {
  @Input() data: apresentationInterface;
  apresentationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.apresentationForm = this.formBuilder.group({
      name: [''],
      motivation: [''],
      age: ['', [Validators.required, Validators.pattern("[0-9]*\.?[0-9]*")]],
      height:['', [Validators.required, Validators.pattern("[0-9]*\.?[0-9]*")]],
      weight:['', [Validators.required, Validators.pattern("[0-9]*\.?[0-9]*")]]
    })

    this.apresentationForm.setValue({
      name: this.data.name,
      motivation: this.data.motivation,
      age: this.data.age,
      height: this.data.height,
      weight: this.data.weight,
    });
  }

  saveObject() {
    if(this.apresentationForm.valid){
      this.data.name = this.apresentationForm.value.name;
      this.data.motivation = this.apresentationForm.value.motivation;
      this.data.age = this.apresentationForm.value.age;
      this.data.height = this.apresentationForm.value.height;
      this.data.weight = this.apresentationForm.value.weight;
    }
  }
  
}
