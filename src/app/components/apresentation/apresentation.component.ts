import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { apresentationInterface } from 'src/app/interfaces/characterSheetDataInterface';
import { UrlDialogComponent } from '../table-game-characteristics/currently-effects/url-dialog/url-dialog.component';

@Component({
  selector: 'app-apresentation',
  templateUrl: './apresentation.component.html',
  styleUrls: ['./apresentation.component.scss']
})
export class ApresentationComponent implements OnInit {
  @Input() data: apresentationInterface;
  apresentationForm: FormGroup;
  urlRequestDialog: MatDialogRef<UrlDialogComponent>;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.apresentationForm = this.formBuilder.group({
      name: [''],
      motivation: [''],
      age: ['', [Validators.required, Validators.pattern("[0-9]*\.?[0-9]*")]],
    })
  }

  saveObject() {
    this.data.name = this.apresentationForm.value.name;
    this.data.motivation = this.apresentationForm.value.motivation;
    if(this.apresentationForm.valid){
      this.data.age = this.apresentationForm.value.age;
    }
  }

  searchImage() {
    this.urlRequestDialog = this.dialog.open(UrlDialogComponent);
    this.urlRequestDialog.afterClosed()
      .pipe(filter(url => url))
      .subscribe(url => this.data.photo = url);
  }
  
}
