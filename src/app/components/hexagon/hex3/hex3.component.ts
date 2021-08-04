import { Component, Input, OnInit } from '@angular/core';
import { HexDialogComponent } from '../hex-dialog/hex-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { hex3Interface } from 'src/app/interfaces/hexInterface';

@Component({
  selector: 'app-hex3',
  templateUrl: './hex3.component.html',
  styleUrls: ['./hex3.component.scss']
})
export class Hex3Component implements OnInit {
  @Input() data: hex3Interface;

  constructor(private dialog: MatDialog) { }
  hexDialogRef: MatDialogRef<HexDialogComponent>;
  
  ngOnInit(): void {
    this.calcResult();

  }
  
  openDialog(): void {
    this.hexDialogRef = this.dialog.open(HexDialogComponent, {data: {title: this.data.title, label: 'modificador'}});
    this.hexDialogRef.afterClosed()
      .pipe(filter(modifier => modifier))
      .subscribe(modifier => {
        this.data.rightNumber = parseInt(modifier);
        this.calcResult();
      });
  }

  calcResult(): void {
    this.data.result = this.data.leftNumber + this.data.rightNumber;
  }

}
