/**
 * ROCKEST — Quizzes Interativos sobre Rock
 * Dois quizzes: conhecimento geral e descoberta de instrumento
 */

// ─── QUIZ 1: Conhecimento sobre Rock ───
const QUIZ_CONHECIMENTO = {
  id: 'quiz-conhecimento',
  titulo: 'Qual seu nível de conhecimento no Rock?',
  descricao: 'Responda 5 perguntas sobre rock clássico e descubra se você é um iniciante ou uma lenda do rock.',
  emoji: '🤘',
  resultadoLabel: 'Seu nível de Rock:',
  perguntas: [
    {
      pergunta: 'Qual banda é conhecida como a "banda que deveria ter morrido antes de fazer música ruim"?',
      opcoes: [
        { texto: 'The Rolling Stones', valor: 1 },
        { texto: 'Black Sabbath', valor: 2 },
        { texto: 'Led Zeppelin', valor: 3 },
        { texto: 'AC/DC', valor: 4 },
      ],
    },
    {
      pergunta: 'Em que ano o lendário álbum "The Dark Side of the Moon" do Pink Floyd foi lançado?',
      opcoes: [
        { texto: '1970', valor: 1 },
        { texto: '1973', valor: 4 },
        { texto: '1975', valor: 2 },
        { texto: '1969', valor: 3 },
      ],
    },
    {
      pergunta: 'Qual guitarrista é conhecido como "Slowhand"?',
      opcoes: [
        { texto: 'Jimi Hendrix', valor: 1 },
        { texto: 'Jimmy Page', valor: 2 },
        { texto: 'Eric Clapton', valor: 4 },
        { texto: 'Eddie Van Halen', valor: 3 },
      ],
    },
    {
      pergunta: 'Qual dessas bandas NÃO é inglesa?',
      opcoes: [
        { texto: 'Queen', valor: 1 },
        { texto: 'The Who', valor: 2 },
        { texto: 'Metallica', valor: 4 },
        { texto: 'Deep Purple', valor: 3 },
      ],
    },
    {
      pergunta: 'Complete a letra: "Mama, just killed a man, put a gun against his head, pulled my trigger, now he\'s dead..." — De qual música é?',
      opcoes: [
        { texto: 'Bohemian Rhapsody — Queen', valor: 4 },
        { texto: 'Stairway to Heaven — Led Zeppelin', valor: 2 },
        { texto: 'Nothing Else Matters — Metallica', valor: 1 },
        { texto: 'Comfortably Numb — Pink Floyd', valor: 3 },
      ],
    },
  ],
  calcularResultado: (pontos) => {
    if (pontos <= 8) return { titulo: '🎸 Iniciante', desc: 'Você está começando sua jornada no rock. Não se preocupe, todo mundo começa de algum lugar! Hora de explorar as aulas e se aprofundar.', cta: 'Quero aprender mais!' };
    if (pontos <= 12) return { titulo: '🎸 Intermediário', desc: 'Você já conhece bem o rock, mas ainda há muito o que descobrir. Continue assim e em breve será um expert!', cta: 'Aprofundar conhecimento →' };
    if (pontos <= 16) return { titulo: '🎸 Expert', desc: 'Você manda bem! Conhece a história e os clássicos do rock como poucos. Agora que tal aprender a tocar?', cta: 'Sim, quero tocar!' };
    return { titulo: '🎸 LENDA DO ROCK!', desc: 'Você é uma verdadeira lenda! Conhecimento de dar inveja. Agora leva isso para os instrumentos!', cta: 'Virar rockstar →' };
  },
};

// ─── QUIZ 2: Descubra seu Instrumento ───
const QUIZ_INSTRUMENTO = {
  id: 'quiz-instrumento',
  titulo: 'Qual instrumento combina com você?',
  descricao: 'Descubra qual instrumento musical combina mais com sua personalidade e estilo.',
  emoji: '🎯',
  resultadoLabel: 'Seu instrumento ideal:',
  perguntas: [
    {
      pergunta: 'Qual dessas bandas mais combina com você?',
      opcoes: [
        { texto: 'Nirvana — som cru e direto', valor: 'guitarra' },
        { texto: 'Metallica — peso e precisão', valor: 'bateria' },
        { texto: 'Queen — versatilidade e presença', valor: 'vocal' },
        { texto: 'The Doors — atmosfera e estilo', valor: 'piano' },
        { texto: 'Legião Urbana — poesia e simplicidade', valor: 'violao' },
      ],
    },
    {
      pergunta: 'O que mais te atrai na música?',
      opcoes: [
        { texto: 'Os solos e riffs poderosos', valor: 'guitarra' },
        { texto: 'A batida que faz todo mundo pular', valor: 'bateria' },
        { texto: 'A voz que emociona e arrepia', valor: 'vocal' },
        { texto: 'Os acordes e harmonias complexas', valor: 'piano' },
        { texto: 'A melodia que qualquer um pode cantar', valor: 'violao' },
      ],
    },
    {
      pergunta: 'Como seus amigos te descreveriam?',
      opcoes: [
        { texto: 'Extrovertido e cheio de atitude', valor: 'guitarra' },
        { texto: 'Energético e explosivo', valor: 'bateria' },
        { texto: 'Carismático e comunicativo', valor: 'vocal' },
        { texto: 'Refinado e inteligente', valor: 'piano' },
        { texto: 'Calmo e confiável', valor: 'violao' },
      ],
    },
    {
      pergunta: 'Qual dessas músicas você mais curte?',
      opcoes: [
        { texto: '"Smoke on the Water" — Deep Purple', valor: 'guitarra' },
        { texto: '"Enter Sandman" — Metallica', valor: 'bateria' },
        { texto: '"We Will Rock You" — Queen', valor: 'vocal' },
        { texto: '"November Rain" — Guns N\' Roses', valor: 'piano' },
        { texto: '"Wish You Were Here" — Pink Floyd', valor: 'violao' },
      ],
    },
    {
      pergunta: 'Em um show de rock, você está:',
      opcoes: [
        { texto: 'Na frente, perto do guitarrista', valor: 'guitarra' },
        { texto: 'No meio do crowd, pulando', valor: 'bateria' },
        { texto: 'Cantando todas as músicas alto', valor: 'vocal' },
        { texto: 'Observando os detalhes musicais', valor: 'piano' },
        { texto: 'Num canto apreciando a melodia', valor: 'violao' },
      ],
    },
  ],
  calcularResultado: (respostas) => {
    // Conta qual instrumento apareceu mais
    const freq = {};
    respostas.forEach(r => {
      freq[r] = (freq[r] || 0) + 1;
    });
    let max = 0;
    let escolhido = 'guitarra';
    Object.keys(freq).forEach(k => {
      if (freq[k] > max) {
        max = freq[k];
        escolhido = k;
      }
    });
    
    const map = {
      guitarra: { titulo: '🎸 Guitarrista!', instrumento: 'Guitarra', desc: 'Sua alma é de guitarrista! Você tem a atitude, o estilo e a pegada de quem nasceu para fazer solos inesquecíveis.', cursoId: 'guitarra', emoji: '🎸' },
      bateria: { titulo: '🥁 Baterista!', instrumento: 'Bateria', desc: 'Sua energia é contagiante! Você tem o ritmo no sangue e a batida que move multidões.', cursoId: 'bateria', emoji: '🥁' },
      vocal: { titulo: '🎤 Vocalista!', instrumento: 'Vocal', desc: 'Sua voz é seu instrumento! Você nasceu para estar nos holofotes, emocionar e comandar o palco.', cursoId: 'vocal', emoji: '🎤' },
      piano: { titulo: '🎹 Pianista!', instrumento: 'Piano', desc: 'Sofisticado e talentoso! Você tem a sensibilidade musical de quem entende a alma por trás das notas.', cursoId: 'piano', emoji: '🎹' },
      violao: { titulo: '🎸 Violonista!', instrumento: 'Violão', desc: 'Clássico e versátil! Você carrega a alma do rock no violão, do folk ao hard rock.', cursoId: 'violao', emoji: '🎸' },
    };
    return map[escolhido] || map.guitarra;
  },
};

// ─── Funções auxiliares ───
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderQuizCard(quiz, root) {
  root = root || './';
  return `
    <article class="quiz-card">
      <div class="quiz-card-icon">${quiz.emoji}</div>
      <h3 class="quiz-card-title">${quiz.titulo}</h3>
      <p class="quiz-card-desc">${quiz.descricao}</p>
      <a href="${root}pages/quiz-page.html?quiz=${quiz.id}" class="btn btn-primary">Responder Quiz →</a>
    </article>
  `;
}

function renderCursoCard(curso, root) {
  root = root || './';
  const disabled = curso.disabled ? ' disabled' : '';
  const badgeHtml = curso.badge ? `<span class="curso-badge">${curso.badge}</span>` : '';
  const imgSrc = curso.imagem || (root + 'assets/img/logo.png');
  return `
    <article class="curso-card${disabled}">
      <div class="curso-card-header">
        <img src="${imgSrc}" alt="${curso.instrumento}" class="curso-img" loading="lazy">
        <h3 class="curso-instrumento">${curso.instrumento}</h3>
        ${badgeHtml}
      </div>
      <div class="curso-card-body">
        <h4 class="curso-titulo">${curso.titulo}</h4>
        <p class="curso-desc">${curso.descCurta}</p>
        ${curso.disabled ? '<p class="curso-breve">🔜 Em breve</p>' : `
          <a href="${curso.link}" target="_blank" rel="noopener sponsored" class="btn btn-primary">Quero Aprender →</a>
        `}
      </div>
    </article>
  `;
}

