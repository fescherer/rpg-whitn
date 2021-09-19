import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { HexDialogComponent } from '../hexagon/hex-dialog/hex-dialog.component';
import { ListEffectsDialogComponent } from '../list-effects-dialog/list-effects-dialog.component';
import { ListSourcesDialogComponent } from '../list-sources-dialog/list-sources-dialog.component';

@Component({
  selector: 'app-stability',
  templateUrl: './stability.component.html',
  styleUrls: ['./stability.component.scss'],
})
export class StabilityComponent implements OnInit {
  @Input() data;
  constructor(private dialog: MatDialog) {}
  stabilitySourceDialogRef: MatDialogRef<ListSourcesDialogComponent>;
  stabilityEffectDialogRef: MatDialogRef<ListEffectsDialogComponent>;

  ngOnInit(): void {}

  addStabilitySource(): void {
    this.stabilitySourceDialogRef = this.dialog.open(ListSourcesDialogComponent);
    this.stabilitySourceDialogRef
      .afterClosed()
      .pipe(filter((newValue) => newValue))
      .subscribe((newValue) => {
        this.data.stabilitySources.push(newValue);
      });
  }

  addStabilityEffect(): void {
    this.stabilityEffectDialogRef = this.dialog.open(ListEffectsDialogComponent);
    this.stabilityEffectDialogRef
      .afterClosed()
      .pipe(filter((newValue) => newValue))
      .subscribe((newValue) => {
        this.data.stabilityEffects.push(`${newValue.title} de ${newValue.relatedTo} ${newValue.duration}`);
      });
  }

  removeSource(source: string): void {
    const index = this.data.stabilitySources.indexOf(source);
    if (index > -1) {
      this.data.stabilitySources.splice(index, 1);
    }
  }

  removeEffect(source: string): void {
    const index = this.data.stabilityEffects.indexOf(source);
    if (index > -1) {
      this.data.stabilityEffects.splice(index, 1);
    }
  }
}
