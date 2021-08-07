import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { hex4Interface } from 'src/app/interfaces/hexInterface';
import { HexDialogComponent } from '../hex-dialog/hex-dialog.component';

@Component({
  selector: 'app-hex4',
  templateUrl: './hex4.component.html',
  styleUrls: ['./hex4.component.scss']
})
export class Hex4Component implements OnInit {
  @Input() data: hex4Interface;
  thirdValue: number;

  constructor(private dialog: MatDialog) { }
  hexDialogRef: MatDialogRef<HexDialogComponent>;

  ngOnInit(): void {
    this.calcThirdValue();
  }

  openDialog(): void {
    this.hexDialogRef = this.dialog.open(HexDialogComponent, {data: {title: this.data.title, label: 'valor'}});
    this.hexDialogRef.afterClosed()
      .pipe(filter(newValue => newValue))
      .subscribe(newValue => {
        this.data.modifier = parseInt(newValue);
        this.data.result = this.data.leftNumber + this.data.modifier;
        this.calcThirdValue();
      });
    }
    
    calcThirdValue(): void {
    this.thirdValue = Math.round(this.data.result/3);
  }
}
