import { Component, Input, OnInit } from '@angular/core';
import { pageInterface } from 'src/app/interfaces/pageInterface';
import { FirestoreServiceService } from 'src/app/services/firestore-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() roomId: string;
  @Input() data: pageInterface;
  
  constructor(
    private fireStoreService: FirestoreServiceService,
    ) { }

  ngOnInit(): void {
  }

  updateData() {
    this.fireStoreService.updateCharacterSheet(this.data);
  }

  refreshPage() {
    window.location.reload();
  }
  
}
