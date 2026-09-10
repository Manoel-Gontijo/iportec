(function(){
 const c=window.IPORTEC_CONFIG,page=document.body.dataset.page;
 const clean=v=>String(v??"");
 const safe=v=>clean(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
 const pending=v=>clean(v).startsWith("PENDENTE");
 const show=(el,value)=>{if(!el)return;el.textContent=clean(value);el.classList.toggle('pending',pending(value))};
 const title=(el,value,words=1)=>{if(!el)return;const t=clean(value).trim();el.classList.toggle('pending',pending(t));if(!t||pending(t)){el.textContent=t;return}const parts=t.split(/\s+/),n=Math.min(words,parts.length),plain=parts.slice(0,-n).join(' '),accent=parts.slice(-n).join(' ');el.innerHTML=(plain?safe(plain)+' ':'')+'<em>'+safe(accent)+'</em>'};
 const wa="https://wa.me/"+clean(c.empresa.whatsapp).replace(/\D/g,"")+"?text="+encodeURIComponent("Olá, vim pelo site da IPORTEC e gostaria de marcar uma avaliação.");
 document.querySelectorAll(".whatsapp").forEach(a=>a.href=wa);
 const waIcon='<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M19.11 17.37c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.18-.43-2.24-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.54c-.19 0-.49.07-.75.35-.26.28-.99.97-.99 2.36s1.01 2.74 1.15 2.93c.14.19 1.99 3.04 4.82 4.26.67.29 1.2.46 1.61.59.68.22 1.29.19 1.78.11.54-.08 1.66-.68 1.9-1.34.23-.66.23-1.22.16-1.34-.07-.12-.26-.19-.54-.33zM16.03 3.2c-7.08 0-12.84 5.75-12.84 12.82 0 2.26.59 4.47 1.7 6.41L3.08 29l6.73-1.76a12.82 12.82 0 006.21 1.58h.01c7.08 0 12.84-5.75 12.84-12.82S23.11 3.2 16.03 3.2zm0 23.46h-.01a10.66 10.66 0 01-5.43-1.49l-.39-.23-3.99 1.05 1.07-3.89-.25-.4a10.62 10.62 0 01-1.63-5.68c0-5.87 4.78-10.65 10.66-10.65 2.85 0 5.52 1.11 7.53 3.12a10.57 10.57 0 013.12 7.53c0 5.87-4.79 10.64-10.67 10.64z"/></svg>';
 document.getElementById("header").innerHTML='<div class="top top14"><div class="top14-left"><span>⌖ '+safe(c.empresa.endereco||c.empresa.cidade)+'</span><span>☎ '+safe(c.empresa.telefone||"")+'</span><span>◷ Seg a Sex: atendimento em horário comercial</span></div><a href="https://www.instagram.com/iportecortopediatecnica/" target="_blank" rel="noopener">Instagram ↗</a></div><header class="header14"><button class="menuButton" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobileNav"></button><a class="logo" href="index.html"><img src="assets/img/logo-iportec.jpg" alt="IPORTEC Próteses e Órteses"></a><nav><a data-nav="home" href="index.html">Início</a><a href="index.html#quem-somos">Quem somos</a><a data-nav="proteses" href="proteses.html">Próteses</a><a data-nav="orteses" href="orteses.html">Órteses</a><a data-nav="galeria" href="galeria.html">Galeria</a><a href="index.html#localizacao">Localização</a></nav><a class="btn small whatsapp headerWa" href="'+wa+'" aria-label="Agendar atendimento pelo WhatsApp">'+waIcon+'<span>Agendar avaliação</span></a></header><div class="mobileNavBackdrop" aria-hidden="true"></div><div class="mobileNav" id="mobileNav" aria-label="Menu principal"><a href="index.html">Início</a><a href="index.html#quem-somos">Quem somos</a><a href="proteses.html">Próteses</a><a href="orteses.html">Órteses</a><a href="galeria.html">Galeria</a><a href="index.html#localizacao">Localização</a><a class="mobileWa" href="'+wa+'">'+waIcon+' Falar no WhatsApp</a></div>';
 document.querySelectorAll('[data-nav=\"'+page+'\"]').forEach(a=>{a.classList.add('active');a.setAttribute('aria-current','page')});
 if(!c.empresa.whatsapp||c.empresa.whatsapp==="5537999999999")document.getElementById("header").insertAdjacentHTML("afterbegin",'<div class="draftNotice">⚠ SITE EM PREENCHIMENTO — WhatsApp e informações em vermelho precisam ser editados no painel.</div>');
 const menu=document.querySelector(".menuButton"),mobile=document.querySelector(".mobileNav"),backdrop=document.querySelector(".mobileNavBackdrop");
 const closeMenu=()=>{if(!menu||!mobile)return;mobile.classList.remove("open");document.body.classList.remove("menuOpen");menu.setAttribute("aria-expanded","false");menu.setAttribute("aria-label","Abrir menu")};
 const toggleMenu=()=>{const open=!mobile.classList.contains("open");mobile.classList.toggle("open",open);document.body.classList.toggle("menuOpen",open);menu.setAttribute("aria-expanded",String(open));menu.setAttribute("aria-label",open?"Fechar menu":"Abrir menu")};
 if(menu){menu.onclick=toggleMenu;backdrop.onclick=closeMenu;mobile.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));document.addEventListener("keydown",e=>{if(e.key==="Escape")closeMenu()});window.addEventListener("resize",()=>{if(innerWidth>900)closeMenu()})};
 document.getElementById("footer").innerHTML='<footer class="footer14"><div class="footerBrand"><img src="assets/img/logo-iportec.jpg" alt="IPORTEC"><p>'+safe(c.empresa.chamada)+'</p></div><div class="footerNav"><a href="index.html">Início</a><a href="index.html#quem-somos">Quem somos</a><a href="proteses.html">Próteses</a><a href="orteses.html">Órteses</a><a href="galeria.html">Galeria</a><a href="index.html#localizacao">Localização</a><a href="privacidade.html">Política de Privacidade</a></div><span id="footerContact"></span><small>© 2026 IPORTEC. Todos os direitos reservados.</small></footer><a class="floatWa" href="'+wa+'" aria-label="Fale conosco pelo WhatsApp">'+waIcon+'<span class="waLabel"><b>Fale conosco</b><small>pelo WhatsApp</small></span></a>';
 const footer=document.getElementById("footerContact");if(footer){footer.innerHTML='<span>'+safe(c.empresa.endereco||c.empresa.cidade)+'</span><br><span>'+safe(c.empresa.telefone||'')+'</span>'+(c.empresa.email&&!pending(c.empresa.email)?'<br><span>'+safe(c.empresa.email)+'</span>':'');} 
 if(c.seo){if(c.seo.tituloHome&&page==='home')document.title=c.seo.tituloHome;const md=document.querySelector('meta[name=description]');if(md&&c.seo.descricaoHome&&page==='home')md.setAttribute('content',c.seo.descricaoHome);}
 if(page==='home'&&document.getElementById('testimonials')){const items=(c.depoimentos||[]).filter(x=>x.ativo);const box=document.getElementById('testimonials');box.innerHTML=items.map(x=>'<article><span>“</span><p>'+safe(x.texto)+'</p><strong>'+safe(x.nome)+'</strong></article>').join('');document.getElementById('testimonialsSection').hidden=!items.length;}
 if(page==="home"&&c.inicio){
  const hero=document.querySelector(".hero>div"),heads=document.querySelectorAll(".heading"),journey=document.querySelector(".journey"),cta=document.querySelector(".cta");
  // V13: o hero aprovado é uma composição em imagem; só atualiza o hero textual quando ele existir.
  if(hero){
    show(hero.querySelector('.tag'),c.inicio.selo);
    title(hero.querySelector('h1'),c.inicio.titulo,1);
    show(hero.querySelector('p'),c.inicio.descricao);
    const heroBtn=hero.querySelector('.btn'); if(heroBtn) heroBtn.textContent=c.inicio.botao+' →';
  }
  if(heads[0]){ title(heads[0].querySelector('h2'),c.inicio.solucoesTitulo,2); show(heads[0].querySelector('p'),c.inicio.solucoesTexto); }
  if(journey){ show(journey.querySelector('h2'),c.inicio.jornadaTitulo); show(journey.querySelector('p'),c.inicio.jornadaTexto); }
  if(cta) show(cta.querySelector('h2'),c.inicio.ctaTitulo);
  document.querySelectorAll('[data-about]').forEach(el=>show(el,c.quemSomos[el.dataset.about]));document.querySelectorAll('[data-company]').forEach(el=>show(el,c.empresa[el.dataset.company]));
  const map=document.getElementById('mapLink');if(map)map.href=c.empresa.mapa||'#';const hours=document.getElementById('hoursList');if(hours&&Array.isArray(c.empresa.horarios))hours.innerHTML=c.empresa.horarios.map(h=>'<div><span>'+safe(h.dia)+'</span><strong>'+safe(h.horario)+'</strong></div>').join('');
  const credential=document.querySelector('.credential');if(credential&&['responsavel','formacao','equipe'].every(k=>pending(c.quemSomos[k])))credential.hidden=true;
  const locationCard=document.querySelector('.locationCard');if(locationCard&&pending(c.empresa.endereco)&&pending(c.empresa.horario)){locationCard.querySelectorAll('small,strong').forEach(el=>el.hidden=true);}
  document.getElementById("diferenciais").innerHTML=c.diferenciais.map((d,i)=>'<article><b>0'+(i+1)+'</b><h3>'+safe(d.titulo)+'</h3><p>'+safe(d.texto)+'</p></article>').join("");
  document.getElementById("homeGallery").innerHTML=(c.galeria||[]).filter(g=>g.ativo).slice(0,3).map(g=>'<a href="galeria.html"><img src="'+safe(g.imagem)+'" alt="'+safe(g.titulo)+'" loading="lazy" decoding="async"><span>'+safe(g.categoria)+'</span><strong>'+safe(g.titulo)+'</strong></a>').join("");
  if(journey&&journey.querySelector("ol")) journey.querySelector("ol").innerHTML=c.etapas.map((e,i)=>'<li><b>'+(i+1)+'</b><span><strong>'+safe(e.titulo)+'</strong>'+safe(e.texto)+'</span></li>').join("");

  const faq=document.getElementById('faqList');
  if(faq){faq.innerHTML=(c.faq||[]).map((f,i)=>'<article class="faqItem"><button type="button" aria-expanded="false" aria-controls="faq-a-'+i+'"><span>'+safe(f.pergunta)+'</span><span aria-hidden="true">+</span></button><div class="faqAnswer" id="faq-a-'+i+'">'+safe(f.resposta)+'</div></article>').join('');faq.querySelectorAll('button').forEach(b=>b.onclick=()=>{const item=b.closest('.faqItem'),open=!item.classList.contains('open');item.classList.toggle('open',open);b.setAttribute('aria-expanded',String(open))})}
 }
 if(page==="proteses"||page==="orteses"){
  const list=c[page].filter(p=>p.ativo),box=document.getElementById("lista-produtos");box.innerHTML=list.map((p,i)=>'<article><img src="'+safe((p.imagens||[p.imagem])[0])+'" alt="'+safe(p.nome)+'" loading="lazy" decoding="async"><div><span>'+safe(p.indicacao)+'</span><h3>'+safe(p.nome)+'</h3><p>'+safe(p.descricao)+'</p><small>✓ Produzido especificamente para cada cliente</small><button class="detailButton" data-detail="'+i+'">Ver detalhes e fotos →</button></div></article>').join("");
  const modal=document.createElement("div");modal.className="productModal";modal.innerHTML='<div class="modalBackdrop" data-close></div><section role="dialog" aria-modal="true" aria-labelledby="modalTitle"><button class="modalClose" data-close aria-label="Fechar">×</button><div id="modalContent"></div></section>';document.body.appendChild(modal);
  box.querySelectorAll("[data-detail]").forEach(b=>b.onclick=()=>{const p=list[b.dataset.detail],imgs=p.imagens?.length?p.imagens:[p.imagem];document.getElementById("modalContent").innerHTML='<div class="modalImages">'+imgs.map((img,i)=>'<img src="'+safe(img)+'" alt="'+safe(p.nome)+' — foto '+(i+1)+'" loading="lazy" decoding="async">').join("")+'</div><div class="modalText"><span>'+safe(p.indicacao)+'</span><h2 id="modalTitle">'+safe(p.nome)+'</h2><p>'+safe(p.descricao)+'</p><h3>Benefícios</h3><p>'+safe(p.beneficios||"")+'</p><h3>Como funciona</h3><p>'+safe(p.processo||"")+'</p><a class="btn" href="'+wa+'">Conversar pelo WhatsApp →</a></div>';modal.classList.add("open");document.body.classList.add("modalOpen")});modal.querySelectorAll("[data-close]").forEach(x=>x.onclick=()=>{modal.classList.remove("open");document.body.classList.remove("modalOpen")});
 }
 if(page==="galeria"){
  const grid=document.getElementById("galeria"),empty=document.querySelector(".emptyGallery"),items=(c.galeria||[]).filter(g=>g.ativo);function draw(filter){const shown=filter==="Todos"?items:items.filter(g=>g.categoria===filter);grid.innerHTML=shown.map(g=>'<figure><img src="'+safe(g.imagem)+'" alt="'+safe(g.titulo)+'" loading="lazy"><figcaption><span>'+safe(g.categoria)+'</span><h2>'+safe(g.titulo)+'</h2><p class="'+(pending(g.descricao)?'pending':'')+'">'+safe(g.descricao)+'</p></figcaption></figure>').join("");empty.hidden=shown.length>0}draw("Todos");document.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-filter]").forEach(x=>x.classList.remove("active"));b.classList.add("active");draw(b.dataset.filter)})
 }
})();


// V11: animações suaves de entrada e microinterações compatíveis com Bootstrap
document.addEventListener('DOMContentLoaded',()=>{
  document.body.classList.add('jsReveal');
  const revealEls=[...document.querySelectorAll('.reveal')];
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target)}}),{threshold:.10,rootMargin:'0px 0px -45px 0px'});
    revealEls.forEach(el=>io.observe(el));
  }else revealEls.forEach(el=>el.classList.add('in-view'));
});
