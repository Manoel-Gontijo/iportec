document.addEventListener('DOMContentLoaded', () => {
  navegarPorHash();
  toggleSubcategoria('Orteses');
  aplicarSaibaMais();
  inicializarFiltro();
});

const rotas = {
  'inicio': 'aba-Início',
  'produtos': 'aba-Produtos',
  'galeria': 'aba-Galeria',
  'depoimentos': 'aba-depoimentos',
  'contato': 'aba-Contato',
  'quemsomos': 'aba-Quem Somos'
};

function navegarPorHash() {
  const hash = location.hash.replace('#', '').toLowerCase();
  const idAba = rotas[hash] || 'aba-Início';
  mostrarAba(idAba);
}

function mostrarAba(id) {
  document.querySelectorAll('.aba').forEach(sec => sec.classList.remove('ativa'));
  const alvo = document.getElementById(id);
  if (alvo) alvo.classList.add('ativa');
}

function toggleSubcategoria(nome) {
  document.querySelectorAll('.categoria-produto').forEach(div => div.style.display = 'none');
  const div = document.getElementById('categoria-' + nome);
  if (div) div.style.display = 'grid';
  inicializarFiltro(); // aplica filtro/paginação após troca
}

function aplicarSaibaMais() {
  document.querySelectorAll('.card').forEach(card => {
    const p = card.querySelector('p');
    if (!p) return;

    const textoCompleto = p.innerText.trim();
    if (textoCompleto.length <= 120) return; // não precisa truncar

    const textoResumo = textoCompleto.slice(0, 120).trim() + '...';

    const spanTexto = document.createElement('span');
    spanTexto.textContent = textoResumo;

    const botao = document.createElement('button');
    botao.textContent = 'Saiba mais';
    botao.classList.add('botao-padrao', 'botao-saiba-mais');

    let expandido = false;

    botao.addEventListener('click', () => {
      expandido = !expandido;
      spanTexto.textContent = expandido ? textoCompleto : textoResumo;
      botao.textContent = expandido ? 'Saiba menos' : 'Saiba mais';
    });

    p.innerHTML = '';
    p.appendChild(spanTexto);
    card.appendChild(botao);
  });
}


function inicializarFiltro() {
  const select = document.getElementById('filtroQtd');
  if (!select) return;
  select.removeEventListener('change', aplicarPaginacao);
  select.addEventListener('change', aplicarPaginacao);
  aplicarPaginacao();
}

function aplicarPaginacao() {
  const qtd = parseInt(document.getElementById('filtroQtd').value) || 10;
  document.querySelectorAll('.categoria-produto').forEach(container => {
    if (getComputedStyle(container).display === 'none') return;

    const produtos = Array.from(container.querySelectorAll('.card'));
    const totalPaginas = Math.ceil(produtos.length / qtd);

    const anterior = container.parentNode.querySelector('.paginacao');
    if (anterior) anterior.remove();

    const paginacao = document.createElement('div');
    paginacao.className = 'paginacao';
    paginacao.style.textAlign = 'center';
    paginacao.style.margin = '20px auto';

    function mostrarPagina(pagina) {
      const inicio = (pagina - 1) * qtd;
      const fim = inicio + qtd;
      produtos.forEach((p, i) => {
        p.style.display = (i >= inicio && i < fim) ? 'flex' : 'none';
      });
      paginacao.querySelectorAll('button').forEach((btn, idx) => {
        btn.disabled = (idx + 1) === pagina;
      });
    }

    for (let i = 1; i <= totalPaginas; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.classList.add('botao-padrao');
      btn.addEventListener('click', () => mostrarPagina(i));
      paginacao.appendChild(btn);
    }

    container.parentNode.appendChild(paginacao);
    mostrarPagina(1);
  });
}

// Detectar mudança na URL (hash)
window.addEventListener('hashchange', () => {
  const hash = location.hash.replace('#', '').toLowerCase();
  const idAba = rotas[hash] || 'aba-Início';
  mostrarAba(idAba);
});

// Quando a página carrega, já exibe a aba correta pelo hash
window.addEventListener('load', () => {
  const hash = location.hash.replace('#', '').toLowerCase();
  const idAba = rotas[hash] || 'aba-Início';
  mostrarAba(idAba);
});


function abrirModal(src) {
  const modal = document.getElementById("modalImagem");
  const img = document.getElementById("imagemAmpliada");
  img.src = src;
  modal.style.display = "block";
}

function fecharModal() {
  document.getElementById("modalImagem").style.display = "none";
}

// Fecha o modal ao clicar fora da imagem
window.onclick = function(event) {
  const modal = document.getElementById("modalImagem");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

