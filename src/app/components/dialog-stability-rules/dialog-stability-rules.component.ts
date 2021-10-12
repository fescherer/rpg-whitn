import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-stability-rules',
  templateUrl: './dialog-stability-rules.component.html',
  styleUrls: ['./dialog-stability-rules.component.scss'],
})
export class DialogStabilityRulesComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogStabilityRulesComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close();
  }

  openStabilityList() {
    window.open('https://docs.google.com/document/d/1siyabNnrdPk2EFSQJPZnffL-xQo_urXPflNnXme4qOw', '_blank');
  }
}
