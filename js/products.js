/**
 * ROCKEST — Catálogo de Produtos
 * Para adicionar: copie um bloco { ... } e preencha.
 * Imagens ficam em: assets/img/produtosimg/
 */

const PRODUCTS = [
  {
    id: 'camiseta-guns-n-roses',
    category: 'camisetas',
    badge: 'Destaque',
    name: "Camiseta Guns N' Roses",
    price: 'R$ 49,95',
    priceNum: 49.95,
    image: 'produtosimg/camiseta-guns-n-roses.png',
    shortDesc: "Estampa icônica Guns N' Roses. Diversos modelos disponíveis. 100% algodão.",
    description: "A clássica Camiseta Guns N' Roses traz a estampa icônica da banda com qualidade de serigrafia superior. Disponível em diversos modelos, com aquele visual que todo fã do rock clássico precisa ter no guarda-roupa. Algodão macio, corte moderno e estampa que não desbota.",
    features: [
      '100% Algodão de alta qualidade',
      'Serigrafia de alta durabilidade',
      'Diversos modelos disponíveis',
      'Corte moderno unissex',
      'Disponível em P, M, G, GG e XGG',
    ],
    shopeeUrl: 'https://s.shopee.com.br/2VnPflvbaX',
  },
  {
    id: 'camiseta-ozzy-osbourne',
    category: 'camisetas',
    badge: 'Edição Especial',
    name: 'Camiseta Ozzy Osbourne — Rock Legend',
    price: 'R$ 31,90',
    priceNum: 31.90,
    image: 'produtosimg/camiseta-ozzy-osbourne.png',
    shortDesc: 'Homenagem ao Príncipe das Trevas. Estampa exclusiva Rock Legend 1948–2025.',
    description: 'Uma homenagem ao eterno Príncipe das Trevas — Ozzy Osbourne. A estampa exclusiva "Rock Legend 1948–2025" celebra o legado de um dos maiores nomes do rock e do heavy metal de todos os tempos. Peça de colecionador para quem viveu — e ainda vive — essa era.',
    features: [
      'Estampa exclusiva em homenagem a Ozzy Osbourne',
      'Impressão de alta qualidade em algodão',
      'Tema: Rock Legend 1948–2025',
      'Corte amplo e confortável',
      'Peça de edição especial',
    ],
    shopeeUrl: 'https://s.shopee.com.br/1gEIgJal8y',
  },
  {
    id: 'caneca-viking',
    category: 'acessorios',
    badge: 'Novo',
    name: 'Caneca Viking Skull',
    price: 'R$ 42,90',
    priceNum: 42.90,
    image: 'produtosimg/caneca-viking.png',
    shortDesc: 'Caneca viking com caveira 3D em resina e aço inox. Diversos modelos disponíveis.',
    description: 'A Caneca Viking Skull combina resina artesanal com interior em aço inoxidável, garantindo durabilidade e um visual que intimida. Com design de caveira em 3D e detalhes medievais, é o acessório perfeito para quem leva o rock até a última gota. Disponível em vários modelos temáticos.',
    features: [
      'Corpo em resina com acabamento 3D',
      'Interior em aço inoxidável',
      'Capacidade: aproximadamente 450ml',
      'Diversos modelos de caveira disponíveis',
      'Ideal para bebidas quentes e frias',
    ],
    shopeeUrl: 'https://s.shopee.com.br/5AoAr0dNoN',
  },
  {
    id: 'anel-de-caveira',
    category: 'acessorios',
    badge: '',
    name: 'Anel de Caveira',
    price: 'R$ 24,90',
    priceNum: 24.90,
    image: 'produtosimg/anel-de-caveira.png',
    shortDesc: 'Anel estilo rock com caveira em aço inox. Diversos modelos. Tamanhos variados.',
    description: 'O Anel de Caveira é o detalhe que transforma qualquer look. Feito em aço inoxidável com acabamento prateado, resistente à água e ao tempo. Com designs variados que vão do clássico caveira ao elaborado com detalhes góticos, cada peça é uma declaração de estilo e atitude.',
    features: [
      'Aço inoxidável antialérgico',
      'Acabamento prateado polido',
      'Diversos modelos e designs',
      'Tamanhos variados disponíveis',
      'Resistente à água e à oxidação',
    ],
    shopeeUrl: 'https://s.shopee.com.br/4LF3rf6lx2',
  },
];

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}
function getProductsByCategory(cat) {
  if (!cat || cat === 'todos') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === cat);
}
function getCategories() {
  const cats = [...new Set(PRODUCTS.map(p => p.category))];
  return ['todos', ...cats];
}
