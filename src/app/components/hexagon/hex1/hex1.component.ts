import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { HexDialogComponent } from '../hex-dialog/hex-dialog.component';

@Component({
  selector: 'app-hex1',
  templateUrl: './hex1.component.html',
  styleUrls: ['./hex1.component.scss']
})
export class Hex1Component implements OnInit {
  @Input() title: string;
  @Input() value: number;

  constructor(private dialog: MatDialog) { }
  hexDialogRef: MatDialogRef<HexDialogComponent>;

  ngOnInit(): void {
  }

  openDialog(): void {
    this.hexDialogRef = this.dialog.open(HexDialogComponent, {data: {title: this.title, label: 'valor'}});
    this.hexDialogRef.afterClosed()
      .pipe(filter(newValue => newValue))
      .subscribe(newValue => {
        this.value = parseInt(newValue);
      });
  }

  addValue(): void {
    this.value=this.value+1;
  }

  decreaseValue(): void {
    this.value=this.value-1;
  }

}
