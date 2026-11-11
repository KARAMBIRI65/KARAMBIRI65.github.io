// Portfolio d'Issa Aziz KARAMBIRI : interactions (filtres, animations, assistant)
(function(){
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function rng(seed){ return function(){ seed = (seed*16807) % 2147483647; return (seed-1)/2147483646; }; }
  function gauss(r){ var u=r()||1e-9, v=r(); return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v); }

  // Filters
  var btns=document.querySelectorAll('.filters button'), cards=document.querySelectorAll('#grid .card');
  btns.forEach(function(b){ b.addEventListener('click',function(){
    var f=b.dataset.f;
    btns.forEach(function(x){ x.setAttribute('aria-pressed', x===b ? 'true':'false'); });
    cards.forEach(function(c){
      c.hidden = !(f==='all' || c.dataset.dom===f);
      c.classList.toggle('feat', f==='all' && c.dataset.feat==='1');
    });
  }); });

  // Card spotlight
  cards.forEach(function(c){
    c.addEventListener('pointermove',function(e){ var b=c.getBoundingClientRect(); c.style.setProperty('--cx',(e.clientX-b.left)+'px'); c.style.setProperty('--cy',(e.clientY-b.top)+'px'); });
  });

  // Hero signals canvas
  var hero=document.querySelector('.hero'), cv=document.getElementById('signals'), ctx=cv.getContext('2d');
  hero.addEventListener('pointermove',function(e){ var b=hero.getBoundingClientRect(); hero.style.setProperty('--mx',(e.clientX-b.left)+'px'); hero.style.setProperty('--my',(e.clientY-b.top)+'px'); });
  var W,H,dpr, series=[], r=rng(42), step=7;
  function makeSeries(){
    var count=Math.ceil(W/step)+4, lines=[{c:'91,140,255',a:.55,vol:.018,s:[]},{c:'180,140,255',a:.32,vol:.022,s:[]},{c:'53,211,154',a:.26,vol:.013,s:[]},{c:'242,184,75',a:.22,vol:.02,s:[]}];
    lines.forEach(function(l,k){ var v=0.6-k*0.1; for(var i=0;i<count;i++){ v+= l.vol*gauss(r) + (0.5-v)*0.02; l.s.push(v);} });
    series=lines;
  }
  function size(){ dpr=Math.min(window.devicePixelRatio||1,2); W=hero.clientWidth; H=hero.clientHeight; cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); makeSeries(); draw(0); }
  function draw(off){
    ctx.clearRect(0,0,W,H);
    ctx.strokeStyle='rgba(42,52,70,.45)'; ctx.lineWidth=1;
    for(var x=0;x<W;x+=80){ ctx.beginPath(); ctx.moveTo(x+.5,0); ctx.lineTo(x+.5,H); ctx.stroke(); }
    for(var y=0;y<H;y+=80){ ctx.beginPath(); ctx.moveTo(0,y+.5); ctx.lineTo(W,y+.5); ctx.stroke(); }
    series.forEach(function(l){
      ctx.beginPath();
      l.s.forEach(function(v,i){ var px=i*step-off, py=H*(1-v); i?ctx.lineTo(px,py):ctx.moveTo(px,py); });
      ctx.strokeStyle='rgba('+l.c+','+l.a+')'; ctx.lineWidth=1.6; ctx.stroke();
      ctx.lineTo(W+step,H); ctx.lineTo(-step,H); ctx.closePath();
      var g=ctx.createLinearGradient(0,0,0,H); g.addColorStop(0,'rgba('+l.c+','+(l.a*.16)+')'); g.addColorStop(1,'rgba('+l.c+',0)'); ctx.fillStyle=g; ctx.fill();
    });
  }
  var off=0, last=0;
  function loop(t){
    if(!last) last=t; off+=(t-last)*0.02; last=t;
    while(off>=step){ off-=step; series.forEach(function(l){ var v=l.s[l.s.length-1]; v+=l.vol*gauss(r)+(0.5-v)*0.02; l.s.push(v); l.s.shift(); }); }
    draw(off); requestAnimationFrame(loop);
  }
  size(); window.addEventListener('resize',size);
  if(!reduce) requestAnimationFrame(loop);

  // Portfolio assistant: answers from Issa's profile, entirely in the browser
  var GH='https://github.com/KARAMBIRI65/';
  function repo(n){ return '<a href="'+GH+n+'" target="_blank" rel="noopener">voir le projet sur GitHub</a>'; }
  var MAIL='<b>issaaziz.karambiri@ensiie.eu</b>';
  var KB=[
    {k:['bonjour','salut','hello','bonsoir','coucou','hey'],a:"Bonjour ! Je suis l'assistant d'Issa. Demandez-moi son parcours, ses projets, ses expériences ou comment le contacter."},
    {g:1,k:['qui','presente','presentation','profil','resume','toi','lui','issa'],a:"Issa Aziz KARAMBIRI est élève ingénieur en 2<sup>e</sup> année (Master 1) à l'ENSIIE, en mathématiques appliquées et informatique, orientées data, IA et finance. Il a fait deux stages au Maroc et publié des projets de data science dans de nombreux secteurs : aéronautique, environnement, santé, sport, immobilier, cybersécurité, banque et marchés."},
    {k:['ecole','ensiie','etudes','etudie','formation','cursus','diplome','annee','master','cours','modules','matieres'],a:"Il est en 2<sup>e</sup> année du cycle ingénieur à l'ENSIIE (Évry-Courcouronnes) depuis septembre 2025, soit un Master 1. Ses cours : probabilités, processus stochastiques, optimisation, recherche opérationnelle, machine learning, deep learning et bases de données SQL et NoSQL. Avant cela, DUT Technologique à l'École Supérieure de Technologie d'Oujda (2023-2025), mention Très Bien."},
    {g:1,k:['parcours','pays','maroc','france','international'],a:"Son parcours est international : il a obtenu un DUT Technologique à l'École Supérieure de Technologie d'Oujda au Maroc (mention Très Bien), puis a rejoint l'ENSIIE en France. Il a l'habitude de s'adapter vite à de nouveaux environnements."},
    {k:['dut','mention','oujda'],a:"Il a obtenu un DUT Technologique à l'École Supérieure de Technologie d'Oujda (2023-2025), avec la mention Très Bien."},
    {k:['experience','experiences','stages','entreprise','travail','travaille','professionnel','entsi'],a:"Deux stages chez ENTSI à Oujda : stagiaire data science sur <b>OptiTrade</b> (mars-mai 2025), une application d'aide à l'investissement, et stagiaire développeur web sur <b>GESCOM</b> (juin-juillet 2024), une application de gestion commerciale."},
    {k:['optitrade','investissement','bourse','boursier','conseil'],a:"OptiTrade est une application web d'aide à l'investissement, construite pendant son stage de data science (mars-mai 2025). Il a nettoyé 300 000 lignes boursières (246 437 gardées), comparé 4 modèles (régression linéaire, Random Forest, XGBoost, LSTM) pour conseiller d'acheter, vendre ou garder une action, avec Python, Django REST, React et PostgreSQL."},
    {k:['gescom','gestion','commerciale','php','web','developpeur'],a:"GESCOM est une application de gestion commerciale (clients, produits, ventes, achats, rôles utilisateurs) qu'il a développée en stage en PHP, MySQL, Bootstrap et jQuery. Il a aussi optimisé les requêtes SQL les plus lentes."},
    {k:['vigie','arnaque','arnaques','senior','seniors','cyber','cybersecurite','phishing','hameconnage','challenge','entreprendre','sms'],a:"VIGIE est un assistant anti-arnaques pour les seniors, créé en 4 jours pendant le Challenge Projet avec 5 étudiants de 3 écoles (ENSIIE, Télécom SudParis, IMT-BS). Il repère les messages frauduleux, alerte avant le clic, explique le danger simplement et prévient un proche si le risque est élevé. Issa était responsable technique et prototypage : code de l'application, détection des liens frauduleux et écrans lisibles pour une personne de 74 ans."},
    {g:1,k:['projet','projets','realisation','realisations','portfolio','travaux','fait'],a:"Ses projets couvrent : maintenance prédictive de moteurs d'avion, prévision des crues, VIGIE (anti-arnaques), détection de déchets par vision, dépistage du diabète, prédiction de matchs de football, analyse de parcelles, détection de fraude, scoring de crédit, segmentation de clients, volatilité du CAC 40, optimisation de portefeuille et analyse de sentiment. Demandez-moi l'un d'eux."},
    {k:['fier','meilleur','prefere','phare','principal','impressionnant'],a:"Son projet phare est la maintenance prédictive des moteurs d'avion : sur les données NASA, il détecte 25 pannes imminentes sur 25, avec seulement 5 fausses alertes sur 75 moteurs sains. "+repo('maintenance-predictive-moteurs-avion')},
    {k:['avion','moteur','aeronautique','maintenance','panne','nasa','industrie'],a:"Maintenance prédictive : à partir des capteurs d'un turboréacteur, le modèle (XGBoost) prévoit le nombre de vols restants avant la panne, avec une erreur typique de 11 vols, et déclenche l'inspection au bon moment. Résultat : 25 pannes imminentes détectées sur 25. "+repo('maintenance-predictive-moteurs-avion')},
    {k:['crue','crues','inondation','riviere','meteo','climat','eau'],a:"Prévision des crues : un système d'alerte sur 19 rivières françaises et 20 ans de données (INRAE, Météo-France). Il annonce 79 % des crues, en moyenne 2,4 jours à l'avance. "+repo('prevision-crues-france')},
    {k:['dechet','dechets','plage','plages','yolo','yolov8','vision','image','images','opencv','detection objets'],a:"Détection de déchets sur les plages : il a annoté des images à la main (6 classes), augmenté les données, puis entraîné YOLOv8 (PyTorch) sur GPU. Résultat : 89,5 % de F1-score. Le point faible restant : les petits objets."},
    {k:['diabete','sante','medical','medecine','patient','maladie'],a:"Dépistage du diabète de type 2 : le modèle détecte 87 % des malades, contre 46 % pour la règle clinique fondée sur la seule glycémie, et explique chaque prédiction avec SHAP. "+repo('depistage-diabete')},
    {k:['foot','football','match','sport','elo','pronostic'],a:"Prédiction de matchs de football : une application Streamlit entraînée sur 28 900 matchs des 5 grands championnats. Quand le modèle est sûr à plus de 75 %, il a raison 83 % du temps. "+repo('prediction-matchs-football')},
    {k:['parcelle','terrain','immobilier','construire','foncier','plu'],a:"Analyse de parcelles : un outil qui dit s'il faut acheter, négocier ou éviter un terrain. Sur 1 200 parcelles test, c'est la seule stratégie rentable (+1,6 M€), avec une AUC de 0,92 pour la constructibilité. "+repo('analyse-parcelles')},
    {k:['fraude','fraudes','carte','transaction'],a:"Détection de fraude bancaire : avec seulement 0,17 % de fraudes dans les données, le modèle XGBoost réduit les pertes de 77 % et 87 % de ses alertes sont justes. "+repo('detection-fraude-bancaire')},
    {k:['credit','scoring','defaut','pret'],a:"Scoring de crédit : une application web qui estime le risque de défaut, décide, explique la décision avec SHAP et propose des scénarios « et si ». Elle divise par 3 le coût des erreurs par rapport à « tout accepter ». "+repo('scoring-credit-app')},
    {k:['segmentation','segment','clustering','kmeans','marketing','clients'],a:"Segmentation de clients bancaires : 41 188 clients répartis en 5 segments avec K-means. Résultat : 20 % d'appels en moins pour seulement 8 % de souscriptions perdues. "+repo('segmentation-clients-bancaires')},
    {k:['volatilite','garch','lstm','cac'],a:"Volatilité du CAC 40 : comparaison de cinq modèles (naïf, HAR, GARCH, GJR-GARCH et un réseau LSTM) sur 20 ans de données, puis application au calcul de la VaR. "+repo('volatilite-cac40')},
    {k:['portefeuille','markowitz','hrp','allocation','backtest','actions'],a:"Optimisation de portefeuille : Markowitz, clustering et HRP sur 32 actions du CAC 40 de 2015 à 2025, vérifiés par un backtest sans regard vers le futur, frais inclus. "+repo('optimisation-portefeuille')},
    {k:['sentiment','nlp','finbert','texte','actualite','transformers'],a:"Sentiment des actualités financières : il mesure le ton des titres de presse avec FinBERT, un modèle de langage, et teste s'il aide à prévoir les rendements boursiers. "+repo('sentiment-financier')},
    {k:['black','scholes','option','options','ocaml','sgbd','base','bases','donnees','fonctionnelle','inpf12','bas niveau','systeme','machine virtuelle'],a:"En projets d'école, il a codé le modèle de Black-Scholes en C++ (prix d'options européennes), une machine virtuelle OCaml en C (bytecode, pile, mémoire) et un mini-SGBD relationnel en OCaml : conception, implémentation et analyse d'un système de gestion de bases de données relationnelles fonctionnel (module INPF12, Informatique et Programmation Fonctionnelle, ENSIIE 1<sup>re</sup> année, 2025-2026)."},
    {g:1,k:['finance','financier','banque','marche','marches','trading','quant'],a:"La finance est un de ses points forts : OptiTrade en stage, la fraude, le crédit, la segmentation, la volatilité, le portefeuille, le sentiment et Black-Scholes. Mais son profil est plus large : il applique la data science à l'industrie, la santé, l'environnement, la cybersécurité, le sport et l'immobilier."},
    {g:1,k:['competence','competences','skills','outils','technologie','technologies','python','sql','maitrise','stack','langages'],a:"Langages : Python, SQL, C++, C, R, OCaml, Java, PHP. Data et IA : pandas, NumPy, scikit-learn, XGBoost, TensorFlow, PyTorch, YOLOv8, OpenCV. Outils : PostgreSQL, Django, React, Streamlit, Git, Jupyter, Colab, Power BI, Excel."},
    {k:['langue','langues','anglais','english','francais','parle'],a:"Français (langue maternelle) et anglais B2."},
    {g:1,k:['ia','intelligence','machine','learning','deep','modele','modeles','algorithme'],a:"En IA, il utilise XGBoost, les forêts aléatoires et la régression logistique, des réseaux de neurones (LSTM, YOLOv8 avec PyTorch et TensorFlow) et des modèles de langage (FinBERT). Il explique toujours ses modèles avec SHAP, pour que les décisions soient compréhensibles."},
    {k:['stage','alternance','emploi','job','recrute','disponible','disponibilite','cherche','recherche','embaucher','quand','mai','2027','apprendre','motivation','motive'],a:"Il cherche un stage de 3 à 4 mois à partir de mai 2027, en data science, data analyse, data engineering ou finance. Il le dit franchement : il n'a pas encore une longue expérience professionnelle, et c'est justement pour ça qu'il veut rejoindre une équipe exigeante, apprendre à son contact et prendre des responsabilités au fil du stage. Contact : "+MAIL+" ou +33 7 61 20 07 82."},
    {k:['pourquoi','atout','atouts','qualites','force','forces','difference','valeur'],a:"Son premier atout, c'est l'envie d'apprendre : il pose des questions, essaie, se trompe parfois et progresse vite. Ses projets le montrent : il raisonne en impact métier (pannes évitées, malades détectés, euros économisés), il explique ses modèles, et il sait livrer, seul comme en équipe (VIGIE construit en 4 jours avec 3 écoles)."},
    {k:['association','engagement','benevole','yitu','aebm','leadership','responsabilite'],a:"Il est ambassadeur bénévole de YITU Association en France depuis 2026 : lutte contre la précarité étudiante, soutien scolaire et ateliers CV. Site de l'association : <a href='https://www.yituassociation.org' target='_blank' rel='noopener'>yituassociation.org</a>. Au Maroc, il était chargé académique de l'AEBM (2024-2025), où il coordonnait les activités académiques."},
    {k:['contact','contacter','email','mail','joindre','ecrire','linkedin','telephone','numero','appeler','tel','portable'],a:"Écrivez-lui à "+MAIL+" ou appelez-le au <b>+33 7 61 20 07 82</b>. Il est aussi sur <a href='https://www.linkedin.com/in/karambiri-ma' target='_blank' rel='noopener'>LinkedIn</a> et ses projets sont sur <a href='https://github.com/KARAMBIRI65' target='_blank' rel='noopener'>GitHub</a>."},
    {k:['adresse','habite','vit','ville','evry','localisation','situe','region','paris','ile'],a:"Il habite à Évry-Courcouronnes (91000), en Île-de-France, près de son école, l'ENSIIE."},
    {k:['github','code','depot','source'],a:"Son code est public sur <a href='https://github.com/KARAMBIRI65' target='_blank' rel='noopener'>github.com/KARAMBIRI65</a> : un dépôt par projet, avec un README et un notebook."},
    {k:['lettre','candidature','ouverte','entreprise ideale','attentes','attend'],a:"Issa a écrit une lettre ouverte, plus haut sur cette page : il cherche une entreprise où il pourra évoluer et se dépasser, avec une équipe exigeante qui lui confie de vrais sujets. Son parcours international et son engagement associatif lui ont appris à s'adapter et à prendre des responsabilités, et il veut à terme entraîner une équipe."},
    {k:['merci','super','top','genial','parfait'],a:"Avec plaisir ! N'hésitez pas si vous avez d'autres questions sur Issa."}
  ];
  var FALLBACK="Je n'ai pas cette information. Je réponds sur le parcours d'Issa, ses projets, ses compétences, son engagement et sa recherche de stage. Pour le reste, écrivez-lui directement à <b>issaaziz.karambiri@ensiie.eu</b>.";
  var SUGG=['Qui es-tu ?','Tes expériences ?','C’est quoi VIGIE ?','Tu cherches un stage ?','Pourquoi te recruter ?','Tes compétences ?'];
  function norm(t){ return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9 ]/g,' '); }
  function answer(q){
    var n=' '+norm(q).replace(/\s+/g,' ')+' ', best=null, bs=0;
    KB.forEach(function(it,idx){
      var sc=0;
      it.k.forEach(function(w){ if(n.indexOf(' '+w+' ')>-1) sc+=it.g?1:2; else if(w.length>4 && n.indexOf(w)>-1) sc+=it.g?.5:1; });
      if(idx===0 && n.trim().split(' ').length>3) sc=Math.min(sc,1);
      if(sc>bs){ bs=sc; best=it; }
    });
    return best ? best.a : FALLBACK;
  }
  var bot=document.getElementById('bot'), fab=document.getElementById('bot-open'), log=document.getElementById('bot-log'), inp=document.getElementById('bot-in'), sugg=document.getElementById('bot-sugg');
  function add(html,who){ var d=document.createElement('div'); d.className='msg '+who; if(who==='me') d.textContent=html; else d.innerHTML=html; log.appendChild(d); log.scrollTop=log.scrollHeight; return d; }
  function ask(q){
    q=q.trim(); if(!q) return;
    add(q,'me'); inp.value='';
    var t=add('…','it typing');
    setTimeout(function(){ t.remove(); add(answer(q),'it'); }, reduce?0:450);
  }
  SUGG.forEach(function(s){ var b=document.createElement('button'); b.type='button'; b.textContent=s; b.addEventListener('click',function(){ ask(s); }); sugg.appendChild(b); });
  var greeted=false;
  function open(){ bot.hidden=false; fab.hidden=true; if(!greeted){ add("Bonjour ! Je suis l'assistant d'Issa. Posez-moi une question sur son parcours, ses projets ou ses compétences.",'it'); greeted=true; } inp.focus(); }
  function close(){ bot.hidden=true; fab.hidden=false; fab.focus(); }
  fab.addEventListener('click',open);
  document.getElementById('bot-close').addEventListener('click',close);
  document.addEventListener('keydown',function(e){ if(e.key==='Escape' && !bot.hidden) close(); });
  document.getElementById('bot-form').addEventListener('submit',function(e){ e.preventDefault(); ask(inp.value); });

  // Scroll progress
  var prog=document.getElementById('progress');
  function onScroll(){ var h=document.documentElement; var m=h.scrollHeight-h.clientHeight; prog.style.transform='scaleX('+(m>0?h.scrollTop/m:0)+')'; }
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();

  // Role scramble
  var roles=['data scientist','ingénieur IA','analyste quantitatif','ML engineer','problem solver'], ri=0, roleEl=document.getElementById('role');
  var glyphs='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=<>';
  function scrambleTo(txt){
    var from=roleEl.textContent, len=Math.max(from.length,txt.length), frame=0, total=22;
    (function tickS(){
      var out='';
      for(var i=0;i<len;i++){
        var p=frame/total, reveal=i/len;
        if(p>reveal+0.25) out+=txt[i]||''; else if(p>reveal) out+=glyphs[Math.floor(Math.random()*glyphs.length)]; else out+=from[i]||'';
      }
      roleEl.textContent=out; frame++;
      if(frame<=total+8) requestAnimationFrame(tickS); else roleEl.textContent=txt;
    })();
  }
  if(!reduce) setInterval(function(){ ri=(ri+1)%roles.length; scrambleTo(roles[ri]); },2800);

  // Portrait tilt
  var por=document.getElementById('portrait');
  if(!reduce && window.matchMedia('(pointer:fine)').matches){
    por.addEventListener('pointermove',function(e){ var b=por.getBoundingClientRect(), x=(e.clientX-b.left)/b.width-.5, y=(e.clientY-b.top)/b.height-.5; por.style.transform='rotateY('+(x*14)+'deg) rotateX('+(-y*14)+'deg)'; });
    por.addEventListener('pointerleave',function(){ por.style.transform=''; });
    // Magnetic buttons
    document.querySelectorAll('.magnetic').forEach(function(m){
      m.addEventListener('pointermove',function(e){ var b=m.getBoundingClientRect(); m.style.transform='translate('+((e.clientX-b.left-b.width/2)*.25)+'px,'+((e.clientY-b.top-b.height/2)*.35)+'px)'; });
      m.addEventListener('pointerleave',function(){ m.style.transform=''; });
    });
  }

  // Copy phone
  document.getElementById('copy-tel').addEventListener('click',function(){
    var b=this, el=document.getElementById('tel');
    function sel(){ var rg=document.createRange(); rg.selectNodeContents(el); var s=getSelection(); s.removeAllRanges(); s.addRange(rg); b.textContent='Numéro sélectionné'; }
    try{ navigator.clipboard.writeText('+33761200782').then(function(){ b.textContent='Copié ✓'; setTimeout(function(){b.textContent='Copier le numéro';},1800); }, sel); }catch(e){ sel(); }
  });

  // Copy e-mail
  document.getElementById('copy-mail').addEventListener('click',function(){
    var b=this, el=document.getElementById('mail');
    function sel(){ var rg=document.createRange(); rg.selectNodeContents(el); var s=getSelection(); s.removeAllRanges(); s.addRange(rg); b.textContent='Adresse sélectionnée'; }
    try{ navigator.clipboard.writeText(el.textContent).then(function(){ b.textContent='Copiée ✓'; setTimeout(function(){b.textContent="Copier l'adresse";},1800); }, sel); }catch(e){ sel(); }
  });
})();
