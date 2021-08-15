import { hex1Interface, hex2Interface, hex3Interface, hex4Interface } from "./hexInterface";
import { effectInterface } from "./effect";
import { effectTypeInterface } from "./stabilityInterface";
import { weaponInterface } from "./weaponInterface";

export interface characterSheetDataInterface {
  apresentation: {
    name: string,
    motivation: string,
    age: string,
    gender: string,
  },
  gameplayCharacteristics: {
    currentlyEffects: {
      photo: string,
      effects: Array<effectInterface>,
      stats: Array<hex1Interface>;
    },
    stats: Array<hex3Interface>;
  },
  attributes: Array<hex2Interface>,
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
