import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { attributesInterface } from 'src/app/interfaces/characterSheetDataInterface';
import { hex4Interface } from 'src/app/interfaces/hexInterface';
import { HexDialogComponent } from '../hex-dialog/hex-dialog.component';

@Component({
  selector: 'app-hex4',
  templateUrl: './hex4.component.html',
  styleUrls: ['./hex4.component.scss'],
})
export class Hex4Component implements OnInit {
  @Input() data: hex4Interface;
  @Input() attributes: attributesInterface;
  leftNumber: number = 0;
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
        this.data.modifier = parseInt(newValue);
        this.calcResult();
      });
  }

  calcThirdValue(): void {
    this.thirdValue = Math.round(this.data.result / 3);
  }

  calcResult() {
    this.data.result = this.leftNumber + this.data.modifier;
    this.calcThirdValue();
  }

  calcType(type: string): number {
    let aux: any;
    const attr = this.attributes;
    switch (type) {
      case 'athletics':
        aux = Math.round((attr.DES.value + attr.FOR.value + attr.POR.value) / 3);
        this.leftNumber = aux;
        this.calcResult();
        return aux;
      case 'perception':
        aux = Math.round((attr.SAB.value + attr.POD.value) / 2);
        this.leftNumber = aux;
        this.calcResult();
        return aux;
      case 'intimidation':
        aux = Math.round((attr.CAR.value + attr.POD.value) / 2);
        this.leftNumber = aux;
        this.calcResult();
        return aux;
      case 'bravery':
        aux = Math.round((attr.SAB.value + attr.DES.value + attr.FOR.value) / 3);
        this.leftNumber = aux;
        this.calcResult();
        return aux;
      case 'medicine':
        aux = Math.round((attr.SAB.value + attr.INT.value + attr.POD.value) / 3);
        this.leftNumber = aux;
        this.calcResult();
        return aux;
      case 'survivalist':
        aux = Math.round((attr.INT.value + attr.SAB.value) / 2);
        this.leftNumber = aux;
        this.calcResult();
        return aux;
      case 'furtivity':
        aux = Math.round((attr.DES.value + attr.SAB.value) / 2);
        this.leftNumber = aux;
        this.calcResult();
        return aux;
      case 'therapy':
        aux = Math.round((attr.SAB.value + attr.INT.value + attr.CAR.value) / 3);
        this.leftNumber = aux;
        this.calcResult();
        return aux;
      case 'eletromechanics':
        aux = Math.round((attr.INT.value + attr.DES.value) / 2);
        this.leftNumber = aux;
        this.calcResult();
        return aux;
      case 'luck':
        aux = Math.round((attr.CAR.value + attr.POD.value) / 2);
        this.leftNumber = aux;
        this.calcResult();
        return aux;
      default:
        return 0;
    }
  }
}
