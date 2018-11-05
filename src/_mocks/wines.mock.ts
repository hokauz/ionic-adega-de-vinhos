import { Wine } from "../_models/wine.interface";

export const WINES_MOCK: Wine[] = [
  {
    id: 0,
    name: 'Château Haut-Brion',
    harvest: 2012,
    type: 'Tinto',
    description: '',
    grape: 'Tempranillo',
    stock: 1,
    country_iso: 'FR',
    country_name: 'França'
  },
  {
    id: 1,
    name: 'Château Mouton Rothschild',
    harvest: 2009,
    type: 'Tinto',
    description: 'Um clássico francês e um dos 5 Premiers Grands Crus Classés da classificação de Médoc de 1855. Primeiro vinho do Château Mouton Rothschild, que possui aromas de amora e groselha, associadas às notas de violeta, torrefação, tosta, tabaco, chocolate e toques sutis de cedro. Apresenta, no paladar, suculência, harmonia, boa maturidade, taninos aveludados e ótima complexidade. A safra 2008 necessitou de paciência e atenção rigorosa nas videiras, para a escolha do momento certo para a colheita. A princípio, houve falta de sol na primeira quinzena de setembro e felizmente um magnífico verão inverteu a situação, dando vida a um vinho, pontuado e aclamado pela crítica internacional, que promete longevidade e excelente qualidade aromática e gustativa.',
    grape: 'Cabernet Sauvignon',
    stock: 1,
    country_iso: 'FR',
    country_name: 'França'
  },
  {
    id: 2,
    name: 'Château Haut-Brion',
    harvest: 1997,
    type: 'Doce',
    description: 'A boa safra de 1997 deu vida a um vinho de intenso aroma de mel, caramelo e notas de tosta, que emoldura o paladar doce e persistente, com incrível equilíbrio entre acidez e doçura, que é sempre um dos diferenciais deste néctar. Único vinho reconhecido como Premier Cru Supérieur de Sauternes, o Château d Yquem tem uma pequena produção conduzida sob rigorosos procedimentos com objetivo de obter a mais alta qualidade.',
    grape: 'Sémillon, Sauvignon Blanc',
    stock: 1,
    country_iso: 'FR',
    country_name: 'França'
  },
  {
    id: 3,
    name: 'Veuve Clicquot La Grande Dame',
    harvest: 2004,
    type: 'Espumante',
    description: 'Champagne rosé de boa estrutura, fresco e com suave frutado percebível nos aromas, que também nos trazem um toque mineral e de amêndoas. Este exemplar pertence a linha La Grande Dame, criada em 1972 para celebrar o bicentenário da Maison Veuve Clicquot, rendendo homenagem a Madame Clicquot, também conhecida por "La Grande Dame de Champagne". Trata-se de um assemblage exclusivo de oito dos clássicos Grands Crus da casa, traduzindo-se em uma expressão mineral e fresca do estilo Veuve Clicquot.',
    grape: 'Pinot Noir (67%), Chardonnay (33%)',
    stock: 5,
    country_iso: 'FR',
    country_name: 'França'
  },
  {
    id: 4,
    name: 'Confidentielle',
    harvest: 2017,
    type: 'Rosé',
    description: '',
    grape: 'Mourvèdre, Grenache , Cinsault',
    stock: 3,
    country_iso: 'FR',
    country_name: 'França'
  },
]