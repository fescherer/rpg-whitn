import { Component, Input, OnInit } from '@angular/core';
import { HexDialogComponent } from '../hex-dialog/hex-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { hex2Interface, hex3Interface } from 'src/app/interfaces/hexInterface';
import { attributesInterface } from 'src/app/interfaces/characterSheetDataInterface';

@Component({
  selector: 'app-hex3',
  templateUrl: './hex3.component.html',
  styleUrls: ['./hex3.component.scss'],
})
export class Hex3Component implements OnInit {
  @Input() data: hex3Interface;
  @Input() attributes: attributesInterface;
  leftNumber: any = 0;

  constructor(private dialog: MatDialog) {}
  hexDialogRef: MatDialogRef<HexDialogComponent>;

  ngOnInit(): void {
    this.calcResult();
  }

  openDialog(): void {
    this.hexDialogRef = this.dialog.open(HexDialogComponent, {
      data: { title: this.data.title, label: 'modificador' },
    });
    this.hexDialogRef
      .afterClosed()
      .pipe(filter((modifier) => modifier))
      .subscribe((modifier) => {
        this.data.rightNumber = parseInt(modifier);
        this.calcResult();
      });
  }

  calcType(type: string): number {
    let aux: any;
    const attr = this.attributes;
    switch (type) {
      case 'life':
        aux = Math.round((attr.CON.value + attr.POR.value) / 10);
        this.leftNumber = aux;
        this.calcResult();
        return aux;
      case 'stability':
        aux = Math.round((attr.POD.value + attr.CON.value) / 5);
        this.leftNumber = aux;
        this.calcResult();
        return aux;
      case 'armor':
        aux = Math.round((attr.CON.value + attr.POD.value) / 10 / 5);
        this.leftNumber = aux;
        this.calcResult();
        return aux;
      case 'damage':
        aux = Math.round(attr.FOR.value + attr.POR.value);
        if (aux <= 64) {
          aux = -2;
        } else if (aux <= 84) {
          aux = -1;
        } else if (aux <= 124) {
          aux = 0;
        } else if (aux <= 164) {
          aux = 'D4';
        } else if (aux <= 200) {
          aux = 'D6';
        } else {
          aux = 0;
        }
        this.leftNumber = aux;
        this.calcResult();
        return aux;
      case 'movement':
        if (attr.DES.value < attr.POR.value) {
          aux = 4;
        } else {
          aux = 6;
        }
        this.leftNumber = aux;
        this.calcResult();
        return aux;
      case 'iniciative':
        aux = Math.round(attr.DES.value + attr.POD.value);
        if (aux < 124) {
          aux = 0;
        } else if (aux <= 164) {
          aux = 'D2';
        } else if (aux <= 200) {
          aux = 'D4';
        } else {
          aux = 0;
        }
        this.leftNumber = aux;
        this.calcResult();
        return aux;
      default:
        return 0;
    }
  }

  calcResult(): void {
    if (typeof this.leftNumber === 'string') {
      this.data.result = this.data.rightNumber;
    } else {
      this.data.result = this.leftNumber + this.data.rightNumber;
    }
  }
}
