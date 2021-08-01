import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { FirestoreServiceService } from 'src/app/services/firestore-service.service';

@Component({
  selector: 'app-apresentation',
  templateUrl: './apresentation.component.html',
  styleUrls: ['./apresentation.component.scss']
})
export class ApresentationComponent implements OnInit {

  apresentationForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pageService: FirestoreServiceService
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
    if(this.apresentationForm.valid){
      this.pageService.createCharacterSheet(this.apresentationForm.value)
    }
      
  }
}
