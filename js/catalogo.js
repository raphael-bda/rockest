/**
 * ROCKEST — Catálogo Script
 */

const ROOT = '../';

function buildCard(p) {
  const badge = p.badge ? `<span class="product-badge">${p.badge}</span>` : '';
  return `
    <article class="product-card" data-category="${p.category}">
      <div class="product-card-img">
        ${badge}
        <a href="${ROOT}pages/produto.html?id=${p.id}" aria-label="Ver ${p.name}">
          <img src="${ROOT}assets/img/${p.image}" alt="${p.name}" loading="lazy">
        </a>
      </div>
      <div class="product-card-body">
        <h2 class="product-card-name">
          <a href="${ROOT}pages/produto.html?id=${p.id}">${p.name}</a>
        </h2>
        <p class="product-card-desc">${p.shortDesc}</p>
        <p class="product-card-price">${p.price}</p>
        <div class="product-card-actions">
          <a href="${ROOT}pages/produto.html?id=${p.id}" class="btn btn-outline">Ver mais</a>
          <a href="${p.shopeeUrl}" target="_blank" rel="noopener sponsored" class="btn btn-primary">Comprar</a>
        </div>
      </div>
    </article>
  `;
}

function renderProducts(cat) {
  const grid  = document.getElementById('catalog-grid');
  const count = document.getElementById('product-count');
  const list  = getProductsByCategory(cat);
  grid.innerHTML    = list.map(buildCard).join('');
  count.textContent = list.length;
}

function initFilters() {
  const tabs = document.getElementById('filter-tabs');
  const cats = getCategories();
  const labels = { todos:'Todos', camisetas:'Camisetas', moletons:'Moletons', acessorios:'Acessórios' };
  tabs.innerHTML = cats.map(c => `
    <button class="filter-tab${c==='todos'?' active':''}" data-cat="${c}">
      ${labels[c] || c.charAt(0).toUpperCase()+c.slice(1)}
    </button>
  `).join('');
  tabs.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.cat);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initFilters();
  renderProducts('todos');
});
