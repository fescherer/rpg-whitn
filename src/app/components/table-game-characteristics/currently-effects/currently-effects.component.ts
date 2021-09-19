import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { characterSheetDataInterface, currentylEffectsInterface } from 'src/app/interfaces/characterSheetDataInterface';
import { effectInterface } from 'src/app/interfaces/effect';
import { UrlDialogComponent } from './url-dialog/url-dialog.component';

@Component({
  selector: 'app-currently-effects',
  templateUrl: './currently-effects.component.html',
  styleUrls: ['./currently-effects.component.scss'],
})
export class CurrentlyEffectsComponent implements OnInit {
  @Input() data: currentylEffectsInterface;
  example = [
    { state: false, color: 'yellow', title: 'Stunned', tooltip: 'Você fica 1 rodada sem jogar' },
    { state: false, color: 'orange', title: 'Bleeding', tooltip: 'Você perde 1 de vida a cada rodada' },
    { state: false, color: 'orange', title: 'Damaged', tooltip: 'Seu movimento é reduzido pela metade' },
    { state: false, color: 'red', title: 'Weakened', tooltip: 'Seus atributos são diminuidos pela metade' },
    {
      state: false,
      color: 'red',
      title: 'Unconscious',
      tooltip: 'Você não tem ações disponíveis. Você precisa jogar um teste de constituição a cada rodada para acordar',
    },
    {
      state: false,
      color: 'red',
      title: 'Broken',
      tooltip:
        'Você está quase morrendo(Fisico ou mental). Você precisa fazer teste de poder a cada rodada para não morrer',
    },
    { state: false, color: 'blue', title: 'string', tooltip: '' },
    { state: false, color: 'purple', title: 'Broken', tooltip: '' },
    { state: false, color: 'green', title: 'Weakened', tooltip: '' },
    { state: false, color: 'blue', title: 'string', tooltip: '' },
    { state: false, color: 'purple', title: 'Broken', tooltip: '' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
