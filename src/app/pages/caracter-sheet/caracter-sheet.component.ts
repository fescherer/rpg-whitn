import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { pageInterface } from 'src/app/interfaces/pageInterface';
import { FirestoreServiceService } from 'src/app/services/firestore-service.service';
import { PageService } from 'src/app/services/page.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-caracter-sheet',
  templateUrl: './caracter-sheet.component.html',
  styleUrls: ['./caracter-sheet.component.scss']
})
export class CaracterSheetComponent implements OnInit {
  data: any;
  listSheets: any;
  hasPage: boolean = false;
  savedData: pageInterface;

  constructor(
    private route: ActivatedRoute,
    private pageService: PageService,
    private firestoreService: FirestoreServiceService,
    private snackbarService: SnackBarService,
    ) {
    this.data = pageService.getDefaultData();
    this.route.params.subscribe( params => this.data.id = params.id);

  }

  getSheetList() {
    return this.firestoreService.getCharacterSheetList()
    .subscribe(res => {
      res.forEach(element => {
        if(element.id==this.data.id){
          this.hasPage = true;
          this.savedData = element;
        }
      });
      if(!this.hasPage) {
        this.firestoreService.createCharacterSheet(this.data);
      } else {
        this.data = this.savedData;
      }
    });
  }

  ngOnInit(): void {
    this.getSheetList();
  }

}
