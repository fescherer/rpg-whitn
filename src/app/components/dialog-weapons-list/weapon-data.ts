import { weaponInterface } from 'src/app/interfaces/weaponInterface';

export const weaponD: weaponInterface[] = [];

export const weaponC: weaponInterface[] = [
  {
    name: 'Corpo a corpo lento',
    aimed: '+3 de dano',
    damage: '8 + D4',
    special: 'Ganha vantagem de teste de acerto (Teste de força)',
  },
  {
    name: 'Corpo a corpo rápido',
    aimed: '+3 de dano',
    damage: '2D4 + 3D2',
    special: 'Ganha vantagem de teste de acerto (Teste de força)',
  },
  {
    name: 'Pistola',
    aimed: 'Aumenta o threshold em 2',
    damage: '2 + 1D12',
    special: 'Tirar Baixo + 6',
  },
  {
    name: 'Fuzil',
    aimed: 'Debuff de baixo some e fica só o alto',
    damage: '1D12',
    special: 'Tirar Alto + 6, baixo 0',
  },
  {
    name: 'Metralhadora',
    aimed: 'Metade dos dados é sempre 2',
    damage: '6D2',
    special: 'Sem threshold',
  },
];

export const weaponB: weaponInterface[] = [];

export const weaponA: weaponInterface[] = [];

//classe c
// Corpo a corpo:
// Passivo: Ganha vantagem de teste de acerto
// Rapido C- 2D4 + 3D2 max-14 min-5
// Lento C - 8 + D4  max-12 min- 8
// Mirado: +3

// Trashold-2 numeros para baixo ou para alto

// Pistola: (Meio é ruim, é bom tirar alto ou baixo)
// 2 + 1D12
// Trashold- Tirar Baixo + 6
// Mirado: Aumenta o trashold em 2

// Fuzil (Baixo muito ruim, Alto bom)
// 1D12
// Trashold- Tirar Alto + 6, baixo 0
// Mirado: Debuff de baixo some e fica só o alto

// Metralhadora: (Nunca tiraria ruim porque tem muita probabilidade)
// 6D2 Max-12 min-6
// Mirado: metade dos dados é sempre 2

// Dano pistola D12 (SEM MIRA)
// D12 -> 1 | 2  | 3 | 4 | 5 | 6 | 7 | 8  | 9  | 10 | 11 | 12
// DANO   9 | 10 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14

// Shotgun
// D12 -> 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
// DANO   0 | 0 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 17 | 18

// export const weaponMeleeWeak: weaponInterface[] = [
//   { class: 'D', damage: 'D2', range: 'Muito curta', examples: ['Sem arma', 'dano físico proposital'] },
//   {
//     class: 'D',
//     damage: 'D4 + MD',
//     range: 'Muito curta',
//     examples: [
//       'Facas curtas (canivetes; estiletes; etc)',
//       'Ferramentas (Chave inglesa)',
//       'chave phillips',
//       'chave de rosca',
//       'chave de fenda',
//     ],
//   },
//   { class: 'D', damage: 'D4 + MD + 2', range: 'Muito curta', examples: ['Facas de luta (facas de caça; adaga; etc)'] },
//   {
//     class: 'D',
//     damage: 'D6 + MD',
//     range: 'Curta',
//     examples: ['Facas grandes (Cutelo; faca de açougueiro; faca alongada)', 'Porrete', 'taco de baseball', 'golfe'],
//   },
//   { class: 'D', damage: 'D8 + MD', range: 'Muito curta', examples: ['Membro modificado roboticamente', 'Soco inglês'] },
// ];

// export const weaponMeleeStrong: weaponInterface[] = [
//   { class: 'C', damage: 'D8 + MD', range: 'Curta', examples: ['Espadas comuns', 'Machado'] },
//   { class: 'C', damage: 'D8 + MD', range: 'Média', examples: ['Chicotes', 'Correntes'] },
//   { class: 'C', damage: 'D8 + MD + 4(Arremesso)', range: 'Média', examples: ['Lança'] },
//   { class: 'C', damage: 'D10 + MD', range: 'Curta', examples: ['Arma Grande'] },
//   { class: 'B', damage: 'D10 + D4 + MD', range: 'Curta', examples: ['Espadas Nobres (Katana; Esgrima)', 'Foices'] },
//   { class: 'B', damage: 'D10 + D6 + MD', range: 'Curta', examples: ['Arma corpo a corpo + imbuição'] },
//   { class: 'A', damage: '2D10 + MD + 3', range: 'Curta', examples: [''] },
// ];

// export const weaponBow: weaponInterface[] = [
//   { class: 'D', damage: 'D8 + 1', range: 'Média', examples: ['Arcos', 'Bestas'] },
//   { class: 'C', damage: 'D8 + D4', range: 'Longa', examples: ['Arco Longo'] },
//   { class: 'C', damage: 'D8 + D4', range: 'Média', examples: ['Besta de precisão'] },
//   { class: 'B', damage: '2D6 + 2D2', range: 'Muito longa', examples: ['Arco Nobre'] },
//   { class: 'B', damage: '2D6 + D4 + D2', range: 'Longa', examples: ['Besta Nobre'] },
//   { class: 'A', damage: '2D12 + 6', range: 'Muito longa', examples: [''] },
// ];

// export const weaponPistol: weaponInterface[] = [
//   { class: 'D', damage: 'D6', range: 'Média', examples: ['Pistola Comum'], fireRate: 6 },
//   { class: 'D', damage: 'D8', range: 'Média', examples: ['Revólver'], fireRate: 3 },
//   { class: 'C', damage: 'D6 + 2D2', range: 'Média', examples: ['Pistola Automática'], fireRate: 4 },
//   { class: 'C', damage: 'D8 + 2D2', range: 'Média', examples: ['Revólver Magnum'], fireRate: 3 },
//   { class: 'C', damage: 'D8 + 2D2', range: 'Média', examples: ['Glock'], fireRate: 5 },
//   { class: 'B', damage: '2D6 + 6', range: 'Longa', examples: ['Desert Eagle'], fireRate: 6 },
//   { class: 'B', damage: '3D6 + 2D2', range: 'Longa', examples: ['Pistola de Energia'], fireRate: 3 },
//   { class: 'B', damage: '2D10 + 4', range: 'Longa', examples: ['Pistola a laser'], fireRate: 3 },
//   { class: 'A', damage: '2D10 + 2D6 + 4', range: 'Longa', examples: ['Pistola de Energia'], fireRate: 4 },
// ];

// export const weaponShotgun: weaponInterface[] = [
//   { class: 'D', damage: 'D10 + 4', range: 'Curta', examples: ['Espingardas de repetição'], fireRate: 2 },
//   { class: 'C', damage: '2D10 + 4', range: 'Curta', examples: ['Espingardas Semi Automáticas'], fireRate: 2 },
//   { class: 'B', damage: '3D10 + 4', range: 'Curta', examples: ['Espingarda de Energia'], fireRate: 2 },
//   { class: 'A', damage: '5D10 + 4', range: 'Média', examples: [''], fireRate: 2 },
// ];

// export const weaponRifle: weaponInterface[] = [
//   { class: 'C', damage: 'D8', range: 'Longa', examples: ['Fuzil de assalto'], fireRate: 6 },
//   { class: 'C', damage: 'D12 + 2 / D10 + 6 ', range: 'Muito longa', examples: ['Fuzil de precisão'], fireRate: 3 },
//   { class: 'B', damage: 'D8 + 3D6 / 3D8 + 8', range: 'Muito longa', examples: ['Fuzil de energia'], fireRate: 5 },
//   { class: 'A', damage: '4D8 + 2D6 / 5D8 + 10', range: 'Muito longa', examples: [''], fireRate: 5 },
// ];

// export const weaponMachineGun: weaponInterface[] = [
//   { class: 'B', damage: '210 + D4', range: 'Longa', examples: ['Submetralhadora'], fireRate: 8 },
//   { class: 'D', damage: 'D20 + D6', range: 'Longa', examples: ['Metralhadora'], fireRate: 8 },
//   { class: 'A', damage: '2D20 + D4', range: 'Longa', examples: [''], fireRate: 10 },
// ];
