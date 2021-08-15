import { Injectable } from '@angular/core';
import { characterSheetDataInterface } from '../interfaces/characterSheetDataInterface';
import { hex3Interface } from '../interfaces/hexInterface';

@Injectable({
  providedIn: 'root'
})
export class PageService {
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
    {title: "Vida", description: "", leftNumber: 0, rightNumber: 0, result: 0,},
    {title: "Estabilidade", description: "", leftNumber: 0, rightNumber: 0, result: 0,},
    {title: "Armadura", description: "", leftNumber: 0, rightNumber: 0, result: 0,},
    {title: "Dano", description: "", leftNumber: 0, rightNumber: 0, result: 0,},
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
        stats: [{title: "Vida atual", description: "", value: 0}, {title: "Estabilidade atual", description: "", value: 0}],
      },
      stats: this.stats,
    },
    attributes: [
      {title: "Força", value: 120, description: "Sua capacidade de carregar peso e socar alguém"},
      {title: "Destreza", value: 0, description: ""},
      {title: "Constituição", value: 20, description: ""},
      {title: "Porte", value: 0, description: ""},
      {title: "Inteligência", value: 0, description: ""},
      {title: "Sabedoria", value: 0, description: ""},
      {title: "Carisma", value: 0, description: ""},
      {title: "Poder", value: 0, description: ""},
    ],  
    specialAttributes: [
      {title: "Movimento", description: "", leftNumber: 0, rightNumber: 0, result: 0,},
      {title: "Iniciativa", description: "", leftNumber: 0, rightNumber: 0, result: 0,},
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
    ]
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
