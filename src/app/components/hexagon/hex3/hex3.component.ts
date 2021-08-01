import { Component, Input, OnInit } from '@angular/core';
import { HexDialogComponent } from '../hex-dialog/hex-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { hexInterface } from 'src/app/interfaces/hexInterface';

@Component({
  selector: 'app-hex3',
  templateUrl: './hex3.component.html',
  styleUrls: ['./hex3.component.scss']
})
export class Hex3Component implements OnInit {
  @Input() defaultValue: number;
  @Input() title: string;

  data: hexInterface = {
    title: '',
    defaultValue: 0,
    modifier: 0,
    result: 0,
  }

  constructor(private dialog: MatDialog) { }
  hexDialogRef: MatDialogRef<HexDialogComponent>;
  
  ngOnInit(): void {
    this.data.defaultValue = this.defaultValue;
    this.data.title = this.title;
    this.calcResult();
  }
  
  openDialog(): void {
    this.hexDialogRef = this.dialog.open(HexDialogComponent, {data: {title: this.title, label: 'modificador'}});
    this.hexDialogRef.afterClosed()
      .pipe(filter(modifier => modifier))
      .subscribe(modifier => {
        this.data.modifier = parseInt(modifier);
        this.calcResult();
      });
  }

  calcResult(): void {
    this.data.result = this.data.defaultValue + this.data.modifier;
  }

}
