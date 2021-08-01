import { hexInterface } from "./hexInterface";

export interface characterSheetDataInterface {
  apresentation: {
    name: string,
    motivation: string,
    age: string,
    gender: string,
  },
  gameplayCharacteristics: {
    stats: {
      photo: string,
      stats: Array<hexInterface>,
    },
    currentlyEffects: {
      currentlyStats: Array<number>
      onFire: boolean
    }
  },
}
