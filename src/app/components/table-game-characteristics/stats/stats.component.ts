import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UrlDialogComponent } from './url-dialog/url-dialog.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  imgSource = '';
  urlRequestDialog: MatDialogRef<UrlDialogComponent>;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  searchImage() {
    this.urlRequestDialog = this.dialog.open(UrlDialogComponent);
    this.urlRequestDialog.afterClosed()
      .pipe(filter(url => url))
      .subscribe(url => this.imgSource = url);
  }

}
