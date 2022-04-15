export interface weaponInterface {
  type?: 'fast-melee' | 'slow-melee' | 'pistol' | 'rifle' | 'machine-gun';
  class?: 'A' | 'B' | 'C' | 'D';
  title?: string;
  weaponType?: string;
  description?: string;
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
