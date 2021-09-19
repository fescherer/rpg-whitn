import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { hex2Interface } from 'src/app/interfaces/hexInterface';
import { HexDialogComponent } from '../hex-dialog/hex-dialog.component';

@Component({
  selector: 'app-hex2',
  templateUrl: './hex2.component.html',
  styleUrls: ['./hex2.component.scss'],
})
export class Hex2Component implements OnInit {
  @Input() data: hex2Interface;
  thirdValue: number;

  constructor(private dialog: MatDialog) {}
  hexDialogRef: MatDialogRef<HexDialogComponent>;

  ngOnInit(): void {
    this.calcThirdValue();
  }

  openDialog(): void {
    this.hexDialogRef = this.dialog.open(HexDialogComponent, { data: { title: this.data.title, label: 'valor' } });
    this.hexDialogRef
      .afterClosed()
      .pipe(filter((newValue) => newValue))
      .subscribe((newValue) => {
        this.data.value = parseInt(newValue);
        this.calcThirdValue();
      });
  }

  calcThirdValue(): void {
    this.thirdValue = Math.round(this.data.value / 3);
  }
}
