export interface weaponInterface {
  type: 'melee' | 'ranged',
  class: 'A' | 'B' | 'C' | 'D',
  title: string,
  weaponType: string,
  description: string,
  damage: string,
  range: string,
  rateOfFire?: Array<boolean>,
  imageUrl?: string,
}