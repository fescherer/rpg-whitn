import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { hex1Interface } from 'src/app/interfaces/hexInterface';
import { HexDialogComponent } from '../hex-dialog/hex-dialog.component';

@Component({
  selector: 'app-hex1',
  templateUrl: './hex1.component.html',
  styleUrls: ['./hex1.component.scss'],
})
export class Hex1Component implements OnInit {
  @Input() data: hex1Interface;

  constructor(private dialog: MatDialog) {}
  hexDialogRef: MatDialogRef<HexDialogComponent>;

  ngOnInit(): void {}

  openDialog(): void {
    this.hexDialogRef = this.dialog.open(HexDialogComponent, { data: { title: this.data.title, label: 'valor' } });
    this.hexDialogRef
      .afterClosed()
      .pipe(filter((newValue) => newValue))
      .subscribe((newValue) => {
        this.data.value = parseInt(newValue);
      });
  }

  addValue(): void {
    this.data.value = this.data.value + 1;
  }

  decreaseValue(): void {
    this.data.value = this.data.value - 1;
  }
}
