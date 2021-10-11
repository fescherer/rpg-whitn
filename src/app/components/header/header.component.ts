import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { pageInterface } from 'src/app/interfaces/pageInterface';
import { FirestoreServiceService } from 'src/app/services/firestore-service.service';
import { DialogWeaponsListComponent } from '../dialog-weapons-list/dialog-weapons-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() roomId: string;
  @Input() data: pageInterface;

  constructor(private fireStoreService: FirestoreServiceService, private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}

  updateData() {
    this.fireStoreService.updateCharacterSheet(this.data);
  }

  refreshPage() {
    window.location.reload();
  }

  deleteSheet() {
    if (confirm('Vai mesmo deletar a ficha?')) {
      this.fireStoreService.deleteCharacterSheet(this.data);
      this.router.navigate(['/']);
    }
  }

  openweaponsList() {
    this.dialog.open(DialogWeaponsListComponent);
  }
}
