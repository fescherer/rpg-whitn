import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { characterSheetDataInterface } from 'src/app/interfaces/characterSheetDataInterface';
import { effectInterface } from 'src/app/interfaces/effect';
import { hex3Interface } from 'src/app/interfaces/hexInterface';
import { FirestoreServiceService } from 'src/app/services/firestore-service.service';

@Component({
  selector: 'app-caracter-sheet',
  templateUrl: './caracter-sheet.component.html',
  styleUrls: ['./caracter-sheet.component.scss']
})
export class CaracterSheetComponent implements OnInit {

  id: string;

  effects = [
    {state: true, color: 'yellow', title: 'Stunned'},
    {state: true, color: 'orange', title: 'Damaged'},
    {state: true, color: 'red', title: 'H. Damaged'},
    {state: true, color: 'yellow', title: 'Weakened'},
    {state: true, color: 'orange', title: 'Não sei'},
    {state: true, color: 'red', title: 'Broken'},
    {state: true, color: 'green', title: 'Weakened'},
    {state: true, color: 'blue', title: 'string'},
    {state: true, color: 'purple', title: 'Broken'},
  ];

  stats: hex3Interface[] = [
    {title: "Vida", defaultValue: 0, modifier: 0, result: 0,},
    {title: "Estabilidade", defaultValue: 0, modifier: 0, result: 0,},
    {title: "Armadura", defaultValue: 0, modifier: 0, result: 0,},
    {title: "Dano", defaultValue: 0, modifier: 0, result: 0,},
  ];

  data: characterSheetDataInterface = {
    apresentation: {
      name: "",
      motivation: "",
      age: "",
      gender: "",
    },
    gameplayCharacteristics: {
      currentlyEffects: {
        photo: "",
        effects: this.effects,
        stats: [{title: "Vida atual", value: 0}, {title: "Estabilidade atual", value: 0}],
      },
      stats: this.stats,
    },
  }



  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.id = params.id );
  }

  ngOnInit(): void {
  }

}
