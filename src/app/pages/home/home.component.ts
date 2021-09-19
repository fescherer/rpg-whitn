import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  submitForm: FormGroup;
  data: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private pageService: PageService) {}

  ngOnInit(): void {
    this.submitForm = this.formBuilder.group({
      code: ['', [Validators.required]],
    });
  }

  submit(): void {
    if (this.submitForm.valid) {
      this.router.navigate(['/page', this.submitForm.value.code]);
    }
  }
}
