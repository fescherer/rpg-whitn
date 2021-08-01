import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { characterSheetDataInterface } from '../interfaces/characterSheetDataInterface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreServiceService {

  constructor(private angularFire: AngularFirestore) { }

  createCharacterSheet(data: characterSheetDataInterface) {
    return new Promise<characterSheetDataInterface>((resolve, reject) => {
      this.angularFire.collection("page").add(data).then((res) => {}, (err) => {reject(err)})
    })
  }

  updateCharacterSheet(characterSheet: any) {
    this.angularFire.collection("page").doc()
  }

  deleteCharacterSheet() {

  }

  getCharacterSheetList() {
    this.angularFire.collection("page").snapshotChanges();
  }
}
