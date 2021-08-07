import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { HexDialogComponent } from '../hexagon/hex-dialog/hex-dialog.component';
import { ListEffectsDialogComponent } from '../list-effects-dialog/list-effects-dialog.component';
import { ListSourcesDialogComponent } from '../list-sources-dialog/list-sources-dialog.component';

@Component({
  selector: 'app-stability',
  templateUrl: './stability.component.html',
  styleUrls: ['./stability.component.scss']
})
export class StabilityComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  stabilitySourceDialogRef: MatDialogRef<ListSourcesDialogComponent>;
  stabilityEffectDialogRef: MatDialogRef<ListEffectsDialogComponent>;
  stabilitySources: Array<string> = []
  stabilityEffects: Array<string> = []

  ngOnInit(): void {
  }

  addStabilitySource(): void {
    this.stabilitySourceDialogRef = this.dialog.open(ListSourcesDialogComponent);
    this.stabilitySourceDialogRef.afterClosed()
      .pipe(filter(newValue => newValue))
      .subscribe(newValue => {
        this.stabilitySources.push(newValue);
      });
  }

  addStabilityEffect(): void {
    this.stabilityEffectDialogRef = this.dialog.open(ListEffectsDialogComponent);
    this.stabilityEffectDialogRef.afterClosed()
      .pipe(filter(newValue => newValue))
      .subscribe(newValue => {
        this.stabilityEffects.push(`${newValue.title} de ${newValue.relatedTo} ${newValue.duration}`);
      });
  }

  removeSource(source: string): void {
    const index = this.stabilitySources.indexOf(source);
    if (index > -1) {
      this.stabilitySources.splice(index, 1);
    }
  }

  removeEffect(source: string): void {
    const index = this.stabilityEffects.indexOf(source);
    if (index > -1) {
      this.stabilityEffects.splice(index, 1);
    }
  }

}
