import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { characterSheetDataInterface } from 'src/app/interfaces/characterSheetDataInterface';
import { fireStoreDataInterface } from 'src/app/interfaces/fireStoraDataInterface';
import { hex3Interface } from 'src/app/interfaces/hexInterface';
import { FirestoreServiceService } from 'src/app/services/firestore-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  submitForm : FormGroup;
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
    {title: "Vida", leftNumber: 0, rightNumber: 0, result: 0,},
    {title: "Estabilidade", leftNumber: 0, rightNumber: 0, result: 0,},
    {title: "Armadura", leftNumber: 0, rightNumber: 0, result: 0,},
    {title: "Dano", leftNumber: 0, rightNumber: 0, result: 0,},
  ];

  defaultData: characterSheetDataInterface = {
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
      {title: "Força", value: 0, description: ""},
      {title: "Destreza", value: 0, description: ""},
      {title: "Constituição", value: 0, description: ""},
      {title: "Porte", value: 0, description: ""},
      {title: "Inteligência", value: 0, description: ""},
      {title: "Sabedoria", value: 0, description: ""},
      {title: "Carisma", value: 0, description: ""},
      {title: "Poder", value: 0, description: ""},
    ],  
    specialAttributes: [
      {title: "Movimento", leftNumber: 0, rightNumber: 0, result: 0,},
      {title: "Resistência", leftNumber: 0, rightNumber: 0, result: 0,},
    ],
    specificAttributes: [
      {title: "Atletismo",leftNumber: 0,modifier: 0,thirdValue: 0,result: 0,},
      {title: "Percepção",leftNumber: 0,modifier: 0,thirdValue: 0,result: 0,},
      {title: "Intimidação",leftNumber: 0,modifier: 0,thirdValue: 0,result: 0,},
      {title: "Criaturas ",leftNumber: 0,modifier: 0,thirdValue: 0,result: 0,},
      {title: "Medicina ",leftNumber: 0,modifier: 0,thirdValue: 0,result: 0,},
      {title: "Sobrevivência ",leftNumber: 0,modifier: 0,thirdValue: 0,result: 0,},
      {title: "Furtividade",leftNumber: 0,modifier: 0,thirdValue: 0,result: 0,},
      {title: "Terapia ",leftNumber: 0,modifier: 0,thirdValue: 0,result: 0,},
      {title: "Eletromecânica ",leftNumber: 0,modifier: 0,thirdValue: 0,result: 0,},
      {title: "Sorte ",leftNumber: 0,modifier: 0,thirdValue: 0,result: 0,}      
    ]
  }

  dataCreation: fireStoreDataInterface = {
    id: "",
    data: this.defaultData
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private firestoreService: FirestoreServiceService,
  ) { }
  

  ngOnInit(): void {
    this.submitForm = this.formBuilder.group({
      code: ['', [Validators.required]]
    })

  }

  submit(): void {
    if(this.submitForm.valid) {
      this.dataCreation.id = this.submitForm.value.code;
      this.firestoreService.createCharacterSheet(this.dataCreation);
      this.router.navigate(['/page', this.submitForm.value.code]);
    }
  }

}
