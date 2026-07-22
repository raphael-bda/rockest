/**
 * ROCKEST — Cursos / Afiliados Hotmart (via Kiwify)
 * Dados centralizados para reuso em home, cursos.html etc.
 */

const CURSOS = [
  {
    id: 'violao',
    instrumento: 'Violão',
    imagem: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=80',
    titulo: 'Curso de Violão — Do Zero ao Solo',
    descCurta: 'Aprenda violão do absoluto zero até seus primeiros solos. Didática passo a passo.',
    descLonga: 'Curso completo de violão para iniciantes. Você vai aprender acordes, ritmos, dedilhados e técnicas de solo. Didática simples e direta, feita para quem nunca tocou mas sempre sonhou em tocar.',
    beneficios: [
      'Aulas em vídeo do absoluto zero',
      'Acordes, ritmos e dedilhados',
      'Técnicas de solo para impressionar',
      'Suporte com professor',
      'Acesso vitalício',
    ],
    link: 'https://kiwify.app/XBXs1Xr?afid=KpQ4Xnjz',
    badge: 'Mais Vendido',
  },
  {
    id: 'bateria',
    instrumento: 'Bateria',
    imagem: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400&q=80',
    titulo: 'Curso de Bateria — Ritmo e Poder',
    descCurta: 'Domine a bateria com aulas práticas. Para iniciantes e intermediários.',
    descLonga: 'Curso de bateria com método progressivo. Aprenda viradas, grooves, coordenação motora e muito mais. Ideal para quem quer tocar rock, metal e outros estilos pesados.',
    beneficios: [
      'Aulas práticas do básico ao avançado',
      'Viradas, grooves e levadas',
      'Coordenação motora 4 membros',
      'Playbacks para treinar',
      'Acesso vitalício',
    ],
    link: 'https://pay.kiwify.com.br/ejJiU37?afid=WDl3TwVE',
    badge: 'Recomendado',
  },
  {
    id: 'vocal',
    instrumento: 'Vocal',
    imagem: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&q=80',
    titulo: 'Curso de Canto — Solte a Voz',
    descCurta: 'Técnica vocal para cantar rock com potência, afinação e personalidade.',
    descLonga: 'Curso completo de técnica vocal focado em rock. Aprenda a controlar a respiração, expandir sua extensão vocal, ganhar potência sem forçar e interpretar como um verdadeiro rockstar.',
    beneficios: [
      'Aquecimento e técnica vocal',
      'Expansão de extensão vocal',
      'Potência sem danificar a voz',
      'Interpretação e presença',
      'Acesso vitalício',
    ],
    link: 'https://kiwify.app/IKuk0PS?afid=407W93LR',
    badge: 'Novo',
  },
  {
    id: 'piano',
    instrumento: 'Piano / Teclado',
    imagem: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&q=80',
    titulo: 'Curso de Piano — Teclas que Rockam',
    descCurta: 'Aprenda piano e teclado com foco em rock clássico e moderno.',
    descLonga: 'Curso de piano e teclado para quem ama rock. Aprenda acordes poderosos, escalas, improvisação e técnicas usadas por grandes pianistas do rock (Jon Lord, Rick Wakeman, etc).',
    beneficios: [
      'Acordes e escalas para rock',
      'Improvisação e harmonização',
      'Técnica de teclado moderna',
      'Músicas clássicas do rock',
      'Acesso vitalício',
    ],
    link: 'https://kiwify.app/f5gNyRO?afid=js2qnSJA',
    badge: 'Oferta',
  },
  {
    id: 'guitarra',
    instrumento: 'Guitarra',
    imagem: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=400&q=80',
    titulo: 'Curso de Guitarra',
    descCurta: 'EM BREVE — O melhor curso de guitarra está chegando.',
    descLonga: 'Estamos preparando uma seleção especial do melhor curso de guitarra para você. Em breve estará disponível aqui. Fique ligado!',
    beneficios: [
      'Em breve',
      'Aulas completas de guitarra',
      'Técnicas de solo e distorção',
      'Repertório rock',
    ],
    link: '#',
    badge: 'Em Breve',
    disabled: true,
  },
];

function getCursoById(id) {
  return CURSOS.find(c => c.id === id) || null;
}

function getCursosAtivos() {
  return CURSOS.filter(c => !c.disabled);
}
