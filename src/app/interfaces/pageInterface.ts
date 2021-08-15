import { characterSheetDataInterface } from "./characterSheetDataInterface";

export interface pageInterface {
  firebaseId: string,
  id: string,
  data: characterSheetDataInterface,
}
