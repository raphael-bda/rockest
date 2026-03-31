/**
 * ROCKEST — Página de Produto Individual
 */

const ROOT_P = '../';

function buildRelatedCard(p) {
  const badge = p.badge ? `<span class="product-badge">${p.badge}</span>` : '';
  return `
    <article class="product-card">
      <div class="product-card-img">
        ${badge}
        <a href="produto.html?id=${p.id}">
          <img src="${ROOT_P}assets/img/${p.image}" alt="${p.name}" loading="lazy">
        </a>
      </div>
      <div class="product-card-body">
        <h3 class="product-card-name"><a href="produto.html?id=${p.id}">${p.name}</a></h3>
        <p class="product-card-desc">${p.shortDesc}</p>
        <p class="product-card-price">${p.price}</p>
        <div class="product-card-actions">
          <a href="produto.html?id=${p.id}" class="btn btn-outline">Ver mais</a>
          <a href="${p.shopeeUrl}" target="_blank" rel="noopener sponsored" class="btn btn-primary">Comprar</a>
        </div>
      </div>
    </article>
  `;
}

function renderProduct(p) {
  const catLabels = { camisetas:'Camisetas', moletons:'Moletons', acessorios:'Acessórios' };
  const feats = p.features.map(f=>`<li>${f}</li>`).join('');
  return `
    <div class="product-detail fade-in">
      <div class="product-detail-gallery">
        <img src="${ROOT_P}assets/img/${p.image}" alt="${p.name}">
      </div>
      <div class="product-detail-info">
        <p class="product-detail-category">
          ${catLabels[p.category]||p.category}
          ${p.badge?`&nbsp;·&nbsp;<strong style="color:var(--gold)">${p.badge}</strong>`:''}
        </p>
        <h1 class="product-detail-name">${p.name}</h1>
        <p class="product-detail-price">${p.price}</p>
        <p class="product-detail-desc">${p.description}</p>
        <div class="product-features">
          <h3>Destaques &amp; Benefícios</h3>
          <ul>${feats}</ul>
        </div>
        <div class="product-detail-actions">
          <a href="${p.shopeeUrl}" target="_blank" rel="noopener sponsored" class="btn btn-shopee" aria-label="Comprar ${p.name} na Shopee">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C9.24 2 7 4.24 7 7H3l-1 14h20l-1-14h-4c0-2.76-2.24-5-5-5zm0 2c1.65 0 3 1.35 3 3H9c0-1.65 1.35-3 3-3zm-7.93 5H19.93l.79 10H3.28l.79-10z"/></svg>
            Comprar na Shopee
          </a>
          <div class="shopee-trust" style="margin:0">
            <span class="trust-icon">🛡️</span>
            <span>Compra 100% segura realizada na plataforma oficial da <strong>Shopee</strong>.</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const params    = new URLSearchParams(window.location.search);
  const id        = params.get('id');
  const container = document.getElementById('product-detail-container');
  const crumb     = document.getElementById('breadcrumb-name');
  const pageTitle = document.getElementById('page-title');

  if (!id || !container) return;
  const product = getProductById(id);

  if (!product) {
    container.innerHTML = `
      <div style="text-align:center;padding:5rem 1rem;">
        <p style="font-family:'Bebas Neue',sans-serif;font-size:3rem;color:var(--white-dim)">Produto não encontrado</p>
        <a href="catalogo.html" class="btn btn-outline mt-2">← Voltar ao catálogo</a>
      </div>`;
    return;
  }

  if (pageTitle) pageTitle.textContent = `${product.name} — ROCKEST`;
  if (crumb)     crumb.textContent     = product.name;
  container.innerHTML = renderProduct(product);

  // Related products
  const related  = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);
  const section  = document.getElementById('related-section');
  const grid     = document.getElementById('related-grid');
  if (related.length && section && grid) {
    grid.innerHTML = related.map(buildRelatedCard).join('');
    section.classList.remove('hidden');
  }
});
