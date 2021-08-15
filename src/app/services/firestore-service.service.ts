import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { characterSheetDataInterface } from '../interfaces/characterSheetDataInterface';
import { fireStoreDataInterface } from '../interfaces/fireStoraDataInterface';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { pageInterface } from '../interfaces/pageInterface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreServiceService {

  constructor(private angularFire: AngularFirestore) { }

  createCharacterSheet(data: fireStoreDataInterface) {
    return new Promise<fireStoreDataInterface>((resolve, reject) => {
      this.angularFire.collection("page").add(data).then((res) => {}, (err) => {reject(err)})
    })
  }

  updateCharacterSheet(characterSheet: any) {
    this.angularFire.collection("page").doc()
  }

  deleteCharacterSheet() {

  }

  getCharacterSheetList() {
    return this.angularFire.collection("page").snapshotChanges().pipe(map(
      changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as pageInterface;
          data.firebaseId = a.payload.doc.id;
          return data;
        })
      }
    ));
  }
}
