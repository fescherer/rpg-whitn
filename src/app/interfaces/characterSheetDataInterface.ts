import { hex1Interface, hex2Interface, hex3Interface, hex4Interface } from "./hexInterface";
import { effectInterface } from "./effect";
import { effectTypeInterface } from "./stabilityInterface";
import { weaponInterface } from "./weaponInterface";

export interface characterSheetDataInterface {
  apresentation: apresentationInterface,
  gameplayCharacteristics: gameplayCharacteristicsInterface;
  attributes: attributesInterface,
  specialAttributes: Array<hex3Interface>,
  secondaryAttributes: Array<hex4Interface>,
  stability: {
    stabilitySources: Array<string>,
    developedEffect: Array<effectTypeInterface>
  },
  weapons: Array<weaponInterface>,
  inventory: string,
  textAreas: {
    annotations: string,
    history: string
  }

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
  name: string,
  motivation: string,
  age: string,
  height: string,
  weight: string,
}

export interface gameplayCharacteristicsInterface {
  currentlyEffects: currentylEffectsInterface;
  stats: Array<hex3Interface>;
}

export interface currentylEffectsInterface{
  photo: string,
  effects: Array<effectInterface>,
  stats: Array<hex1Interface>;
}