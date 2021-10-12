import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-combat-rules',
  templateUrl: './dialog-combat-rules.component.html',
  styleUrls: ['./dialog-combat-rules.component.scss'],
})
export class DialogCombatRulesComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogCombatRulesComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close();
  }
}
