import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { characterSheetDataInterface, currentylEffectsInterface } from 'src/app/interfaces/characterSheetDataInterface';
import { effectInterface } from 'src/app/interfaces/effect';
import { UrlDialogComponent } from './url-dialog/url-dialog.component';

@Component({
  selector: 'app-currently-effects',
  templateUrl: './currently-effects.component.html',
  styleUrls: ['./currently-effects.component.scss']
})
export class CurrentlyEffectsComponent implements OnInit {
  @Input() data: currentylEffectsInterface;
  imgSource: string;

  urlRequestDialog: MatDialogRef<UrlDialogComponent>;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.imgSource = this.data.photo;
  }
 
  searchImage() {
    this.urlRequestDialog = this.dialog.open(UrlDialogComponent);
    this.urlRequestDialog.afterClosed()
      .pipe(filter(url => url))
      .subscribe(url => this.imgSource = url);
  }

}
