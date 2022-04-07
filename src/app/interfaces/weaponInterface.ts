export interface weaponInterface {
  type?: 'melee' | 'ranged';
  class?: 'A' | 'B' | 'C' | 'D';
  title?: string;
  weaponType?: string;
  description?: string;
  range?: 'Muito curta' | 'Curta' | 'Média' | 'Longa' | 'Muito longa';
  rateOfFire?: Array<boolean>;
  imageUrl?: string;
  examples?: string[];
  fireRate?: number;
  aim?: string;

  name?: string;
  aimed?: string;
  special?: string;
  damage?: string;
}
