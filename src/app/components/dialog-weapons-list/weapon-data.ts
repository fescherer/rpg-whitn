import { weaponInterface } from 'src/app/interfaces/weaponInterface';

export const weaponMeleeWeak: weaponInterface[] = [
  { class: 'D', damage: 'D2', range: 'Muito curta', examples: ['Sem arma', 'dano físico proposital'] },
  {
    class: 'D',
    damage: 'D4 + MD',
    range: 'Muito curta',
    examples: [
      'Facas curtas (canivetes; estiletes; etc)',
      'Ferramentas (Chave inglesa)',
      'chave phillips',
      'chave de rosca',
      'chave de fenda',
    ],
  },
  { class: 'D', damage: 'D4 + MD + 2', range: 'Muito curta', examples: ['Facas de luta (facas de caça; adaga; etc)'] },
  {
    class: 'D',
    damage: 'D6 + MD',
    range: 'Curta',
    examples: ['Facas grandes (Cutelo; faca de açougueiro; faca alongada)', 'Porrete', 'taco de baseball', 'golfe'],
  },
  { class: 'D', damage: 'D8 + MD', range: 'Muito curta', examples: ['Membro modificado roboticamente', 'Soco inglês'] },
];

export const weaponMeleeStrong: weaponInterface[] = [
  { class: 'C', damage: 'D8 + MD', range: 'Curta', examples: ['Espadas comuns', 'Machado'] },
  { class: 'C', damage: 'D8 + MD', range: 'Média', examples: ['Chicotes', 'Correntes'] },
  { class: 'C', damage: 'D8 + MD + 4(Arremesso)', range: 'Média', examples: ['Lança'] },
  { class: 'C', damage: 'D10 + MD', range: 'Curta', examples: ['Arma Grande'] },
  { class: 'B', damage: 'D10 + D4 + MD', range: 'Curta', examples: ['Espadas Nobres (Katana; Esgrima)', 'Foices'] },
  { class: 'B', damage: 'D10 + D6 + MD', range: 'Curta', examples: ['Arma corpo a corpo + imbuição'] },
  { class: 'A', damage: '2D10 + MD + 3', range: 'Curta', examples: [''] },
];

export const weaponBow: weaponInterface[] = [
  { class: 'D', damage: 'D8 + 1', range: 'Média', examples: ['Arcos', 'Bestas'] },
  { class: 'C', damage: 'D8 + D4', range: 'Longa', examples: ['Arco Longo'] },
  { class: 'C', damage: 'D8 + D4', range: 'Média', examples: ['Besta de precisão'] },
  { class: 'B', damage: '2D6 + 2D2', range: 'Muito longa', examples: ['Arco Nobre'] },
  { class: 'B', damage: '2D6 + D4 + D2', range: 'Longa', examples: ['Besta Nobre'] },
  { class: 'A', damage: '2D12 + 6', range: 'Muito longa', examples: [''] },
];

export const weaponPistol: weaponInterface[] = [
  { class: 'D', damage: 'D6', range: 'Média', examples: ['Pistola Comum'], fireRate: 6 },
  { class: 'D', damage: 'D8', range: 'Média', examples: ['Revólver'], fireRate: 3 },
  { class: 'C', damage: 'D6 + 2D2', range: 'Média', examples: ['Pistola Automática'], fireRate: 4 },
  { class: 'C', damage: 'D8 + 2D2', range: 'Média', examples: ['Revólver Magnum'], fireRate: 3 },
  { class: 'C', damage: 'D8 + 2D2', range: 'Média', examples: ['Glock'], fireRate: 5 },
  { class: 'B', damage: '2D6 + 6', range: 'Longa', examples: ['Desert Eagle'], fireRate: 6 },
  { class: 'B', damage: '3D6 + 2D2', range: 'Longa', examples: ['Pistola de Energia'], fireRate: 3 },
  { class: 'B', damage: '2D10 + 4', range: 'Longa', examples: ['Pistola a laser'], fireRate: 3 },
  { class: 'A', damage: '2D10 + 2D6 + 4', range: 'Longa', examples: ['Pistola de Energia'], fireRate: 4 },
];

export const weaponShotgun: weaponInterface[] = [
  { class: 'D', damage: 'D10 + 4', range: 'Curta', examples: ['Espingardas de repetição'], fireRate: 2 },
  { class: 'C', damage: '2D10 + 4', range: 'Curta', examples: ['Espingardas Semi Automáticas'], fireRate: 2 },
  { class: 'B', damage: '3D10 + 4', range: 'Curta', examples: ['Espingarda de Energia'], fireRate: 2 },
  { class: 'A', damage: '5D10 + 4', range: 'Média', examples: [''], fireRate: 2 },
];

export const weaponRifle: weaponInterface[] = [
  { class: 'C', damage: 'D8', range: 'Longa', examples: ['Fuzil de assalto'], fireRate: 6 },
  { class: 'C', damage: 'D12 + 2 / D10 + 6 ', range: 'Muito longa', examples: ['Fuzil de precisão'], fireRate: 3 },
  { class: 'B', damage: 'D8 + 3D6 / 3D8 + 8', range: 'Muito longa', examples: ['Fuzil de energia'], fireRate: 5 },
  { class: 'A', damage: '4D8 + 2D6 / 5D8 + 10', range: 'Muito longa', examples: [''], fireRate: 5 },
];

export const weaponMachineGun: weaponInterface[] = [
  { class: 'B', damage: '210 + D4', range: 'Longa', examples: ['Submetralhadora'], fireRate: 8 },
  { class: 'D', damage: 'D20 + D6', range: 'Longa', examples: ['Metralhadora'], fireRate: 8 },
  { class: 'A', damage: '2D20 + D4', range: 'Longa', examples: [''], fireRate: 10 },
];
