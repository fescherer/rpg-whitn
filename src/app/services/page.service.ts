import { Injectable } from '@angular/core';
import { characterSheetDataInterface } from '../interfaces/characterSheetDataInterface';
import { hex3Interface } from '../interfaces/hexInterface';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  id: string;
  
  effects = [
    {state: false, color: 'yellow', title: 'Stunned'},
    {state: false, color: 'orange', title: 'Damaged'},
    {state: false, color: 'red', title: 'H. Damaged'},
    {state: false, color: 'yellow', title: 'Weakened'},
    {state: false, color: 'orange', title: 'Não sei'},
    {state: false, color: 'red', title: 'Broken'},
    {state: false, color: 'green', title: 'Weakened'},
    {state: false, color: 'blue', title: 'string'},
    {state: false, color: 'purple', title: 'Broken'},
  ];

  stats: hex3Interface[] = [
    {type: 'life', title: "Vida", description: "", rightNumber: 0, result: 0,},
    {type: 'stability', title: "Estabilidade", description: "", rightNumber: 0, result: 0,},
    {type: 'armor', title: "Armadura", description: "", rightNumber: 0, result: 0,},
    {type: 'damage', title: "Dano", description: "", rightNumber: 0, result: 0,},
  ];

  data: characterSheetDataInterface = {
    apresentation: {
      name: "",
      motivation: "",
      age: "",
      height: "",
      weight: "",
    },
    gameplayCharacteristics: {
      currentlyEffects: {
        photo: "",
        effects: this.effects,
        stats: [{title: "Vida atual", description: "", value: 0}, {title: "Estabilidade atual", description: "", value: 0}],
      },
      stats: this.stats,
    },
    attributes: {
      FOR: {title: "Força", value: 0, description: "Sua capacidade de carregar peso e socar alguém"},
      DES: {title: "Destreza", value: 0, description: ""},
      CON: {title: "Constituição", value: 0, description: ""},
      POR: {title: "Porte", value: 0, description: ""},
      INT: {title: "Inteligência", value: 0, description: ""},
      SAB: {title: "Sabedoria", value: 0, description: ""},
      CAR: {title: "Carisma", value: 0, description: ""},
      POD: {title: "Poder", value: 0, description: ""},
    },  
    specialAttributes: [
      {type: 'movement', title: "Movimento", description: "",  rightNumber: 0, result: 0,},
      {type: 'iniciative',title: "Iniciativa", description: "", rightNumber: 0, result: 0,},
    ],
    secondaryAttributes: [
      {title: "Atletismo", description: "",leftNumber: 0,modifier: 0,result: 0,},
      {title: "Percepção", description: "",leftNumber: 0,modifier: 0,result: 0,},
      {title: "Intimidação", description: "",leftNumber: 0,modifier: 0,result: 0,},
      {title: "Criaturas", description: "",leftNumber: 0,modifier: 0,result: 0,},
      {title: "Medicina", description: "",leftNumber: 0,modifier: 0,result: 0,},
      {title: "Sobrevivência", description: "",leftNumber: 0,modifier: 0,result: 0,},
      {title: "Furtividade", description: "",leftNumber: 0,modifier: 0,result: 0,},
      {title: "Terapia", description: "",leftNumber: 0,modifier: 0,result: 0,},
      {title: "Eletromecânica", description: "",leftNumber: 0,modifier: 0,result: 0,},
      {title: "Sorte", description: "",leftNumber: 0,modifier: 0,result: 0,}      
    ],
    stability: {
      stabilitySources: [],
      developedEffect: []
    },
    weapons: [],
    inventory: '',
    textAreas: {
      annotations: '',
      history: ''
    }
  }

  defaultData = {
    data: this.data,
    id: ""
  }
  
  constructor() { }

  getDefaultData() {
    return this.defaultData;
  }

  setDefaultData(newData: any): void {
    this.defaultData = newData;
  }
}
