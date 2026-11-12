// Pages d'étude de cas : thème et langue repris du portfolio
(function(){
  var h=document.documentElement, L=null;
  try{ if(localStorage.getItem('iak-theme')==='light') h.classList.add('light'); L=localStorage.getItem('iak-lang'); }catch(e){}
  if(L!=='fr'&&L!=='en') L=/^fr/i.test(navigator.language||'fr')?'fr':'en';
  if(L==='en'){
    h.lang='en';
    document.querySelectorAll('[data-en]').forEach(function(el){ el.textContent=el.getAttribute('data-en'); });
    var t=document.querySelector('h1'); if(t) document.title=t.textContent+' · Issa Aziz KARAMBIRI';
  }
})();
