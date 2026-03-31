# ROCKEST — Guia de Edição do Site

## Estrutura de arquivos

```
rockest/
├── index.html              ← Página inicial
├── images/
│   └── logo.png            ← Logo da marca
├── css/
│   └── style.css           ← Todo o estilo visual do site
├── js/
│   ├── products.js         ← ⭐ CATÁLOGO DE PRODUTOS (edite aqui)
│   ├── layout.js           ← Header e footer compartilhados
│   ├── main.js             ← Funções gerais (nav, animações)
│   ├── home.js             ← Lógica da página inicial
│   ├── catalogo.js         ← Lógica do catálogo com filtros
│   └── produto.js          ← Lógica da página de produto
└── pages/
    ├── catalogo.html       ← Página do catálogo
    ├── produto.html        ← Página de produto individual
    ├── sobre.html          ← Página Sobre
    └── contato.html        ← Página de contato
```

---

## Como adicionar ou editar produtos

Abra o arquivo `js/products.js` e edite o array `PRODUCTS`.

Cada produto tem esta estrutura:

```js
{
  id: 'identificador-unico',        // Use letras minúsculas e hífens
  category: 'camisetas',            // camisetas | moletons | acessorios
  badge: 'Novo',                    // Deixe '' para sem badge
  name: 'Nome do Produto',
  price: 'R$ 99,90',
  priceNum: 99.90,
  image: 'URL ou caminho da imagem',
  shortDesc: 'Descrição curta (exibida no card)',
  description: 'Descrição completa (exibida na página do produto)',
  features: [
    'Característica 1',
    'Característica 2',
  ],
  shopeeUrl: 'https://shopee.com.br/SEU-LINK-AFILIADO',
}
```

---

## Como trocar imagens

**Opção 1 — URL externa:**
```js
image: 'https://url-da-sua-imagem.com/foto.jpg',
```

**Opção 2 — Imagem local:**
1. Coloque a imagem na pasta `images/`
2. Use o caminho relativo no campo `image`:
```js
// Para produtos (nas páginas em /pages/):
image: '../images/nome-da-imagem.jpg',
```

---

## Como ativar os links da Shopee

Substitua os valores de `shopeeUrl` pelos seus links reais de afiliado:

```js
shopeeUrl: 'https://s.shopee.com.br/SEU_CODIGO_AFILIADO',
```

---

## Como ativar o formulário de contato

Abra `pages/contato.html` e substitua o listener do form pelo serviço de sua escolha:

- **Formspree:** `<form action="https://formspree.io/f/SEU_ID" method="POST">`
- **Netlify Forms:** adicione `netlify` ao `<form>`
- **EmailJS:** integre via JS

---

## Como trocar cores e fontes

Abra `css/style.css` e edite as variáveis no topo:

```css
:root {
  --gold:  #c9a84c;    /* Cor dourada principal */
  --black: #0a0a0a;    /* Fundo escuro */
  --white: #f0ece4;    /* Texto claro */
  --red:   #8b1a1a;    /* Vermelho de destaque */
}
```

---

## Como atualizar redes sociais e e-mail

Edite `pages/contato.html` — busque pelos comentários:
```html
<!-- SUBSTITUA pelos links reais das suas redes -->
<!-- SUBSTITUA pelo seu e-mail -->
```

---

## Categorias de produto disponíveis

| Valor no código | Rótulo exibido |
|----------------|----------------|
| `camisetas`    | Camisetas       |
| `moletons`     | Moletons        |
| `acessorios`   | Acessórios      |

Para adicionar uma nova categoria, basta usar o novo valor no campo `category` e adicionar o rótulo no objeto `labels` dentro de `js/catalogo.js`.
