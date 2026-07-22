/**
 * ROCKEST — Home Page Script
 * Renderiza curadoria, quizzes preview e cursos na página inicial.
 */

// ─── Dados da Curadoria da Semana ───
const CURADORIA_DATA = [
  {
    tag: 'Álbum da Semana',
    titulo: 'The Dark Side of the Moon',
    artista: 'Pink Floyd',
    ano: 1973,
    desc: 'Um dos álbuns mais icônicos de todos os tempos. Lançado em 1973, passou 741 semanas consecutivas nas paradas — mais de 14 anos! Um marco do rock progressivo que explora temas como conflito, ganância, tempo e saúde mental.',
    cta: 'Ouvir no Spotify →',
    ctaUrl: 'https://open.spotify.com/intl-pt/album/4LH4d3cOWNNsVw41Gqt2kv',
  },
  {
    tag: 'Artista Recomendado',
    titulo: 'Led Zeppelin',
    artista: 'A banda que definiu o hard rock',
    ano: '1968 – 1980',
    desc: 'Com riff pesado, bateria explosiva e vocal agudo, o Led Zeppelin redefiniu o rock nos anos 70. Robert Plant, Jimmy Page, John Paul Jones e John Bonham criaram um som que influencia gerações até hoje. Stairway to Heaven, Whole Lotta Love e Kashmir são apenas o começo.',
    cta: 'Conhecer a discografia →',
    ctaUrl: 'https://open.spotify.com/intl-pt/artist/36QJpDe2go2KgaRleHCDTp',
  },
];

// ─── Renderização ───
function renderCuradoria() {
  const grid = document.getElementById('curadoria-grid');
  if (!grid) return;

  grid.innerHTML = CURADORIA_DATA.map(item => `
    <article class="curatoria-card">
      <span class="curatoria-card-tag">${item.tag}</span>
      <h3>${item.titulo}</h3>
      <span class="curatoria-artista">${item.artista}</span>
      <span class="curatoria-ano">${item.ano}</span>
      <p class="curatoria-desc">${item.desc}</p>
      <a href="${item.ctaUrl}" target="_blank" rel="noopener" class="curatoria-cta">${item.cta}</a>
    </article>
  `).join('');
}

function renderQuizzes() {
  const grid = document.getElementById('quiz-grid');
  if (!grid) return;

  const quizzes = [QUIZ_CONHECIMENTO, QUIZ_INSTRUMENTO];
  grid.innerHTML = quizzes.map(q => renderQuizCard(q, './')).join('');
}

function renderCursos() {
  const grid = document.getElementById('cursos-grid');
  if (!grid) return;

  // Mostrar apenas cursos ativos (sem "Em breve") na home
  const ativos = CURSOS.filter(c => !c.disabled).slice(0, 4);
  grid.innerHTML = ativos.map(c => renderCursoCard(c, './')).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderCuradoria();
  renderQuizzes();
  renderCursos();
});

