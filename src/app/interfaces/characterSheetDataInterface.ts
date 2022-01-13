import { hex1Interface, hex2Interface, hex3Interface, hex4Interface } from './hexInterface';
import { effectTypeInterface } from './stabilityInterface';
import { weaponInterface } from './weaponInterface';

export interface characterSheetDataInterface {
  apresentation: apresentationInterface;
  gameplayCharacteristics: gameplayCharacteristicsInterface;
  attributes: attributesInterface;
  specialAttributes: Array<hex3Interface>;
  secondaryAttributes: Array<hex4Interface>;
  stability: {
    stabilitySources: Array<string>;
    stabilityEffects: Array<effectTypeInterface>;
  };
  weapons: Array<weaponInterface>;
  inventory: {
    inventory: string;
  };
  textAreas: {
    annotations: string;
    history: string;
  };
  template: {
    faId: number;
    class: number;
  };
}

export interface attributesInterface {
  FOR: hex2Interface;
  DES: hex2Interface;
  CON: hex2Interface;
  POR: hex2Interface;
  INT: hex2Interface;
  SAB: hex2Interface;
  CAR: hex2Interface;
  POD: hex2Interface;
}

export interface apresentationInterface {
  name: string;
  motivation: string;
  age: string;
  photo: string;
}

export interface gameplayCharacteristicsInterface {
  currentlyEffects: currentylEffectsInterface;
  stats: Array<hex3Interface>;
}

export interface currentylEffectsInterface {
  effects: Array<any>;
  stats: Array<hex1Interface>;
}
