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
    {state: false, color: 'orange', title: 'Damaged'},
    {state: true, color: 'red', title: 'H. Damaged'},
    {state: true, color: 'yellow', title: 'Weakened'},
    {state: true, color: 'orange', title: 'Não sei'},
    {state: false, color: 'red', title: 'Broken'},
    {state: true, color: 'green', title: 'Weakened'},
    {state: true, color: 'blue', title: 'string'},
    {state: true, color: 'purple', title: 'Broken'},
  ];

  stats: hex3Interface[] = [
    {title: "Vida", leftNumber: 0, rightNumber: 0, result: 0,},
    {title: "Estabilidade", leftNumber: 0, rightNumber: 0, result: 0,},
    {title: "Armadura", leftNumber: 0, rightNumber: 0, result: 0,},
    {title: "Dano", leftNumber: 0, rightNumber: 0, result: 0,},
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
    attributes: [
      {title: "Força", value: 0, thirdValue: 0},
      {title: "Destreza", value: 0, thirdValue: 0},
      {title: "Constituição", value: 0, thirdValue: 0},
      {title: "Porte", value: 0, thirdValue: 0},
      {title: "Inteligência", value: 0, thirdValue: 0},
      {title: "Sabedoria", value: 0, thirdValue: 0},
      {title: "Carisma", value: 0, thirdValue: 0},
      {title: "Poder", value: 0, thirdValue: 0},
    ],  
    specialAttributes: [
      {title: "Movimento", leftNumber: 0, rightNumber: 0, result: 0,},
      {title: "Resistência", leftNumber: 0, rightNumber: 0, result: 0,},
    ],
    specificAttributes: [
      {title: "Atletismo",leftNumber: 0,modifier: 0,thirdValue: 0,result: 0,},
      {title: "Percepção",leftNumber: 0,modifier: 0,thirdValue: 0,result: 0,},
      {title: "Intimidação",leftNumber: 0,modifier: 0,thirdValue: 0,result: 0,},
      {title: "Criaturas",leftNumber: 0,modifier: 0,thirdValue: 0,result: 0,},
      {title: "Medicina",leftNumber: 0,modifier: 0,thirdValue: 0,result: 0,},
      {title: "Sobrevivência",leftNumber: 0,modifier: 0,thirdValue: 0,result: 0,},
      {title: "Furtividade",leftNumber: 0,modifier: 0,thirdValue: 0,result: 0,},
      {title: "Terapia",leftNumber: 0,modifier: 0,thirdValue: 0,result: 0,},
      {title: "Eletromecânica",leftNumber: 0,modifier: 0,thirdValue: 0,result: 0,},
      {title: "Sorte",leftNumber: 0,modifier: 0,thirdValue: 0,result: 0,}      
    ]
  }



  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.id = params.id );
  }

  ngOnInit(): void {
  }

}
