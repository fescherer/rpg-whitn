import { hex1Interface, hex2Interface, hex3Interface, hex4Interface } from "./hexInterface";
import { effectInterface } from "./effect";

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
  specificAttributes: Array<hex4Interface>
}
