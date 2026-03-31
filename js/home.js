/**
 * ROCKEST — Home Page Script
 * Renderiza produtos em destaque.
 * Caminho de imagens: assets/img/produtosimg/
 */

function buildCard(p, root) {
  root = root || './';
  const badge = p.badge ? `<span class="product-badge">${p.badge}</span>` : '';
  return `
    <article class="product-card">
      <div class="product-card-img">
        ${badge}
        <a href="${root}pages/produto.html?id=${p.id}" aria-label="Ver ${p.name}">
          <img src="${root}assets/img/${p.image}" alt="${p.name}" loading="lazy">
        </a>
      </div>
      <div class="product-card-body">
        <h3 class="product-card-name">
          <a href="${root}pages/produto.html?id=${p.id}">${p.name}</a>
        </h3>
        <p class="product-card-desc">${p.shortDesc}</p>
        <p class="product-card-price">${p.price}</p>
        <div class="product-card-actions">
          <a href="${root}pages/produto.html?id=${p.id}" class="btn btn-outline">Ver mais</a>
          <a href="${p.shopeeUrl}" target="_blank" rel="noopener sponsored" class="btn btn-primary">Comprar</a>
        </div>
      </div>
    </article>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map(p => buildCard(p, './')).join('');
});
