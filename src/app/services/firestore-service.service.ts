import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { pageInterface } from '../interfaces/pageInterface';
import { rejects } from 'assert';
import { SnackBarService } from './snack-bar.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirestoreServiceService {
  constructor(private angularFire: AngularFirestore, private snackBar: SnackBarService) {}

  createCharacterSheet(data: pageInterface) {
    return new Promise<pageInterface>((resolve, reject) => {
      this.angularFire
        .collection('page')
        .doc(data.id)
        .set(data)
        .then(
          (res) => {
            this.snackBar.showSuccessSnackBar('Ficha criada');
          },
          (err) => {
            rejects(err);
            this.snackBar.showErrorSnackBar('Erro na criação da ficha');
          }
        );
    });
  }

  updateCharacterSheet(page: pageInterface) {
    this.angularFire
      .collection('page')
      .doc(`${page.id}`)
      .update(page)
      .then(
        (res) => {
          this.snackBar.showSuccessSnackBar('A ficha foi atualizada');
        },
        (err) => {
          rejects(err);
          this.snackBar.showErrorSnackBar('A ficha não foi atualizada');
        }
      );
  }

  deleteCharacterSheet(data: pageInterface) {
    this.angularFire.doc(`page/${data.id}`).delete();
    this.snackBar.showSuccessSnackBar('Tchau ficha');
  }

  getCharacterSheetList(page?: pageInterface) {
    return this.angularFire.collection('page').doc(`${page.id}`).valueChanges();
  }
}
