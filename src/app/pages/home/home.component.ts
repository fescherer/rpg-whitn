import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  submitForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.submitForm = this.formBuilder.group({
      code: ['', [Validators.required]]
    })

  }

  submit(): void {
    if(this.submitForm.valid) {
      this.router.navigate(['/page', this.submitForm.value.code]);
    }
  }

}
