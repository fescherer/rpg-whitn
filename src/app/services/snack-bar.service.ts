import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  
  constructor(
    private snackBar: MatSnackBar
  ) { }

  showErrorSnackBar(message): void {
    this.snackBar.open(message, 'ok', { 
      duration: 7000,
      horizontalPosition: 'center',
      panelClass: ['snackbar-error']
    });
  }

  showSuccessSnackBar(message): void {
    this.snackBar.open(message, 'ok', { 
      duration: 7000,
      horizontalPosition: 'center',
      panelClass: ['snackbar-success']
    });
  }
  
}
