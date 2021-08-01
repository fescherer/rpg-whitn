import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UrlDialogComponent } from './url-dialog/url-dialog.component';
import { filter } from 'rxjs/operators';
import { statInterface } from 'src/app/interfaces/stats';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  imgSource = '';
  urlRequestDialog: MatDialogRef<UrlDialogComponent>;
  stats: statInterface[] = [
    {state: true, color: 'yellow', title: 'Stunned'},
    {state: true, color: 'orange', title: 'Damaged'},
    {state: true, color: 'red', title: 'H. Damaged'},
    {state: true, color: 'yellow', title: 'Weakened'},
    {state: true, color: 'orange', title: 'Não sei'},
    {state: true, color: 'red', title: 'Broken'},
    {state: true, color: 'green', title: 'Weakened'},
    {state: true, color: 'blue', title: 'string'},
    {state: true, color: 'purple', title: 'Broken'},
  ];

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
