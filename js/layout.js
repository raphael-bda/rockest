/**
 * ROCKEST — Shared Layout (Header + Footer)
 * Injeta header e footer em todas as páginas.
 */

function getRootPath() {
  const path = window.location.pathname;
  return path.includes('/pages/') ? '../' : './';
}

function injectLayout() {
  const root = getRootPath();

  const headerHTML = `
    <header class="site-header">
      <a href="${root}index.html" class="logo-wrap" aria-label="ROCKEST — Início">
        <img src="${root}assets/img/logo.png" alt="ROCKEST Logo" width="220" height="220">
      </a>
    </header>
    <nav class="main-nav" role="navigation" aria-label="Navegação principal">
      <div class="nav-inner">
        <a href="${root}index.html">Início</a>
        <a href="${root}pages/catalogo.html">Catálogo</a>
        <a href="${root}pages/sobre.html">Sobre</a>
        <a href="${root}pages/contato.html">Contato</a>
      </div>
      <button class="hamburger" aria-label="Abrir menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="mobile-nav-overlay" role="dialog" aria-modal="true" aria-label="Menu de navegação">
      <button class="mobile-nav-close" aria-label="Fechar menu">✕</button>
      <a href="${root}index.html">Início</a>
      <a href="${root}pages/catalogo.html">Catálogo</a>
      <a href="${root}pages/sobre.html">Sobre</a>
      <a href="${root}pages/contato.html">Contato</a>
    </div>
  `;

  const footerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-shopee-note">
          🛡️ <strong>Para sua segurança, todas as compras são feitas diretamente pela Shopee.</strong>
          A ROCKEST é uma vitrine afiliada. Ao clicar em "Comprar", você é redirecionado ao site oficial da Shopee.
        </div>
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="${root}assets/img/logo.png" alt="ROCKEST">
            <p>A loja de quem vive o rock. Produtos selecionados com estilo, atitude e identidade para quem não se conforma com o comum.</p>
            <a href="https://instagram.com/rockest.fm" target="_blank" rel="noopener" class="footer-ig">
              📸 @rockest.fm
            </a>
          </div>
          <div class="footer-col">
            <h4>Navegação</h4>
            <ul>
              <li><a href="${root}index.html">Início</a></li>
              <li><a href="${root}pages/catalogo.html">Catálogo</a></li>
              <li><a href="${root}pages/sobre.html">Sobre a ROCKEST</a></li>
              <li><a href="${root}pages/contato.html">Contato</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Informações</h4>
            <ul>
              <li><a href="${root}pages/sobre.html">Nossa história</a></li>
              <li><a href="${root}pages/contato.html">Fale conosco</a></li>
              <li><a href="https://instagram.com/rockest.fm" target="_blank" rel="noopener">Instagram @rockest.fm</a></li>
              <li><a href="https://shopee.com.br" target="_blank" rel="noopener">Shopee</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} ROCKEST. Todos os direitos reservados.</p>
          <p>Vitrine afiliada — <a href="https://shopee.com.br" target="_blank" rel="noopener">Compras na Shopee</a></p>
        </div>
      </div>
    </footer>
  `;

  const headerContainer = document.getElementById('site-header');
  const footerContainer = document.getElementById('site-footer');
  if (headerContainer) headerContainer.innerHTML = headerHTML;
  if (footerContainer) footerContainer.innerHTML = footerHTML;
}

document.addEventListener('DOMContentLoaded', injectLayout);
