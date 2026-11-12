// Portfolio d'Issa Aziz KARAMBIRI : interactions (filtres, animations, assistant)
(function(){
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Language (FR / EN)
  var LANG=window.IAK_LANG==='en'?'en':'fr', langHooks=[];
  function T(fr,en){ return LANG==='en'?en:fr; }
  var I18N_U={"Projets": "Projects", "Expériences": "Experience", "Parcours": "Background", "Compétences": "Skills", "Motivation": "Motivation", "Contact": "Contact", "<b>●</b> Élève ingénieur à l'ENSIIE · Stage de 3 à 4 mois dès mai 2027": "<b>●</b> Engineering student at ENSIIE · 3 to 4 month internship from May 2027", "Je transforme des données en <strong>décisions</strong> : prévoir une panne de moteur d'avion, annoncer une crue trois jours à l'avance, dépister un diabète, repérer une fraude bancaire. Élève ingénieur en <strong>mathématiques appliquées</strong>, je mets le <strong>machine learning</strong> au service de tous les secteurs, avec une affinité particulière pour la <strong>finance</strong>.": "I turn data into <strong>decisions</strong>: predicting an aircraft engine failure, forecasting a flood three days ahead, screening for diabetes, spotting bank fraud. As an <strong>applied mathematics</strong> engineering student, I put <strong>machine learning</strong> to work in every sector, with a particular interest in <strong>finance</strong>.", "Me contacter": "Contact me", "<i style=\"background:var(--violet)\"></i>IA &amp; deep learning": "<i style=\"background:var(--violet)\"></i>AI &amp; deep learning", "<i style=\"background:var(--gold)\"></i>Finance &amp; marchés": "<i style=\"background:var(--gold)\"></i>Finance &amp; markets", "25/25 <small>pannes détectées</small>": "25/25 <small>failures detected</small>", "<b>AÉRONAUTIQUE</b> maintenance prédictive <i class=\"u\">25/25 pannes détectées</i>": "<b>AEROSPACE</b> predictive maintenance <i class=\"u\">25/25 failures detected</i>", "<b>ENVIRONNEMENT</b> alerte crues <i class=\"u\">79 % annoncées</i>": "<b>ENVIRONMENT</b> flood alerts <i class=\"u\">79 % forecast</i>", "<b>SANTÉ</b> dépistage diabète <i class=\"u\">87 % détectés</i>": "<b>HEALTH</b> diabetes screening <i class=\"u\">87 % detected</i>", "<b>SPORT</b> pronostics football <i class=\"u\">28 900 matchs</i>": "<b>SPORT</b> football predictions <i class=\"u\">28,900 matches</i>", "<b>IMMOBILIER</b> analyse de terrains <i class=\"u\">+1,6 M€</i>": "<b>REAL ESTATE</b> land analysis <i class=\"u\">+€1.6M</i>", "<b>BANQUE</b> détection de fraude <i class=\"u\">−77 % de pertes</i>": "<b>BANKING</b> fraud detection <i class=\"u\">−77 % losses</i>", "<b>MARCHÉS</b> volatilité · portefeuille · NLP": "<b>MARKETS</b> volatility · portfolio · NLP", "<b>CYBERSÉCURITÉ</b> VIGIE, anti-arnaques seniors": "<b>CYBERSECURITY</b> VIGIE, anti-scam for seniors", "pays d'études, un parcours international : Maroc et France": "countries of study, an international path: Morocco and France", "premiers stages : data science et développement web": "first internships: data science and web development", "Mai 27": "May 27", "disponible pour un stage de 3 à 4 mois": "available for a 3 to 4 month internship", "mention Très Bien au DUT Technologique": "“Très Bien”, highest honours in the DUT", "01 · Projets": "01 · Projects", "Un même métier, <span>de nombreux terrains de jeu.</span>": "One craft, <span>many playing fields.</span>", "Tous": "All", "Industrie": "Industry", "Environnement": "Environment", "Cybersécurité": "Cybersecurity", "Santé": "Health", "Sport": "Sport", "Immobilier": "Real estate", "Banque": "Banking", "Marchés": "Markets", "Industrie · Aéronautique": "Industry · Aerospace", "Maintenance prédictive des moteurs d'avion": "Predictive maintenance of aircraft engines", "À partir des capteurs d'un turboréacteur (données NASA), le modèle prévoit combien de vols il reste avant la panne et décide quand envoyer le moteur en inspection, en tenant compte du coût d'une panne ratée.": "From turbofan sensor data (NASA), the model predicts how many flights remain before failure and decides when to send the engine for inspection, taking into account the cost of a missed failure.", "pannes imminentes détectées, avec 5 fausses alertes sur 75 moteurs sains": "imminent failures detected, with 5 false alarms out of 75 healthy engines", "Séries temporelles": "Time series", "Optimisation du coût": "Cost optimisation", "Prévision des crues en France": "Flood forecasting in France", "Système d'alerte précoce sur 19 rivières françaises et 20 ans de données réelles (INRAE, Météo-France).": "Early warning system on 19 French rivers with 20 years of real data (INRAE, Météo-France).", "des crues annoncées, en moyenne 2,4 jours à l'avance": "of floods forecast, on average 2.4 days in advance", "Événements rares": "Rare events", "Hydrologie": "Hydrology", "Cybersécurité · Innovation": "Cybersecurity · Innovation", "Challenge Projet": "Project Challenge", "VIGIE, l'assistant anti-arnaques des seniors": "VIGIE, the anti-scam assistant for seniors", "Un faux SMS de livraison, 1,99 € à régler « avant ce soir », un lien qui a l'air sérieux : c'est tout ce qu'il faut pour vider le compte d'une grand-mère. VIGIE repère les messages frauduleux, alerte le senior avant qu'il clique, lui explique le danger avec des mots simples et prévient un proche si le risque est élevé, sans jamais lire les conversations.": "A fake delivery text, €1.99 to pay “before tonight”, a link that looks legitimate: that is all it takes to empty a grandmother’s bank account. VIGIE spots fraudulent messages, warns the senior before they click, explains the danger in simple words and alerts a relative if the risk is high, without ever reading the conversations.", "4 jours": "4 days", "5 étudiants, 3 écoles (ENSIIE, Télécom SudParis, IMT-BS). Mon rôle : responsable technique et prototypage.": "5 students, 3 schools (ENSIIE, Télécom SudParis, IMT-BS). My role: technical and prototyping lead.", "Détection de liens frauduleux": "Fraudulent link detection", "Prototype d'application": "App prototype", "UX seniors": "UX for seniors", "Travail en équipe": "Teamwork", "Colis en attente. Frais de 1,99 € à régler avant ce soir : <u>livr-colis-fr.info</u>": "Parcel on hold. A €1.99 fee must be paid before tonight: <u>livr-colis-fr.info</u>", "⚠ Message dangereux": "⚠ Dangerous message", "Ce lien imite un transporteur. Ne payez rien.": "This link imitates a delivery company. Do not pay anything.", "Appeler Sophie (ma fille)": "Call Sophie (my daughter)", "516 M€ volés aux Français en 2025 par ce type d'arnaque": "€516M stolen from people in France in 2025 by this type of scam", "Environnement · Vision": "Environment · Vision", "Détection de déchets sur les plages": "Litter detection on beaches", "Images annotées à la main (6 classes), augmentation des données, puis entraînement de YOLOv8 sur GPU et petite interface OpenCV.": "Hand-labelled images (6 classes), data augmentation, then YOLOv8 training on GPU and a small OpenCV interface.", "89,5 %": "89.5 %", "de F1-score (précision 89,4 %, rappel 89,5 %)": "F1-score (precision 89.4 %, recall 89.5 %)", "janv. – mars 2025": "Jan – Mar 2025", "Dépistage du diabète de type 2": "Type 2 diabetes screening", "Estimation du risque à 5 ans à partir de mesures de consultation, seuil réglé pour ne pas rater de malades, chaque prédiction expliquée.": "Estimates 5-year risk from routine check-up measurements, with a threshold tuned not to miss patients, and every prediction explained.", "des malades détectés, contre 46 % pour la règle clinique seule": "of patients detected, versus 46 % for the clinical rule alone", "Régression logistique": "Logistic regression", "App web": "Web app", "Prédiction de matchs de football": "Football match prediction", "Application Streamlit qui donne les chances de victoire, nul ou défaite dans les 5 grands championnats, à partir de 28 900 matchs et d'un Elo codé à la main.": "Streamlit app that gives win, draw or loss probabilities in Europe’s top 5 leagues, built on 28,900 matches and a hand-coded Elo rating.", "de bons pronostics quand le modèle est sûr à plus de 75 %": "correct predictions when the model is more than 75 % confident", "Analyse de parcelles constructibles": "Building plot analysis", "Outil d'aide à l'achat d'un terrain : constructibilité, juste prix, surcoûts, puis un verdict Acheter, Négocier ou Éviter.": "A tool to help buy land: buildability, fair price, extra costs, then a Buy, Negotiate or Avoid verdict.", "+1,6 M€": "+€1.6M", "seule stratégie rentable sur 1 200 parcelles test (AUC 0,92)": "the only profitable strategy on 1,200 test plots (AUC 0.92)", "Régression": "Regression", "Aide à la décision": "Decision support", "Détection de fraude bancaire": "Bank fraud detection", "Repérer des paiements frauduleux qui ne représentent que 0,17 % des transactions, en raisonnant en euros économisés.": "Spotting fraudulent payments that make up only 0.17 % of transactions, measured in euros saved.", "de pertes liées à la fraude, avec 87 % d'alertes justes": "in fraud losses, with 87 % of alerts correct", "PR-AUC 0,88": "PR-AUC 0.88", "Données déséquilibrées": "Imbalanced data", "Scoring de crédit": "Credit scoring", "Application qui estime le risque de défaut, décide, explique la décision et propose des scénarios « et si ».": "An app that estimates default risk, makes a decision, explains it and offers “what if” scenarios.", "coût des erreurs de crédit par rapport à « tout accepter »": "cost of credit errors compared with “accept everyone”", "Banque · Marketing": "Banking · Marketing", "Segmentation de clients": "Customer segmentation", "41 188 clients regroupés en 5 segments pour adapter les offres d'épargne et réduire le coût des campagnes d'appels.": "41,188 customers grouped into 5 segments to tailor savings offers and cut the cost of call campaigns.", "d'appels pour seulement 8 % de souscriptions perdues": "calls for only 8 % of subscriptions lost", "ACP": "PCA", "Recommandations métier": "Business recommendations", "Marchés financiers": "Financial markets", "Volatilité du CAC 40 : GARCH contre LSTM": "CAC 40 volatility: GARCH vs LSTM", "Cinq modèles comparés pour prévoir la volatilité à 5 jours, de l'économétrie au réseau de neurones, puis appliqués au calcul de la VaR.": "Five models compared to forecast 5-day volatility, from econometrics to neural networks, then applied to Value at Risk.", "20 ans": "20 years", "de données, test de Diebold-Mariano": "of data, Diebold-Mariano test", "Optimisation de portefeuille": "Portfolio optimisation", "Markowitz, clustering et HRP sur les actions du CAC 40, vérifiés par un backtest sans regard vers le futur, frais inclus.": "Markowitz, clustering and HRP on CAC 40 stocks, validated by a backtest with no look-ahead bias, fees included.", "actions, de 2015 à 2025, rebalancement mensuel": "stocks, from 2015 to 2025, monthly rebalancing", "NLP · Marchés": "NLP · Markets", "Sentiment des actualités financières": "Financial news sentiment", "Le ton des titres de presse, mesuré par un modèle de langage, aide-t-il à prévoir le rendement d'une action le lendemain ?": "Does the tone of news headlines, measured by a language model, help predict a stock’s next-day return?", "transformers, économétrie et étude d'événement": "transformers, econometrics and event study", "Projets d'école en programmation": "School programming projects", "Modèle de Black-Scholes": "Black-Scholes model", "C++ · prix d'options européennes avec les cours de processus stochastiques · 2026, en cours": "C++ · European option pricing using stochastic processes courses · 2026, in progress", "Machine virtuelle OCaml": "OCaml virtual machine", "C · interprétation du bytecode, pile et gestion de la mémoire · 2026": "C · bytecode interpretation, stack and memory management · 2026", "Mini-SGBD relationnel": "Mini relational DBMS", "OCaml · conception, implémentation et analyse d'un système de gestion de bases de données relationnelles fonctionnel · module INPF12, ENSIIE 1<sup>re</sup> année, 2025-2026": "OCaml · design, implementation and analysis of a working relational database management system · INPF12 module, ENSIIE 1<sup>st</sup> year, 2025-2026", "02 · Expériences": "02 · Experience", "Deux premiers stages, <span>pour poser les bases.</span>": "Two first internships, <span>to lay the foundations.</span>", "<b>mars – mai 2025</b>ENTSI · Oujda, Maroc": "<b>Mar – May 2025</b>ENTSI · Oujda, Morocco", "Stagiaire data science · <span>OptiTrade</span>": "Data science intern · <span>OptiTrade</span>", "Application web d'aide à l'investissement": "Investment support web application", "lignes boursières au départ": "rows of stock data at the start", "246 437": "246,437", "après nettoyage": "after cleaning", "modèles comparés": "models compared", "300 000": "300,000", "Nettoyage et préparation d'un historique boursier de 300 000 lignes.": "Cleaned and prepared a 300,000-row stock market history.", "Comparaison de la régression linéaire, de Random Forest, de XGBoost et d'un LSTM (MSE, RMSE, R²) pour conseiller d'acheter, vendre ou garder une action.": "Compared linear regression, Random Forest, XGBoost and an LSTM (MSE, RMSE, R²) to recommend buying, selling or holding a stock.", "Intégration du modèle dans une application web complète.": "Integrated the model into a full web application.", "<b>juin – juil. 2024</b>ENTSI · Oujda, Maroc": "<b>Jun – Jul 2024</b>ENTSI · Oujda, Morocco", "Stagiaire développeur web · <span>GESCOM</span>": "Web developer intern · <span>GESCOM</span>", "Application de gestion commerciale": "Sales management application", "Gestion des clients, produits, ventes, achats et rôles utilisateurs.": "Management of customers, products, sales, purchases and user roles.", "Optimisation des requêtes SQL les plus lentes.": "Optimised the slowest SQL queries.", "Ce que je cherche": "What I am looking for", "Un stage pour apprendre, <span>vite et pour de vrai.</span>": "An internship to learn, <span>fast and for real.</span>", "Mes projets m'ont surtout montré tout ce qu'il me reste à apprendre. <b>C'est exactement ce qui me motive.</b>": "My projects mostly showed me how much I still have to learn. <b>That is exactly what drives me.</b>", "Je n'ai pas encore une longue expérience professionnelle. J'ai mieux : l'envie de progresser au contact d'une équipe exigeante, et des projets qui prouvent que j'apprends vite.": "I don’t have long professional experience yet. I have something better: the drive to grow alongside a demanding team, and projects that prove I learn fast.", "Je pose des questions": "I ask questions", "Comprendre le métier avant de toucher au modèle.": "Understand the business before touching the model.", "J'essaie, je me trompe parfois": "I try, and sometimes I get it wrong", "Et je recommence, en sachant pourquoi ça n'a pas marché.": "Then I start again, knowing why it didn’t work.", "Je progresse vite": "I learn fast", "Deux stages et une série de projets en data, IA, vision et finance, la plupart en autonomie.": "Two internships and a series of projects in data, AI, vision and finance, most of them on my own.", "Je veux des responsabilités": "I want responsibility", "Commencer par apprendre, puis porter de vrais sujets au fil du stage, quitte à sortir de ma zone de confort.": "Start by learning, then take on real topics as the internship goes on, even if it means leaving my comfort zone.", "Durée": "Duration", "3 à 4 mois": "3 to 4 months", "Début": "Start", "Mai 2027": "May 2027", "Domaines": "Fields", "Data science · data analyse · data engineering · finance": "Data science · data analysis · data engineering · finance", "03 · Parcours": "03 · Background", "Un parcours international, <span>deux pays, une même exigence.</span>": "An international path, <span>two countries, the same high standards.</span>", "2023 – 2025 · Maroc": "2023 – 2025 · Morocco", "DUT Technologique": "DUT (two-year technology degree)", "École Supérieure de Technologie d'Oujda": "École Supérieure de Technologie d'Oujda", "Deux stages en entreprise pendant la formation.": "Two company internships during the programme.", "Mention Très Bien": "Highest honours", "Depuis sept. 2025 · France": "Since Sept. 2025 · France", "ENSIIE, cycle ingénieur": "ENSIIE, engineering programme", "2ᵉ année (Master 1) à Évry-Courcouronnes. Mathématiques appliquées et informatique, orientées data, IA et finance.": "2nd year (Master 1) in Évry-Courcouronnes. Applied mathematics and computer science, with a focus on data, AI and finance.", "Stage de 3 à 4 mois": "3 to 4 month internship", "Data science, data analyse, data engineering ou finance": "Data science, data analysis, data engineering or finance", "Une équipe exigeante, de vrais sujets, et des responsabilités qui grandissent.": "A demanding team, real topics, and growing responsibility.", "Formation actuelle": "Current studies", "ENSIIE · Cycle ingénieur": "ENSIIE · Engineering programme", "École Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise. 2ᵉ année (Master 1), mathématiques appliquées et informatique, orientées data, IA et finance.": "École Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise. 2nd year (Master 1), applied mathematics and computer science, with a focus on data, AI and finance.", "2ᵉ année · Master 1": "2nd year · Master 1", "Mathématiques appliquées": "Applied mathematics", "Probabilités": "Probability", "Processus stochastiques": "Stochastic processes", "Optimisation": "Optimisation", "Recherche opérationnelle": "Operations research", "Data &amp; IA": "Data &amp; AI", "Bases de données SQL": "SQL databases", "Bases de données NoSQL": "NoSQL databases", "Finance quantitative": "Quantitative finance", "Modèle de Black-Scholes (C++)": "Black-Scholes model (C++)", "Pricing d'options européennes": "European option pricing", "Application des processus stochastiques": "Applied stochastic processes", "Informatique &amp; systèmes": "Computer science &amp; systems", "Programmation C et C++": "C and C++ programming", "Programmation fonctionnelle (OCaml)": "Functional programming (OCaml)", "SGBD relationnel et machine virtuelle": "Relational DBMS and virtual machine", "04 · Compétences": "04 · Skills", "De la donnée brute <span>à la décision expliquée.</span>": "From raw data <span>to explained decisions.</span>", "Langages": "Languages", "Méthodes": "Methods", "Validation croisée": "Cross-validation", "Économétrie": "Econometrics", "Outils": "Tools", "Langues": "Languages", "<b>Français</b> langue maternelle": "<b>French</b> native", "<b>Anglais</b> B2": "<b>English</b> B2", "05 · Engagement &amp; hobbies": "05 · Volunteering &amp; hobbies", "Prendre des responsabilités <span>au service des autres.</span>": "Taking on responsibility <span>to help others.</span>", "En cours": "Ongoing", "août 2026 – aujourd'hui": "Aug 2026 – present", "Ambassadeur, YITU Association": "Ambassador, YITU Association", "Île-de-France · bénévolat": "Île-de-France · volunteering", "Je contribue à la lutte contre la précarité étudiante et au soutien de la réussite éducative. Je fais connaître les actions de l'association : soutien scolaire, accompagnement des jeunes, ateliers d'orientation (CV, lettres de motivation) et accès à des aides essentielles (soutien psychologique, aides matérielles et alimentaires).": "I help fight student poverty and support educational success. I promote the association’s work: tutoring, mentoring young people, guidance workshops (CVs, cover letters) and access to essential support (psychological help, material and food aid).", "Leadership": "Leadership", "Égalité des chances": "Equal opportunities", "Orientation": "Guidance", "Maroc": "Morocco", "Chargé académique, AEBM": "Academic officer, AEBM", "Maroc · vie associative étudiante": "Morocco · student association", "Coordination des activités académiques de l'association et accompagnement des étudiants membres.": "Coordinated the association’s academic activities and supported student members.", "Accompagnement": "Mentoring", "Organisation": "Organisation", "En dehors des cours": "Outside of class", "Lecture": "Reading", "Pour apprendre autre chose que ce que l'on voit en cours et prendre du recul.": "To learn things beyond what we see in class and to step back.", "Musique": "Music", "Toujours présente pour me concentrer comme pour décompresser.": "Always there, to focus as well as to unwind.", "Cuisine": "Cooking", "Grand fan de nouvelles recettes. J'aime tester, ajuster et recommencer jusqu'à trouver le bon goût.": "A big fan of new recipes. I like to test, adjust and try again until the taste is just right.", "À l'entreprise <span>qui me fera grandir.</span>": "To the company <span>that will help me grow.</span>", "Élève ingénieur à l'ENSIIE": "Engineering student at ENSIIE", "Objet": "Subject", "Candidature pour un stage de 3 à 4 mois à partir de mai 2027": "Application for a 3 to 4 month internship starting May 2027", "Madame, Monsieur,": "Dear Sir or Madam,", "Je suis élève ingénieur en deuxième année à l'École Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise. Je me forme en mathématiques appliquées et en informatique avec une orientation data, IA et finance. Je cherche un stage de 3 à 4 mois à partir de mai 2027 en data science, en data analyse, en data engineering ou en finance.": "I am a second-year engineering student at the École Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise. I study applied mathematics and computer science with a focus on data, AI and finance. I am looking for a 3 to 4 month internship starting in May 2027 in data science, data analysis, data engineering or finance.", "Je ne cherche pas seulement un stage. Je cherche une entreprise où je pourrai <strong>évoluer et me dépasser</strong> avec une équipe exigeante qui me confie de vrais sujets et qui m'aide à aller plus loin que ce que je sais faire aujourd'hui. Je sais que j'ai encore beaucoup à apprendre et c'est précisément ce qui me motive.": "I am not just looking for an internship. I am looking for a company where I can <strong>grow and push my limits</strong>, with a demanding team that gives me real responsibilities and helps me go beyond what I can do today. I know I still have a lot to learn, and that is precisely what motivates me.", "Mon parcours m'a appris à m'adapter. En passant du Maroc à la France j'ai changé de pays, de système d'enseignement et de repères. À chaque étape j'ai trouvé ma place en travaillant davantage et en posant des questions. Mon engagement associatif au Maroc puis auprès de YITU Association en France m'a aussi appris à être utile aux autres, à prendre des responsabilités et à tenir mes engagements.": "My journey has taught me to adapt. Moving from Morocco to France, I changed country, education system and points of reference. At every step I found my place by working harder and asking questions. My volunteering, first in Morocco and then with YITU Association in France, has also taught me to be useful to others, to take on responsibility and to keep my commitments.", "Je vous apporte de la rigueur, une curiosité sincère et l'envie de progresser vite. J'écoute, j'essaie et je me trompe parfois, mais je ne commets pas deux fois la même erreur. À terme je veux prendre des responsabilités et entraîner une équipe. Je sais que cela commence par apprendre auprès de personnes plus expérimentées que moi et c'est ce que je viens chercher chez vous.": "I bring rigour, genuine curiosity and the drive to improve quickly. I listen, I try and I sometimes make mistakes, but I never make the same one twice. In the long run I want to take on responsibility and lead a team. I know this starts by learning from people more experienced than me, and that is what I hope to find with you.", "Si votre entreprise cherche quelqu'un qui a envie de grandir avec elle, je serais heureux d'en parler avec vous.": "If your company is looking for someone who wants to grow with it, I would be glad to talk with you.", "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.": "Yours faithfully,", "06 · Contact": "06 · Contact", "Un problème,<br>des données&nbsp;? <span>Parlons-en.</span>": "A problem,<br>some data? <span>Let’s talk.</span>", "Deux façons de me joindre. Écrivez-moi directement, ou laissez un message ici, il arrive dans ma boîte mail.": "Two ways to reach me. Write to me directly, or leave a message here and it will land in my inbox.", "E-mail": "Email", "Copier l'adresse": "Copy address", "Téléphone": "Phone", "Copier le numéro": "Copy number", "Ville": "City", "Scannez-moi": "Scan me", "Ouvrez ce portfolio sur votre téléphone, ou gardez-le pour plus tard.": "Open this portfolio on your phone, or keep it for later.", "Laisser un message": "Leave a message", "Je lis chaque message et je réponds rapidement.": "I read every message and reply quickly.", "Nom": "Name", "Proposition de stage": "Internship offer", "Question sur un projet": "Question about a project", "Prise de contact": "Getting in touch", "Envoyer le message": "Send message", "Une question sur moi ?": "A question about me?", "L'assistant d'Issa": "Issa’s assistant", "● répond sur son parcours et ses projets": "● answers about his background and projects", "Envoyer": "Send", "Maroc → France": "Morocco → France"}, I18N_T={"Je suis": "Hi, I’m your next", "Voir les projets": "View projects", "Me proposer un stage": "Offer me an internship", "Message": "Message"}, I18N_A={"Sections": "Sections", "Domaines couverts": "Fields covered", "Filtrer par secteur": "Filter by sector", "QR code du portfolio": "Portfolio QR code", "Votre nom": "Your name", "vous@entreprise.com": "you@company.com", "Sujets rapides": "Quick topics", "Ou écrivez votre propre objet": "Or write your own subject", "Bonjour Issa, ...": "Hello Issa, ...", "Assistant du portfolio": "Portfolio assistant", "Fermer": "Close", "Posez votre question…": "Ask your question…", "Votre question": "Your question", "QR code vers issakarambiri.com": "QR code to issakarambiri.com"};
  Object.assign(I18N_A,{"Ouvrir le menu":"Open menu"}); Object.assign(I18N_U,{"Prix d'Excellence de l'UEEMO, 7<sup>e</sup> édition": "UEEMO Award of Excellence, 7<sup>th</sup> edition", "Journée d'intégration et d'excellence du CETASSO": "CETASSO Integration and Excellence Day"}); Object.assign(I18N_U,{"2023 – 2024 · Oujda": "2023 – 2024 · Oujda", "Attestations d'excellence": "Certificates of excellence", "Trois associations étudiantes ont récompensé mes résultats de l'année.": "Three student associations recognised my results that year.", "<b>CETASSO</b> moyenne supérieure à 16/20 sur l'année": "<b>CETASSO</b> yearly average above 16/20", "<b>AEBM Oujda</b> plus de 16/20 de moyenne sur l'année": "<b>AEBM Oujda</b> yearly average above 16/20", "<b>UEEMO</b> moyenne d'au moins 15/20 au premier semestre": "<b>UEEMO</b> average of at least 15/20 in the first semester"}); Object.assign(I18N_U,{"Finaliste du concours d'art oratoire de l'AEBM, 2025.": "Finalist of the AEBM public speaking contest, 2025."}); Object.assign(I18N_U,{"Page Facebook de l'AEBM":"AEBM Facebook page"}); Object.assign(I18N_U,{"CV pour un stage": "Internship CV", "Avec ma recherche de stage dès mai 2027": "Includes my internship search from May 2027", "CV simple": "Standard CV", "Mon parcours, sans mention de stage": "My profile, without the internship search"}); Object.assign(I18N_U,{"<b>CV pour un stage</b><small>Avec ma recherche de stage dès mai 2027</small>": "<b>Internship CV</b><small>Includes my internship search from May 2027</small>", "<b>CV simple</b><small>Mon parcours, sans mention de stage</small>": "<b>Standard CV</b><small>My profile, without the internship search</small>", "En finale du concours d'art oratoire, Semaine scientifique du CETASSO, Oujda, 2024.": "In the final of the public speaking contest, CETASSO Science Week, Oujda, 2024."}); Object.assign(I18N_U,{"05 · Engagement &amp; distinctions": "05 · Volunteering &amp; awards", "Distinctions": "Awards", "Lauréat du concours d'art oratoire": "Winner of the public speaking contest", "Semaine scientifique du CETASSO à Oujda. Construire un argumentaire, le défendre devant un jury et convaincre un public.": "CETASSO Science Week in Oujda. Building an argument, defending it before a jury and winning over an audience.", "Prix d'Excellence": "Award of Excellence", "Décerné par le bureau exécutif du CETASSO, Université Mohammed Premier d'Oujda, pour l'année universitaire.": "Granted by the CETASSO executive board, Mohammed First University, Oujda, for the academic year."}); Object.assign(I18N_T,{"Télécharger mon CV": "Download my CV", "Télécharger mon CV (PDF)": "Download my CV (PDF)"});
  Object.assign(I18N_U,{"Aller au contenu":"Skip to content"});
  Object.assign(I18N_U,{"À propos": "About", "Les données ne m'intéressent <span>que si elles aident à décider.</span>": "Data only matters to me <span>when it helps someone decide.</span>", "Élève ingénieur en 2<sup>e</sup> année du cycle ingénieur (Master 1) à l'<strong>École Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise (ENSIIE)</strong>, sur le campus d'Évry, je me forme en mathématiques appliquées et en informatique, avec une orientation data science, IA et finance.": "I am a second-year student in the engineering programme (Master 1 level) at the <strong>École Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise (ENSIIE)</strong>, on its Évry campus in France, training in applied mathematics and computer science with a focus on data science, AI and finance.", "Je pars toujours d'une question concrète. Quand faut-il inspecter un moteur d'avion ? Comment arrêter une fraude sans bloquer les bons clients ? Comment répartir un portefeuille sans prendre trop de risque ? J'y réponds avec des statistiques et du machine learning, en gardant en tête ce que chaque décision coûte vraiment.": "I always start from a concrete question. When should an aircraft engine be inspected? How do you stop fraud without blocking good customers? How do you spread a portfolio without taking on too much risk? I answer with statistics and machine learning, keeping in mind what each decision really costs.", "La finance m'attire particulièrement, mais j'aime tout autant les sujets d'industrie, de santé ou d'environnement. Et comme un bon modèle ne sert à rien s'il est mal expliqué, je soigne aussi la manière de présenter mes résultats, un goût que je dois à mes concours d'art oratoire.": "Finance appeals to me in particular, but I enjoy industry, health and environment topics just as much. And since a good model is useless if it is poorly explained, I also take care in how I present my results, a habit I owe to my public speaking contests.", "Formation": "Education", "ENSIIE, cycle ingénieur, 2<sup>e</sup> année (Master 1)": "ENSIIE, engineering programme, 2nd year (Master 1)", "Orientation": "Focus", "Mathématiques appliquées · data, IA, finance": "Applied mathematics · data, AI, finance", "Campus": "Campus", "Évry-Courcouronnes, France": "Évry-Courcouronnes, France", "Disponibilité": "Availability", "Stage de 3 à 4 mois dès mai 2027": "3 to 4 month internship from May 2027", "Langues": "Languages", "Français, anglais (B2)": "French, English (B2)"});
  Object.assign(I18N_U,{"01 · À propos": "01 · About", "02 · Projets": "02 · Projects", "03 · Expériences": "03 · Experience", "04 · Ce que je cherche": "04 · What I am looking for", "05 · Parcours": "05 · Background", "06 · Compétences": "06 · Skills", "07 · Engagement &amp; distinctions": "07 · Volunteering &amp; awards", "08 · Motivation": "08 · Motivation", "09 · Contact": "09 · Contact", "secteurs couverts par mes projets, de l'aéronautique à la finance": "sectors covered by my projects, from aerospace to finance"});
  Object.assign(I18N_U,{"Issa Aziz KARAMBIRI, <span>élève ingénieur data &amp; IA.</span>": "Issa Aziz KARAMBIRI, <span>data &amp; AI engineering student.</span>", "Élève ingénieur en 2<sup>e</sup> année du cycle ingénieur (Master 1) en mathématiques appliquées et informatique à l'<strong>École Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise (ENSIIE)</strong>, sur le campus d'Évry, je me spécialise en data science et en intelligence artificielle, avec un intérêt marqué pour la finance.": "I am a second-year student in the engineering programme (Master 1 level) in applied mathematics and computer science at the <strong>École Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise (ENSIIE)</strong>, on its Évry campus in France. I specialise in data science and artificial intelligence, with a strong interest in finance.", "Ce que je fais, c'est transformer des données en décisions. Prévoir quand inspecter un moteur d'avion, repérer une fraude sans bloquer les bons clients, répartir un portefeuille sans prendre trop de risque : je pars toujours d'une question concrète et j'y réponds avec des statistiques et du machine learning.": "What I do is turn data into decisions. Predicting when to inspect an aircraft engine, catching fraud without blocking good customers, spreading a portfolio without taking on too much risk: I always start from a concrete question and answer it with statistics and machine learning.", "Rigoureux, curieux et à l'aise à l'oral grâce à mes concours d'art oratoire, je sais expliquer un modèle à quelqu'un qui n'est pas du métier. Je recherche un <strong>stage de 3 à 4 mois à partir de mai 2027</strong> en data science, IA, data analyse ou finance, dans une équipe exigeante où apprendre vite et prendre des responsabilités.": "Rigorous, curious and comfortable speaking in public thanks to my public speaking contests, I can explain a model to someone outside the field. I am looking for a <strong>3 to 4 month internship starting May 2027</strong> in data science, AI, data analysis or finance, in a demanding team where I can learn fast and take on responsibility."});
  Object.assign(I18N_U,{"Je transforme des données en <strong>décisions</strong>, de l'aéronautique à la santé, avec une affinité particulière pour la finance.": "I turn data into <strong>decisions</strong>, from aerospace to health, with a particular interest in finance.", "Prévoir combien de vols il reste à un moteur avant la panne, et quand l'inspecter.": "Predict how many flights an engine has left before failure, and when to inspect it.", "Alerte précoce sur 19 rivières françaises, avec 20 ans de données.": "Early warning on 19 French rivers, built on 20 years of data.", "Repère les SMS frauduleux et alerte le senior avant qu'il clique, sans jamais lire ses conversations.": "Spots scam texts and warns seniors before they click, without ever reading their conversations.", "YOLOv8 entraîné sur des images annotées à la main pour repérer 6 types de déchets.": "YOLOv8 trained on hand-labelled images to spot 6 types of litter.", "Estimer le risque à 5 ans à partir d'une simple consultation.": "Estimate 5-year risk from a routine check-up.", "Chances de victoire, nul ou défaite dans les 5 grands championnats.": "Win, draw or loss odds across Europe's top 5 leagues.", "Acheter, négocier ou éviter : un verdict clair sur chaque terrain.": "Buy, negotiate or avoid: a clear verdict on each plot of land.", "Repérer 0,17 % de paiements frauduleux, en raisonnant en euros économisés.": "Catch the 0.17% of fraudulent payments, measured in euros saved.", "Estimer le risque de défaut et expliquer chaque décision.": "Estimate default risk and explain every decision.", "41 188 clients regroupés en 5 segments pour mieux cibler les offres.": "41,188 customers grouped into 5 segments to target offers better.", "Cinq modèles comparés pour prévoir la volatilité à 5 jours et calculer la VaR.": "Five models compared to forecast 5-day volatility and compute VaR.", "Markowitz, clustering et HRP testés sur le CAC 40, frais inclus.": "Markowitz, clustering and HRP tested on the CAC 40, costs included.", "Le ton de la presse aide-t-il à prévoir le rendement du lendemain ?": "Does news tone help predict next-day returns?", "Lutte contre la précarité étudiante : je fais connaître le soutien scolaire, les ateliers CV et les aides de l'association.": "Fighting student poverty: I promote the association's tutoring, CV workshops and support services.", "Semaine scientifique du CETASSO, Oujda.": "CETASSO Science Week, Oujda.", "Décerné par le CETASSO, Université Mohammed Premier d'Oujda.": "Awarded by CETASSO, Mohammed First University, Oujda.", "Pour apprendre au-delà des cours.": "To learn beyond the classroom.", "Pour me concentrer comme pour décompresser.": "To focus as well as to unwind.", "Toujours à la recherche de nouvelles recettes.": "Always looking for new recipes.", "Deux stages et de nombreux projets, la plupart en autonomie.": "Two internships and many projects, most of them on my own.", "Apprendre d'abord, puis porter de vrais sujets.": "Learn first, then own real topics."});
  Object.assign(I18N_U,{"Me contacter": "Contact me", "<i></i>Disponible dès mai 2027": "<i></i>Available from May 2027", "Un de ces projets vous parle&nbsp;? <span>Parlons-en.</span>": "Does one of these projects speak to you? <span>Let's talk.</span>", "Je recherche un stage de 3 à 4 mois à partir de mai 2027. Écrivez-moi, appelez-moi ou laissez un message : je réponds rapidement.": "I am looking for a 3 to 4 month internship starting May 2027. Email me, call me or leave a message: I reply quickly."});
  Object.assign(I18N_T,{"Me contacter":"Contact me"});
  Object.assign(I18N_U,{"Je transforme des données en <strong>décisions</strong> utiles, quel que soit le secteur, et je sais expliquer mes résultats à ceux qui doivent décider.": "I turn data into useful <strong>decisions</strong>, whatever the industry, and I can explain my results to the people who have to make them.", "© 2026 Issa Aziz KARAMBIRI · <a href=\"#\" data-privacy-link=\"1\">Confidentialité</a>": "© 2026 Issa Aziz KARAMBIRI · <a href=\"#\" data-privacy-link=\"1\">Privacy</a>"});
  Object.assign(I18N_U,{"Élève ingénieur en 2<sup>e</sup> année du cycle ingénieur, niveau Master 1, à l'<strong>École Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise</strong> sur le campus d'Évry, je me spécialise en data science et en intelligence artificielle avec un intérêt marqué pour la finance.": "Second-year engineering student, Master 1 level, at the <strong>École Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise</strong> on its Évry campus, I specialise in data science and artificial intelligence with a strong interest in finance.", "Je pars toujours d'une question concrète et j'y réponds avec les données, en expliquant clairement mes résultats. Je recherche un <strong>stage de 3 à 4 mois à partir de mai 2027</strong>.": "I always start from a concrete question and answer it with data, explaining my results clearly. I am looking for a <strong>3 to 4 month internship starting May 2027</strong>."});
  Object.assign(I18N_U,{"Je suis en deuxième année d'école d'ingénieur, l'équivalent d'un Master 1, à l'<strong>École Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise</strong> à Évry. J'étudie les mathématiques appliquées et l'informatique, et ce qui me plaît le plus c'est la data et l'IA, surtout quand elles touchent à la finance.": "I am in my second year of engineering school, equivalent to a Master 1, at the <strong>École Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise</strong> in Évry. I study applied mathematics and computer science, and what I enjoy most is data and AI, especially when they touch on finance.", "J'aime partir d'un vrai problème, chercher dans les données ce qui peut aider à décider, puis l'expliquer simplement. Je cherche maintenant un <strong>stage de 3 à 4 mois à partir de mai 2027</strong> pour apprendre auprès d'une équipe exigeante.": "I like starting from a real problem, finding in the data what can help people decide, then explaining it simply. I am now looking for a <strong>3 to 4 month internship starting May 2027</strong> to learn alongside a demanding team."});
  Object.assign(I18N_U,{"de pertes liées à la fraude dans mon projet bancaire": "fraud losses in my banking project"});
  Object.assign(I18N_U,{"04 · Méthode": "04 · Method", "Ma façon de travailler, <span>de la question au résultat.</span>": "How I work, <span>from question to result.</span>", "Un bon modèle ne vaut que par la décision qu'il permet de prendre. <b>C'est elle que je mesure.</b>": "A good model is only worth the decision it enables. <b>That is what I measure.</b>", "Comprendre le métier": "Understand the business", "Avant le modèle, la question, les contraintes et ce que coûte une erreur.": "Before the model, the question, the constraints and the cost of a mistake.", "Mesurer ce qui compte": "Measure what matters", "Des métriques reliées au terrain, euros économisés, pannes évitées, malades détectés.": "Metrics tied to reality, euros saved, failures avoided, patients detected.", "Valider sans tricher": "Validate honestly", "Validation croisée, backtests sans regard vers le futur, tests sur des données jamais vues.": "Cross-validation, backtests with no look-ahead, tests on unseen data.", "Expliquer simplement": "Explain simply", "SHAP, visualisations claires et mots simples, pour que chacun puisse décider.": "SHAP, clear visuals and plain words, so everyone can decide.", "Spécialités": "Specialties", "Machine learning, séries temporelles, finance": "Machine learning, time series, finance", "J'aime partir d'un vrai problème, chercher dans les données ce qui peut aider à décider, puis l'expliquer simplement.": "I like starting from a real problem, finding in the data what can help people decide, then explaining it simply.", "<i></i>Échangeons": "<i></i>Let's talk"});
  Object.assign(I18N_U,{"Lire l'étude de cas <span aria-hidden=\"true\">→</span>": "Read the case study <span aria-hidden=\"true\">→</span>"});
  Object.assign(I18N_U,{"04 · Ce que je cherche": "04 · What I am looking for", "Un stage pour apprendre, <span>et être utile dès le début.</span>": "An internship to learn, <span>and be useful from day one.</span>", "Je ne prétends pas tout savoir. <b>Je veux apprendre auprès d'une équipe exigeante, et lui apporter ma rigueur.</b>": "I don't claim to know everything. <b>I want to learn from a demanding team, and bring it my rigour.</b>", "Je pose des questions": "I ask questions", "Comprendre le métier avant de toucher au modèle.": "Understand the business before touching the model.", "Je mesure ce qui compte": "I measure what matters", "Relier mes résultats au terrain, euros économisés, pannes évitées.": "Link my results to reality, euros saved, failures avoided.", "Je vérifie mon travail": "I check my work", "Validation croisée et tests sur des données jamais vues, pour ne pas me tromper moi-même.": "Cross-validation and tests on unseen data, so I don't fool myself.", "J'apprends vite": "I learn fast", "Deux stages et de nombreux projets, la plupart en autonomie, et l'envie d'aller plus loin.": "Two internships and many projects, most of them on my own, and the drive to go further.", "Recherche": "Looking for", "Stage de 3 à 4 mois dès mai 2027": "3 to 4 month internship from May 2027", "<i></i>Recherche de stage · mai 2027": "<i></i>Internship search · May 2027"});
  Object.assign(I18N_U,{"J'aime partir d'un vrai problème, chercher dans les données ce qui peut aider à décider, puis l'expliquer simplement. Je cherche un <strong>stage de 3 à 4 mois à partir de mai 2027</strong> pour apprendre auprès d'une équipe exigeante.": "I like starting from a real problem, finding in the data what can help people decide, then explaining it simply. I am looking for a <strong>3 to 4 month internship starting May 2027</strong> to learn alongside a demanding team."});
  var I18N_DESC=["Issa Aziz KARAMBIRI, élève ingénieur en mathématiques appliquées : data science, IA et machine learning, de la santé à l'industrie et à la finance.","Issa Aziz KARAMBIRI, engineering student in applied mathematics: data science, AI and machine learning, from health to industry and finance."];
  var i18nItems=[], i18nAttrs=[];
  (function(){
    var INL={B:1,I:1,EM:1,STRONG:1,A:1,SPAN:1,CODE:1,SMALL:1,BR:1,SUP:1,SUB:1,MARK:1,KBD:1,U:1};
    function hasText(el){ for(var n=el.firstChild;n;n=n.nextSibling) if(n.nodeType===3&&n.textContent.trim()) return true; return false; }
    var seen=[];
    document.querySelectorAll('body *').forEach(function(el){
      if(el.closest('script,style,svg,#bot-log,#bot-sugg')||!hasText(el)) return;
      var u=el; while(INL[u.tagName]&&u.parentElement&&hasText(u.parentElement)) u=u.parentElement;
      if(seen.indexOf(u)>-1) return; seen.push(u);
      if(u.querySelector('svg,[id]')){
        for(var n=u.firstChild;n;n=n.nextSibling){ if(n.nodeType!==3) continue; var t=n.textContent.trim(); if(t&&I18N_T[t]) i18nItems.push({node:n,fr:n.textContent,en:n.textContent.replace(t,I18N_T[t])}); }
        return;
      }
      var k=u.innerHTML.replace(/\s+/g,' ').trim();
      if(I18N_U[k]) i18nItems.push({el:u,fr:u.innerHTML,en:I18N_U[k]});
    });
    document.querySelectorAll('[placeholder],[aria-label],[title]').forEach(function(el){
      ['placeholder','aria-label','title'].forEach(function(a){ var v=el.getAttribute(a); if(v&&I18N_A[v]) i18nAttrs.push({el:el,a:a,fr:v,en:I18N_A[v]}); });
    });
  })();
  var langBtn=document.getElementById('lang-btn');
  function applyLang(l,save){
    LANG=l; var h=document.documentElement; h.lang=l;
    i18nItems.forEach(function(x){ if(x.node) x.node.textContent=x[l]; else x.el.innerHTML=x[l]; });
    i18nAttrs.forEach(function(x){ x.el.setAttribute(x.a,x[l]); });
    var md=document.querySelector('meta[name=description]'); if(md) md.setAttribute('content',I18N_DESC[l==='en'?1:0]);
    langBtn.querySelector('.lb-on').textContent=l==='en'?'EN':'FR'; langBtn.querySelector('.lb-off').textContent=l==='en'?'FR':'EN';
    langBtn.setAttribute('aria-label',l==='en'?'Passer en français':'Switch to English');
    langHooks.forEach(function(f){ try{ f(); }catch(e){} });
    if(save){ try{ localStorage.setItem('iak-lang',l); }catch(e){} }
    h.classList.remove('i18n-wait');
  }
  function cvLinks(){ document.querySelectorAll('.cv-opt').forEach(function(x){ x.setAttribute('href','cv/CV_Issa_KARAMBIRI'+(LANG==='en'?'_EN':'')+(x.dataset.v==='stage'?'_stage':'')+'.pdf'); }); }
  cvLinks(); langHooks.push(cvLinks);
  function cvClose(except){ document.querySelectorAll('.cv-wrap').forEach(function(w){ if(w===except) return; w.querySelector('.cv-pop').hidden=true; w.querySelector('.cv-dl').setAttribute('aria-expanded','false'); }); }
  document.querySelectorAll('.cv-wrap').forEach(function(w){
    var b=w.querySelector('.cv-dl'), pop=w.querySelector('.cv-pop');
    b.addEventListener('click',function(e){ e.stopPropagation(); var open=pop.hidden; cvClose(w); pop.hidden=!open; b.setAttribute('aria-expanded',open?'true':'false'); if(open) pop.querySelector('a').focus(); });
    pop.addEventListener('click',function(e){ if(e.target.closest('.cv-opt')) setTimeout(function(){ cvClose(); },100); });
  });
  document.addEventListener('click',function(e){ if(!e.target.closest('.cv-wrap')) cvClose(); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') cvClose(); });
  // Mobile menu
  (function(){
    var hdr=document.querySelector('header.nav'), mb=document.getElementById('menu-btn');
    function setMenu(o){ hdr.classList.toggle('open',o); mb.setAttribute('aria-expanded',o?'true':'false'); mb.setAttribute('aria-label',o?T('Fermer le menu','Close menu'):T('Ouvrir le menu','Open menu')); }
    mb.addEventListener('click',function(e){ e.stopPropagation(); setMenu(!hdr.classList.contains('open')); });
    document.querySelectorAll('#site-nav a').forEach(function(a){ a.addEventListener('click',function(){ setMenu(false); }); });
    document.addEventListener('click',function(e){ if(!e.target.closest('header.nav')) setMenu(false); });
    document.addEventListener('keydown',function(e){ if(e.key==='Escape') setMenu(false); });
    window.addEventListener('resize',function(){ if(window.innerWidth>900) setMenu(false); });
    langHooks.push(function(){ setMenu(hdr.classList.contains('open')); });
  })();
  langBtn.addEventListener('click',function(){ applyLang(LANG==='en'?'fr':'en',true); });
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

  // Mobile : 5 projets visibles, puis bouton pour voir le reste
  (function(){
    var g=document.getElementById('grid'); if(!g) return;
    var mb=document.createElement('button'); mb.type='button'; mb.className='btn ghost more-proj';
    function upd(){ mb.textContent = g.classList.contains('show-all') ? T('Voir moins de projets','Show fewer projects') : T('Voir tous les projets','Show all projects'); }
    mb.addEventListener('click',function(){ var open=g.classList.toggle('show-all'); upd(); if(!open) g.scrollIntoView({block:'start'}); });
    g.parentNode.insertBefore(mb,g.nextSibling); upd(); langHooks.push(upd);
    btns.forEach(function(b){ b.addEventListener('click',function(){ g.classList.toggle('filtered', b.dataset.f!=='all'); }); });
  })();

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
    ctx.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue('--grid').trim()||'rgba(42,52,70,.45)'; ctx.lineWidth=1;
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
    {g:1,k:['qui','presente','presentation','profil','resume','toi','lui','issa'],a:"Issa Aziz KARAMBIRI est élève ingénieur en 2<sup>e</sup> année du cycle ingénieur (Master 1) à l'École Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise (ENSIIE), sur le campus d'Évry. Il se forme en mathématiques appliquées et en informatique, avec une orientation data science, IA et finance. Il a fait deux stages au Maroc et publié des projets de data science dans de nombreux secteurs : aéronautique, environnement, santé, sport, immobilier, cybersécurité, banque et marchés."},
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
    {g:1,k:['competence','competences','skills','outils','technologie','technologies','python','sql','maitrise','stack','langages'],a:"Langages : Python, SQL, C++, C, R, OCaml, Java, PHP, HTML, CSS et JavaScript. Data et IA : pandas, NumPy, scikit-learn, XGBoost, TensorFlow, PyTorch, YOLOv8, OpenCV. Outils : PostgreSQL, Django, React, Streamlit, Git, VS Code, Jupyter, Colab, LaTeX, Power BI, Excel."},
    {k:['langue','langues','anglais','english','francais','parles tu','tu parles','speak'],a:"Français (langue maternelle) et anglais B2."},
    {g:1,k:['ia','intelligence','machine','learning','deep','modele','modeles','algorithme'],a:"En IA, il utilise XGBoost, les forêts aléatoires et la régression logistique, des réseaux de neurones (LSTM, YOLOv8 avec PyTorch et TensorFlow) et des modèles de langage (FinBERT). Il explique toujours ses modèles avec SHAP, pour que les décisions soient compréhensibles."},
    {k:['stage','alternance','emploi','job','recrute','disponible','disponibilite','cherche','recherche','embaucher','quand','mai','2027','apprendre'],a:"Il cherche un stage de 3 à 4 mois à partir de mai 2027, en data science, data analyse, data engineering ou finance. Il le dit franchement : il n'a pas encore une longue expérience professionnelle, et c'est justement pour ça qu'il veut rejoindre une équipe exigeante, apprendre à son contact et prendre des responsabilités au fil du stage. Contact : "+MAIL+" ou +33 7 61 20 07 82."},
    {k:['pourquoi','atout','atouts','qualites','force','forces','difference','valeur'],a:"Son premier atout, c'est l'envie d'apprendre : il pose des questions, essaie, se trompe parfois et progresse vite. Ses projets le montrent : il raisonne en impact métier (pannes évitées, malades détectés, euros économisés), il explique ses modèles, et il sait livrer, seul comme en équipe (VIGIE construit en 4 jours avec 3 écoles)."},
    {k:['association','engagement','benevole','yitu','aebm','leadership','responsabilite'],a:"Il est ambassadeur bénévole de YITU Association en France depuis août 2026 : lutte contre la précarité étudiante, soutien scolaire et ateliers CV. Site de l'association : <a href='https://www.yituassociation.org' target='_blank' rel='noopener'>yituassociation.org</a>. Au Maroc, il était chargé académique de l'AEBM (2024-2025), où il coordonnait les activités académiques."},
    {k:['contact','contacter','email','mail','joindre','ecrire','linkedin','telephone','numero','appeler','tel','portable'],a:"Écrivez-lui à "+MAIL+" ou appelez-le au <b>+33 7 61 20 07 82</b>. Il est aussi sur <a href='https://www.linkedin.com/in/karambiri-ma' target='_blank' rel='noopener'>LinkedIn</a> et ses projets sont sur <a href='https://github.com/KARAMBIRI65' target='_blank' rel='noopener'>GitHub</a>."},
    {k:['adresse','habite','vit','ville','evry','localisation','situe','region','paris','ile'],a:"Il habite à Évry-Courcouronnes (91000), en Île-de-France, près de son école, l'ENSIIE."},
    {k:['github','code','depot','source'],a:"Son code est public sur <a href='https://github.com/KARAMBIRI65' target='_blank' rel='noopener'>github.com/KARAMBIRI65</a> : un dépôt par projet, avec un README et un notebook."},
    {k:['lettre','candidature','ouverte','motivation','motive','attentes','attend'],a:"Sa lettre de motivation est dans la section Motivation de cette page. Il y explique qu'il cherche une entreprise où il pourra évoluer et se dépasser, avec une équipe exigeante qui lui confie de vrais sujets. Son parcours et son engagement associatif lui ont appris à s'adapter et à prendre des responsabilités, et il veut à terme entraîner une équipe."},
    {k:['hobby','hobbies','loisir','loisirs','passion','passions','temps libre','lecture','lire','musique','cuisine','recette','recettes','cuisiner'],a:"En dehors des cours, Issa aime la lecture, la musique et surtout la cuisine. Il est grand fan de nouvelles recettes et aime tester et ajuster jusqu'à trouver le bon goût."},
    {k:['cv','curriculum','telecharger','pdf'],a:"Vous pouvez télécharger son CV en PDF avec le bouton « Télécharger mon CV » en haut de la page ou dans la section Contact. Deux versions au choix : une pour un stage, avec sa recherche de stage, et une simple. Toutes deux existent en français et en anglais."},
    {k:['prix','distinction','distinctions','recompense','recompenses','trophee','trophees','debat','debats','oratoire','eloquence','concours','laureat','excellence'],a:"Issa est lauréat du concours d'art oratoire de la Semaine scientifique du CETASSO à Oujda (2024) et finaliste du concours d'art oratoire de l'AEBM (2025). Pour ses résultats de 2023-2024 (moyenne annuelle supérieure à 16/20), il a aussi reçu des attestations d'excellence du CETASSO, de l'AEBM Oujda et de l'UEEMO. Il a aussi reçu le Prix d'Excellence du bureau exécutif du CETASSO, Université Mohammed Premier d'Oujda (2023-2024)."},
    {k:['merci','super','top','genial','parfait'],a:"Avec plaisir ! N'hésitez pas si vous avez d'autres questions sur Issa."}
  ];
  // Extra knowledge: small talk, identity, and English answers
  KB.push(
    {k:['robot','bot','chatgpt','claude','humain','assistant','tu es qui','qui es tu','es tu un','es tu une'],id:'me',a:"Je suis l'assistant du portfolio d'Issa. Je réponds à partir de son parcours, de ses projets et de son CV, directement dans votre navigateur, sans envoyer vos questions à un serveur. Pour une vraie discussion, le mieux reste de lui écrire."},
    {k:['ca va','comment vas','comment allez','forme'],a:"Très bien, merci. Et prêt à vous parler d'Issa. Par quoi voulez-vous commencer ?"},
    {k:['formulaire','message','envoyer'],a:"Vous pouvez lui écrire directement depuis le formulaire de la section Contact, avec un objet et un message. Il le reçoit dans sa boîte mail."}
  );
  var EXTRA={
    qui:{sel:'#a-propos',next:['Ton projet phare ?','Tes expériences ?','Tu cherches un stage ?'],en:"Issa Aziz KARAMBIRI is a second-year student in the engineering programme (Master 1 level) at ENSIIE (École Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise), on its Évry campus in France, training in applied mathematics and computer science with a focus on data science, AI and finance. He has done two internships and built data science projects across aerospace, environment, health, sport, real estate, cybersecurity, banking and markets."},
    ecole:{sel:'#parcours',next:['Tes compétences ?','Ton DUT ?','Tes expériences ?'],en:"He is in his second year (Master 1) at ENSIIE, an engineering school in Évry-Courcouronnes near Paris, since September 2025. Courses include probability, stochastic processes, optimisation, operations research, machine learning, deep learning and SQL/NoSQL databases. Before that he earned a DUT at EST Oujda in Morocco with highest honours."},
    parcours:{sel:'#parcours',next:['Ton école ?','Tes expériences ?','Pourquoi te recruter ?']},
    dut:{sel:'#parcours'},
    experience:{sel:'#experiences',next:['Parle-moi d’OptiTrade','Et GESCOM ?','Tes compétences ?'],en:"Two internships at ENTSI in Oujda, Morocco: data science intern on OptiTrade, an investment-support web app (March to May 2025), and web developer intern on GESCOM, a sales management app (June to July 2024)."},
    optitrade:{sel:'#experiences',next:['Et GESCOM ?','Tes compétences ?','Pourquoi te recruter ?']},
    gescom:{sel:'#experiences',next:['Parle-moi d’OptiTrade','Tes compétences ?']},
    vigie:{sel:'[data-dom=cyber]',next:['Ton rôle dans VIGIE ?','Tes autres projets ?','Ton engagement ?'],more:"Le constat de départ : près d'un senior sur deux a déjà été visé par ce type d'arnaque, et 516 millions d'euros ont été volés en France en 2025. VIGIE propose aussi des tutos et des quiz pour apprendre à reconnaître seul les arnaques. L'idée de l'équipe : on ne protège pas les seniors à leur place, on les rend plus autonomes et on rassure leur famille."},
    projet:{sel:'#projets',next:['Ton projet phare ?','C’est quoi VIGIE ?','Un projet en santé ?']},
    fier:{sel:'[data-dom=industrie]',more:"Il utilise le jeu de données officiel de la NASA (C-MAPSS). Son modèle XGBoost obtient une erreur moyenne de 11 vols, du niveau d'articles de recherche qui utilisent des réseaux de neurones. Le seuil d'alerte de 42 cycles a été choisi pour minimiser le coût total, car une panne ratée coûte bien plus cher qu'une inspection en trop.",next:['Et VIGIE ?','Un projet en santé ?','Tes compétences ?']},
    avion:{sel:'[data-dom=industrie]',more:"Il utilise le jeu de données officiel de la NASA (C-MAPSS). Son modèle XGBoost obtient une erreur moyenne de 11 vols, du niveau d'articles de recherche qui utilisent des réseaux de neurones. Le seuil d'alerte de 42 cycles a été choisi pour minimiser le coût total, car une panne ratée coûte bien plus cher qu'une inspection en trop.",next:['Un projet en environnement ?','Tes compétences ?']},
    crue:{sel:'[data-dom=environnement]',more:"Le modèle combine l'état de la rivière, la pluie récente, la nature du bassin et la saison. Il fonctionne aussi sur des rivières qu'il n'a jamais vues, avec une perte modérée, ce qui pourrait servir pour des cours d'eau peu surveillés.",next:['Et les déchets sur les plages ?','Un projet en santé ?']},
    dechet:{sel:'[data-dom=environnement]'},
    diabete:{sel:'[data-dom=sante]',more:"Le seuil de dépistage est réglé à 0,36 et non 0,5, parce que rater une malade coûte plus cher qu'une fausse alerte. Les facteurs les plus influents sont la glycémie, l'IMC, le nombre de grossesses et les antécédents familiaux, ce qui est cohérent avec la littérature médicale.",next:['Un projet en sport ?','Un projet en finance ?']},
    foot:{sel:'[data-dom=sport]',more:"Son Elo est codé à la main, et un test automatique vérifie qu'aucune information du futur ne fuit dans les données. Les bookmakers, qui connaissent compositions et blessures, atteignent 53 à 55 % de bons pronostics. Son modèle est à 52,5 %.",next:['Un projet en immobilier ?','Tes compétences ?']},
    parcelle:{sel:'[data-dom=immobilier]'},
    fraude:{sel:'[data-dom=banque]',next:['Et le scoring de crédit ?','Un projet en marchés ?']},
    credit:{sel:'[data-dom=banque]',next:['Et la fraude ?','La segmentation de clients ?']},
    segmentation:{sel:'[data-dom=banque]'},
    volatilite:{sel:'[data-dom=marches]'},
    portefeuille:{sel:'[data-dom=marches]'},
    sentiment:{sel:'[data-dom=marches]'},
    finance:{sel:'[data-dom=marches]',next:['La volatilité du CAC 40 ?','Parle-moi d’OptiTrade','Et la fraude ?']},
    competence:{sel:'#competences',next:['Tu parles anglais ?','Ton projet phare ?','Tu cherches un stage ?'],en:"Languages: Python, SQL, C++, C, R, OCaml, Java, PHP, HTML, CSS, JavaScript. Data and AI: pandas, NumPy, scikit-learn, XGBoost, TensorFlow, PyTorch, YOLOv8, OpenCV, SHAP, Hugging Face. Tools: PostgreSQL, Django, React, Streamlit, Git, VS Code, Jupyter, LaTeX, Power BI, Excel."},
    langue:{en:"French (native) and English (B2)."},
    stage:{sel:'#etat-d-esprit',next:['Pourquoi te recruter ?','Comment te contacter ?','Ta lettre de motivation ?'],en:"He is looking for a 3 to 4 month internship starting May 2027 in data science, data analysis, data engineering or finance. He is honest that he has limited professional experience, and that is exactly why he wants a demanding team where he can learn fast and take on responsibility. Contact: issaaziz.karambiri@ensiie.eu or +33 7 61 20 07 82."},
    pourquoi:{sel:'#etat-d-esprit',next:['Tu cherches un stage ?','Comment te contacter ?'],en:"His main strength is his eagerness to learn: he asks questions, tries, sometimes fails, and improves fast. His projects show he thinks in business impact, explains his models, and delivers both alone and in a team."},
    association:{sel:'#engagement',next:['Tes hobbies ?','Ta lettre de motivation ?']},
    contact:{sel:'#contact',copy:true,next:['Tu cherches un stage ?','Tu habites où ?'],en:"Email issaaziz.karambiri@ensiie.eu or call +33 7 61 20 07 82. You can also use the contact form on this page, or find him on LinkedIn and GitHub."},
    adresse:{sel:'#contact'},
    lettre:{sel:'#motivation',next:['Tu cherches un stage ?','Pourquoi te recruter ?']},
    hobby:{sel:'#hobbies',next:['Ton engagement ?','Qui es-tu ?'],en:"Outside of school, Issa enjoys reading, music and above all cooking. He loves trying new recipes."},
    black:{sel:'.also'},
    cv:{sel:'.cv-side',next:['Comment te contacter ?','Tu cherches un stage ?']},
    prix:{sel:'#distinctions',next:['Ton engagement ?','Tes hobbies ?']}
  };
  KB.forEach(function(it){ var x=EXTRA[it.id||it.k[0]]; if(x) for(var key in x) it[key]=x[key]; });
  // English knowledge base (same intents as the French one)
  var EN_KB={
    bonjour:{t:'Hello',a:"Hello! I'm Issa's assistant. Ask me about his background, his projects, his experience or how to contact him."},
    qui:{t:'Who are you',next:['Your flagship project?','Your experience?','Looking for an internship?'],a:"Issa Aziz KARAMBIRI is a second-year student in the engineering programme (Master 1 level) at ENSIIE (École Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise), on its Évry campus in France, training in applied mathematics and computer science with a focus on data science, AI and finance. He has done two internships in Morocco and published data science projects across many sectors: aerospace, environment, health, sport, real estate, cybersecurity, banking and markets."},
    ecole:{t:'School',next:['Your skills?','Your DUT?','Your experience?'],a:"He has been in the second year of the engineering programme at ENSIIE (Évry-Courcouronnes, near Paris) since September 2025, equivalent to a Master 1. His courses include probability, stochastic processes, optimisation, operations research, machine learning, deep learning and SQL and NoSQL databases. Before that, he earned a DUT (two-year technology degree) at the École Supérieure de Technologie d'Oujda (2023-2025) with highest honours."},
    parcours:{t:'Background',next:['Your school?','Your experience?','Why hire you?'],a:"His path is international: he earned a DUT at the École Supérieure de Technologie d'Oujda in Morocco with highest honours, then joined ENSIIE in France. He is used to adapting quickly to new environments."},
    dut:{t:'DUT',a:"He earned a DUT (two-year technology degree) at the École Supérieure de Technologie d'Oujda (2023-2025), with highest honours (mention Très Bien)."},
    experience:{t:'Experience',next:['Tell me about OptiTrade','And GESCOM?','Your skills?'],a:"Two internships at ENTSI in Oujda: data science intern on <b>OptiTrade</b> (March to May 2025), an investment support app, and web developer intern on <b>GESCOM</b> (June to July 2024), a sales management app."},
    optitrade:{t:'OptiTrade',next:['And GESCOM?','Your skills?','Why hire you?'],a:"OptiTrade is an investment support web app built during his data science internship (March to May 2025). He cleaned 300,000 rows of stock data (246,437 kept) and compared 4 models (linear regression, Random Forest, XGBoost, LSTM) to recommend buying, selling or holding a stock, using Python, Django REST, React and PostgreSQL."},
    gescom:{t:'GESCOM',next:['Tell me about OptiTrade','Your skills?'],a:"GESCOM is a sales management app (customers, products, sales, purchases, user roles) he built during his internship with PHP, MySQL, Bootstrap and jQuery. He also optimised the slowest SQL queries."},
    vigie:{t:'VIGIE',next:['Your role in VIGIE?','Your other projects?','Your volunteering?'],a:"VIGIE is an anti-scam assistant for seniors, built in 4 days during the Project Challenge by 5 students from 3 schools (ENSIIE, Télécom SudParis, IMT-BS). It spots fraudulent messages, warns before the click, explains the danger simply and alerts a relative if the risk is high. Issa was the technical and prototyping lead: app code, fraudulent link detection and screens readable by a 74-year-old.",more:"The starting point: almost one senior in two has already been targeted by this kind of scam, and €516 million was stolen in France in 2025. VIGIE also offers tutorials and quizzes so seniors learn to recognise scams on their own. The team's idea: don't protect seniors in their place, make them more independent and reassure their families."},
    projet:{t:'Projects',next:['Your flagship project?','What is VIGIE?','A health project?'],a:"His projects cover predictive maintenance of aircraft engines, flood forecasting, VIGIE (anti-scam), beach litter detection with computer vision, diabetes screening, football match prediction, building plot analysis, fraud detection, credit scoring, customer segmentation, CAC 40 volatility, portfolio optimisation and sentiment analysis. Ask me about any of them."},
    fier:{t:'Flagship project',next:['And VIGIE?','A health project?','Your skills?'],a:"His flagship project is predictive maintenance of aircraft engines: on NASA data, it detects 25 imminent failures out of 25, with only 5 false alarms out of 75 healthy engines. ",more:"He uses NASA's official C-MAPSS dataset. His XGBoost model reaches an average error of 11 flights, on par with research papers that use neural networks. The 42-cycle alert threshold was chosen to minimise total cost, because a missed failure costs far more than an extra inspection."},
    avion:{t:'Aircraft engines',next:['An environment project?','Your skills?'],a:"Predictive maintenance: from turbofan sensor data, the model (XGBoost) predicts how many flights remain before failure, with a typical error of 11 flights, and triggers inspection at the right time. Result: 25 imminent failures detected out of 25. ",more:"He uses NASA's official C-MAPSS dataset. His XGBoost model reaches an average error of 11 flights, on par with research papers that use neural networks. The 42-cycle alert threshold was chosen to minimise total cost, because a missed failure costs far more than an extra inspection."},
    crue:{t:'Floods',next:['And the beach litter?','A health project?'],a:"Flood forecasting: an alert system on 19 French rivers with 20 years of data (INRAE, Météo-France). It forecasts 79 % of floods, on average 2.4 days ahead. ",more:"The model combines the river's state, recent rainfall, the type of catchment and the season. It also works on rivers it has never seen, with a moderate loss, which could help for poorly monitored streams."},
    dechet:{t:'Beach litter',a:"Beach litter detection: he labelled images by hand (6 classes), augmented the data, then trained YOLOv8 (PyTorch) on GPU. Result: 89.5 % F1-score. The remaining weak point: small objects."},
    diabete:{t:'Diabetes',next:['A sport project?','A finance project?'],a:"Type 2 diabetes screening: the model detects 87 % of patients, versus 46 % for the clinical rule based on blood glucose alone, and explains every prediction with SHAP. ",more:"The screening threshold is set at 0.36 rather than 0.5, because missing a patient costs more than a false alarm. The most influential factors are blood glucose, BMI, number of pregnancies and family history, which is consistent with the medical literature."},
    foot:{t:'Football',next:['A real estate project?','Your skills?'],a:"Football match prediction: a Streamlit app trained on 28,900 matches from Europe's top 5 leagues. When the model is more than 75 % confident, it is right 83 % of the time. ",more:"His Elo rating is hand-coded, and an automated test checks that no future information leaks into the data. Bookmakers, who know line-ups and injuries, reach 53 to 55 % correct predictions. His model is at 52.5 %."},
    parcelle:{t:'Real estate',a:"Building plot analysis: a tool that says whether to buy, negotiate or avoid a plot of land. On 1,200 test plots, it is the only profitable strategy (+€1.6M), with an AUC of 0.92 for buildability. "},
    fraude:{t:'Fraud',next:['And credit scoring?','A markets project?'],a:"Bank fraud detection: with only 0.17 % fraud in the data, the XGBoost model cuts losses by 77 % and 87 % of its alerts are correct. "},
    credit:{t:'Credit scoring',next:['And fraud?','Customer segmentation?'],a:"Credit scoring: a web app that estimates default risk, makes a decision, explains it with SHAP and offers “what if” scenarios. It cuts the cost of errors by 3 compared with “accept everyone”. "},
    segmentation:{t:'Segmentation',a:"Bank customer segmentation: 41,188 customers split into 5 segments with K-means. Result: 20 % fewer calls for only 8 % of subscriptions lost. "},
    volatilite:{t:'Volatility',a:"CAC 40 volatility: five models compared (naive, HAR, GARCH, GJR-GARCH and an LSTM network) on 20 years of data, then applied to Value at Risk. "},
    portefeuille:{t:'Portfolio',a:"Portfolio optimisation: Markowitz, clustering and HRP on 32 CAC 40 stocks from 2015 to 2025, validated by a backtest with no look-ahead bias, fees included. "},
    sentiment:{t:'Sentiment',a:"Financial news sentiment: he measures the tone of news headlines with FinBERT, a language model, and tests whether it helps predict stock returns. "},
    black:{t:'School projects',a:"For school projects, he coded the Black-Scholes model in C++ (European option pricing), an OCaml virtual machine in C (bytecode, stack, memory) and a mini relational DBMS in OCaml: design, implementation and analysis of a working relational database management system (INPF12 module, Computer Science and Functional Programming, ENSIIE 1st year, 2025-2026)."},
    finance:{t:'Finance',next:['CAC 40 volatility?','Tell me about OptiTrade','And fraud?'],a:"Finance is one of his strengths: OptiTrade during his internship, fraud, credit, segmentation, volatility, portfolio, sentiment and Black-Scholes. But his profile is broader: he applies data science to industry, health, environment, cybersecurity, sport and real estate."},
    competence:{t:'Skills',next:['Do you speak English?','Your flagship project?','Looking for an internship?'],a:"Languages: Python, SQL, C++, C, R, OCaml, Java, PHP, HTML, CSS and JavaScript. Data and AI: pandas, NumPy, scikit-learn, XGBoost, TensorFlow, PyTorch, YOLOv8, OpenCV, SHAP, Hugging Face. Tools: PostgreSQL, Django, React, Streamlit, Git, VS Code, Jupyter, Colab, LaTeX, Power BI, Excel."},
    langue:{t:'Languages',a:"French (native) and English (B2)."},
    ia:{t:'AI',a:"In AI, he uses XGBoost, random forests and logistic regression, neural networks (LSTM, YOLOv8 with PyTorch and TensorFlow) and language models (FinBERT). He always explains his models with SHAP, so that decisions are understandable."},
    stage:{t:'Internship',next:['Why hire you?','How can I contact you?','Your cover letter?'],a:"He is looking for a 3 to 4 month internship starting May 2027 in data science, data analysis, data engineering or finance. He says it openly: he doesn't have long professional experience yet, and that is exactly why he wants to join a demanding team, learn from it and take on more responsibility as the internship goes on. Contact: "+MAIL+" or +33 7 61 20 07 82."},
    pourquoi:{t:'Why hire',next:['Looking for an internship?','How can I contact you?'],a:"His first strength is his eagerness to learn: he asks questions, tries, sometimes gets it wrong and improves fast. His projects show it: he thinks in business impact (failures avoided, patients detected, euros saved), he explains his models, and he delivers, alone or in a team (VIGIE built in 4 days with 3 schools)."},
    association:{t:'Volunteering',next:['Your hobbies?','Your cover letter?'],a:"He has been a volunteer ambassador for YITU Association in France since August 2026: fighting student poverty, tutoring and CV workshops. The association's website: <a href='https://www.yituassociation.org' target='_blank' rel='noopener'>yituassociation.org</a>. In Morocco, he was academic officer of the AEBM student association (2024-2025), where he coordinated academic activities."},
    contact:{t:'Contact',next:['Looking for an internship?','Where do you live?'],a:"Email him at "+MAIL+" or call <b>+33 7 61 20 07 82</b>. You can also use the contact form on this page. He is on <a href='https://www.linkedin.com/in/karambiri-ma' target='_blank' rel='noopener'>LinkedIn</a> and his projects are on <a href='https://github.com/KARAMBIRI65' target='_blank' rel='noopener'>GitHub</a>."},
    adresse:{t:'Location',a:"He lives in Évry-Courcouronnes (91000), in the Paris region, near his school, ENSIIE."},
    github:{t:'GitHub',a:"His code is public at <a href='https://github.com/KARAMBIRI65' target='_blank' rel='noopener'>github.com/KARAMBIRI65</a>: one repository per project, with a README and a notebook."},
    lettre:{t:'Cover letter',next:['Looking for an internship?','Why hire you?'],a:"His cover letter is in the Motivation section of this page. He explains that he is looking for a company where he can grow and push his limits, with a demanding team that gives him real topics. His journey and his volunteering taught him to adapt and take on responsibility, and in the long run he wants to lead a team."},
    hobby:{t:'Hobbies',next:['Your volunteering?','Who are you?'],a:"Outside of class, Issa enjoys reading, music and above all cooking. He is a big fan of new recipes and likes to test and adjust until the taste is just right."},
    cv:{t:'CV',next:['How can I contact you?','Looking for an internship?'],a:"You can download his CV as a PDF with the “Download my CV” button at the top of the page or in the Contact section. You can choose an internship version or a standard one, both in English and French."},
    prix:{t:'Awards',next:['Your volunteering?','Your hobbies?'],a:"Issa won the public speaking contest at the CETASSO Science Week in Oujda (2024) and was a finalist in the AEBM public speaking contest (2025). For his 2023-2024 results (yearly average above 16/20), he also received certificates of excellence from CETASSO, AEBM Oujda and UEEMO. He also received the Award of Excellence from the CETASSO executive board, Mohammed First University, Oujda (2023-2024)."},
    merci:{t:'Thanks',a:"You're welcome! Feel free to ask anything else about Issa."},
    me:{t:'About this bot',a:"I'm the assistant of Issa's portfolio. I answer from his background, his projects and his CV, right in your browser, without sending your questions to a server. For a real conversation, the best is still to write to him."},
    'ca va':{t:'How are you',a:"Very well, thank you. And ready to tell you about Issa. Where would you like to start?"},
    formulaire:{t:'Contact form',a:"You can write to him directly from the form in the Contact section, with a subject and a message. It goes straight to his inbox."}
  };
  var DEFAULT_NEXT_EN=['Who are you?','Your flagship project?','Looking for an internship?','Why hire you?'];
  KB.forEach(function(it){ var e=EN_KB[it.id||it.k[0]]; if(!e) return; it.en=e.a; it.moreEn=e.more||null; it.nextEn=e.next||null; it.t=e.t; var m=/github\.com\/KARAMBIRI65\/([\w-]+)/.exec(it.a); if(m) it.en=it.en.replace(/\s*$/,' ')+'<a href="'+GH+m[1]+'" target="_blank" rel="noopener">view the project on GitHub</a>'; });
  var DEFAULT_NEXT=['Qui es-tu ?','Ton projet phare ?','Tu cherches un stage ?','Pourquoi te recruter ?'];
  var EN2FR={who:'qui',about:'qui',yourself:'qui',school:'ecole',study:'ecole',studies:'ecole',university:'ecole',education:'ecole',degree:'ecole',
    skills:'competences',skill:'competences',stack:'competences',tools:'competences',internship:'stage',intern:'stage',job:'stage',available:'stage',hiring:'stage',
    why:'pourquoi',hire:'pourquoi',strengths:'pourquoi',contact:'contact',email:'contact',phone:'contact',reach:'contact',languages:'langues',english:'langues',speak:'langues',
    projects:'projets',project:'projets',hobbies:'hobbies',hobby:'hobbies',interests:'hobbies',experience:'experience',experiences:'experience',work:'experience',
    where:'adresse',live:'adresse',finance:'finance',plane:'avion',engine:'avion',flood:'crue',floods:'crue',diabetes:'diabete',football:'foot',soccer:'foot',fraud:'fraude',credit:'credit'};
  var EN2FR_MORE={flagship:'phare',best:'meilleur',proud:'fier',favorite:'prefere',favourite:'prefere',looking:'cherche',when:'quand',background:'parcours',country:'pays',countries:'pays',morocco:'maroc',
    stock:'bourse',stocks:'actions',investment:'investissement',scam:'arnaque',scams:'arnaques',litter:'dechets',waste:'dechets',trash:'dechets',beach:'plage',beaches:'plages',health:'sante',environment:'climat',
    matches:'match',land:'terrain',plot:'parcelle',plots:'parcelle',estate:'immobilier',bank:'banque',banking:'banque',customer:'clients',customers:'clients',loan:'pret',volatility:'volatilite',portfolio:'portefeuille',
    news:'actualite',ai:'ia',artificial:'intelligence',model:'modele',models:'modeles',volunteering:'engagement',volunteer:'benevole',charity:'association',letter:'lettre',cover:'lettre',thanks:'merci',thank:'merci',great:'super',
    city:'ville',located:'situe',address:'adresse',form:'formulaire',human:'humain',repository:'depot',strength:'force',reading:'lecture',music:'musique',cooking:'cuisine',recipes:'recettes',french:'francais',
    aircraft:'avion',resume:'cv',download:'telecharger',award:'prix',awards:'prix',prize:'prix',prizes:'prix',debate:'debat',speaking:'oratoire',contest:'concours',trophy:'trophee',markets:'marches',market:'marche',segments:'segmentation',scholes:'scholes',sentiment:'sentiment',location:'adresse',dbms:'sgbd',database:'bases',databases:'bases'};
  for(var ek in EN2FR_MORE) if(!EN2FR[ek]) EN2FR[ek]=EN2FR_MORE[ek];
  var ENWORDS=['what','who','your','you','are','is','the','why','how','where','do','does','can','tell','me','about','hello','hi','which','have'];
  var MORE_RE=/^(et (apres|ensuite|alors)|plus|encore|dis m en plus|dis moi en plus|en savoir plus|details?|developpe|precise|c est tout|tell me more|more)\b/;
  function norm(t){ return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim(); }
  function lev(a,b){ if(Math.abs(a.length-b.length)>2) return 9; var d=[],i,j; for(i=0;i<=a.length;i++){d[i]=[i];} for(j=1;j<=b.length;j++){d[0][j]=j;}
    for(i=1;i<=a.length;i++) for(j=1;j<=b.length;j++) d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a[i-1]===b[j-1]?0:1)); return d[a.length][b.length]; }
  function isEnglish(words){ var n=0; words.forEach(function(w){ if(ENWORDS.indexOf(w)>-1) n++; }); return n>=2; }
  function score(it,words,joined){
    var sc=0, w=it.g?1:2;
    it.k.forEach(function(kw){
      if(kw.indexOf(' ')>-1){ if(joined.indexOf(' '+kw+' ')>-1) sc+=w+1; return; }
      if(words.indexOf(kw)>-1){ sc+=w; return; }
      for(var i=0;i<words.length;i++){ var x=words[i];
        if(kw.length>=5 && x.length>=4 && (x.indexOf(kw)===0 || kw.indexOf(x)===0)){ sc+=w*.75; return; }
        if(kw.length>=5 && lev(x,kw)<=(kw.length>=8?2:1)){ sc+=w*.75; return; } }
    });
    return sc;
  }
  var lastIt=null;
  function think(q){
    var words=norm(q).split(' ').filter(Boolean), en=LANG==='en'||isEnglish(words);
    words=words.map(function(w){ return EN2FR[w]||w; });
    var joined=' '+words.join(' ')+' ';
    if(lastIt && lastIt.more && (MORE_RE.test(norm(q)) || words.length<=2 && /^(et|pourquoi|comment|ok)$/.test(words[0]||''))){ var m=lastIt; lastIt=Object.assign({},lastIt,{more:null}); return {items:[{a:m.more,en:m.moreEn,sel:m.sel,next:m.next,nextEn:m.nextEn}],en:en}; }
    var ranked=KB.map(function(it,idx){ var sc=score(it,words,joined); if(idx===0 && words.length>3) sc=Math.min(sc,1); return {it:it,sc:sc}; })
      .filter(function(r){ return r.sc>0; }).sort(function(a,b){ return b.sc-a.sc; });
    if(!ranked.length || ranked[0].sc<1) return {items:[],en:en,guess:ranked.slice(0,3).map(function(r){return r.it;})};
    var items=[ranked[0].it];
    if(ranked[1] && ranked[1].sc>=2 && !ranked[1].it.g && ranked[1].it!==ranked[0].it && ranked[1].sc>=ranked[0].sc*(/ (et|and|puis|aussi) /.test(joined)?.45:.8)) items.push(ranked[1].it);
    lastIt=items.filter(function(it){return it.more;})[0]||items[0];
    return {items:items,en:en};
  }
  var bot=document.getElementById('bot'), fab=document.getElementById('bot-open'), log=document.getElementById('bot-log'), inp=document.getElementById('bot-in'), sugg=document.getElementById('bot-sugg');
  function animateWords(el){
    if(reduce) return;
    var walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT), nodes=[], n, k=0;
    while((n=walker.nextNode())) nodes.push(n);
    nodes.forEach(function(t){ var parts=t.textContent.split(/(\s+)/), frag=document.createDocumentFragment();
      parts.forEach(function(p){ if(!p) return; if(/^\s+$/.test(p)){ frag.appendChild(document.createTextNode(p)); return; }
        var s=document.createElement('span'); s.className='w'; s.style.animationDelay=Math.min(k*18,1400)+'ms'; s.textContent=p; frag.appendChild(s); k++; });
      t.parentNode.replaceChild(frag,t); });
  }
  function bubble(html,who){ var d=document.createElement('div'); d.className='msg '+who; if(who==='me') d.textContent=html; else d.innerHTML=html; log.appendChild(d); log.scrollTop=log.scrollHeight; return d; }
  function actions(item){
    if(!item) return null;
    var row=document.createElement('div'); row.className='msg-acts'; var any=false;
    if(item.sel && document.querySelector(item.sel)){ any=true; var b=document.createElement('button'); b.type='button'; b.textContent=T('Voir sur la page','Show on page');
      b.addEventListener('click',function(){ var t=document.querySelector(item.sel); if(window.innerWidth<700) close(); t.scrollIntoView({behavior:reduce?'auto':'smooth',block:'center'}); t.classList.remove('flash'); void t.offsetWidth; t.classList.add('flash'); }); row.appendChild(b); }
    if(item.more){ any=true; var m=document.createElement('button'); m.type='button'; m.textContent=T('En savoir plus','Tell me more'); m.addEventListener('click',function(){ ask(T('Dis m’en plus','Tell me more')); }); row.appendChild(m); }
    if(item.copy){ any=true; var c=document.createElement('button'); c.type='button'; c.textContent=T('Copier l’e-mail','Copy email');
      c.addEventListener('click',function(){ try{ navigator.clipboard.writeText('issaaziz.karambiri@ensiie.eu').then(function(){ c.textContent=T('Copié ✓','Copied ✓'); },function(){ c.textContent='issaaziz.karambiri@ensiie.eu'; }); }catch(e){ c.textContent='issaaziz.karambiri@ensiie.eu'; } }); row.appendChild(c); }
    return any?row:null;
  }
  function chips(list,en){ sugg.innerHTML=''; (list&&list.length?list:(en?DEFAULT_NEXT_EN:DEFAULT_NEXT)).slice(0,4).forEach(function(s){ var b=document.createElement('button'); b.type='button'; b.textContent=s; b.addEventListener('click',function(){ ask(s); }); sugg.appendChild(b); }); }
  var busy=false;
  function ask(q){
    q=(q||'').trim(); if(!q||busy) return;
    busy=true; bubble(q,'me'); inp.value='';
    var r=think(q), html, item=r.items[r.items.length-1];
    if(r.items.length){
      html=r.items.map(function(it){ return (r.en && it.en) ? it.en : it.a; }).join('<br><br>');
    } else if(r.guess && r.guess.length){
      html=r.en?"I'm not sure I understood. Did you mean one of these topics? Otherwise, email Issa directly at "+MAIL+".":"Je ne suis pas sûr d'avoir compris. Vous pensiez à l'un de ces sujets ? Sinon, écrivez directement à Issa : "+MAIL+".";
    } else {
      html=(r.en?"I don't have that information. You can email Issa directly at ":"Je n'ai pas cette information. Je connais son parcours, ses projets, ses expériences, ses compétences, son engagement, ses hobbies et sa recherche de stage. Pour le reste, écrivez-lui à ")+MAIL+".";
    }
    var t=bubble('<span class="dots"><i></i><i></i><i></i></span>','it typing');
    setTimeout(function(){
      t.remove(); var d=bubble(html,'it'); animateWords(d);
      var a=actions(item); if(a){ log.appendChild(a); }
      log.scrollTop=log.scrollHeight;
      chips(r.items.length ? (r.en?item.nextEn:item.next) : (r.guess||[]).map(function(g){ return r.en&&g.t ? g.t+'?' : g.k[0].charAt(0).toUpperCase()+g.k[0].slice(1)+' ?'; }), r.en);
      log.scrollTop=log.scrollHeight; requestAnimationFrame(function(){ log.scrollTop=log.scrollHeight; });
      busy=false;
    }, reduce?0:Math.min(350+html.length*1.2,1100));
  }
  // header reset button
  var reset=document.createElement('button'); reset.type='button'; reset.className='bot-x bot-reset'; function resetLbl(){ reset.setAttribute('aria-label',T('Nouvelle conversation','New conversation')); reset.title=T('Nouvelle conversation','New conversation'); } resetLbl(); langHooks.push(resetLbl); reset.innerHTML='↺';
  document.querySelector('.bot-head').insertBefore(reset,document.getElementById('bot-close'));
  function greet(){ log.innerHTML=''; lastIt=null; var d=bubble(T("Bonjour ! Je suis l'assistant d'Issa. Posez-moi n'importe quelle question sur son parcours, ses projets, ses compétences ou sa recherche de stage. I also understand English.","Hi! I'm Issa's assistant. Ask me anything about his background, his projects, his skills or his internship search. Je parle aussi français."),'it'); animateWords(d); chips(LANG==='en'?DEFAULT_NEXT_EN:DEFAULT_NEXT, LANG==='en'); }
  reset.addEventListener('click',greet);
  var greeted=false;
  function open(){ bot.hidden=false; fab.hidden=true; tease.hidden=true; if(!greeted){ greet(); greeted=true; } inp.focus(); }
  langHooks.push(function(){ if(greeted) greet(); });
  function close(){ bot.hidden=true; fab.hidden=false; fab.focus(); }
  // teaser bubble
  var tease=document.createElement('button'); tease.type='button'; tease.className='bot-tease'; tease.hidden=true; function teaseTxt(){ tease.innerHTML=T('<b>Une question sur Issa ?</b><span>Je réponds en direct, en français ou en anglais.</span>','<b>A question about Issa?</b><span>I answer instantly, in English or French.</span>'); } teaseTxt(); langHooks.push(teaseTxt);
  document.body.appendChild(tease); tease.addEventListener('click',open);
  var teased=false; try{ teased=sessionStorage.getItem('iak-tease')==='1'; }catch(e){}
  if(!teased) setTimeout(function(){ if(bot.hidden){ tease.hidden=false; try{ sessionStorage.setItem('iak-tease','1'); }catch(e){} setTimeout(function(){ tease.hidden=true; },9000); } },7000);
  fab.addEventListener('click',open);
  document.getElementById('bot-close').addEventListener('click',close);
  document.addEventListener('keydown',function(e){ if(e.key==='Escape' && !bot.hidden) close(); });
  document.getElementById('bot-form').addEventListener('submit',function(e){ e.preventDefault(); ask(inp.value); });

  // Theme toggle
  var tb=document.getElementById('theme-btn');
  function syncTheme(){ var l=document.documentElement.classList.contains('light'); tb.setAttribute('aria-label', l?T('Passer en thème sombre','Switch to dark theme'):T('Passer en thème clair','Switch to light theme')); tb.title=T('Thème clair / sombre','Light / dark theme'); }
  langHooks.push(function(){ syncTheme(); });
  tb.addEventListener('click',function(){
    var l=document.documentElement.classList.toggle('light');
    try{ localStorage.setItem('iak-theme', l?'light':'dark'); }catch(e){}
    syncTheme(); if(reduce) size();
  });
  syncTheme();

  // Scroll progress
  var prog=document.getElementById('progress');
  function onScroll(){ var h=document.documentElement; var m=h.scrollHeight-h.clientHeight; prog.style.transform='scaleX('+(m>0?h.scrollTop/m:0)+')'; }
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();

  // Role scramble
  var ROLES={fr:['data scientist','ingénieur IA','data analyst finance','ML engineer','problem solver'],en:['data scientist','AI engineer','finance data analyst','ML engineer','problem solver']}, roles=ROLES[LANG], ri=0, roleEl=document.getElementById('role');
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
  langHooks.push(function(){ roles=ROLES[LANG]; ri=0; if(roleEl) roleEl.textContent=roles[0]; });

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
    function sel(){ var rg=document.createRange(); rg.selectNodeContents(el); var s=getSelection(); s.removeAllRanges(); s.addRange(rg); b.textContent=T('Numéro sélectionné','Number selected'); }
    try{ navigator.clipboard.writeText('+33761200782').then(function(){ b.textContent=T('Copié ✓','Copied ✓'); setTimeout(function(){b.textContent=T('Copier le numéro','Copy number');},1800); }, sel); }catch(e){ sel(); }
  });

  // Contact form (Web3Forms) and visit notification
  var W3F_KEY = document.querySelector('#cform [name=access_key]').value;
  var w3fReady = W3F_KEY && W3F_KEY.indexOf('VOTRE_')!==0;
  var NOTIFY_VISITS = true; // un e-mail au premier passage de chaque nouveau visiteur
  var form=document.getElementById('cform'), st=document.getElementById('cf-status'), sendBtn=document.getElementById('cf-send');
  var subj=document.getElementById('cf-subject'), tbtns=form.querySelectorAll('.topics button'), msg=document.getElementById('cf-msg'), cnt=document.getElementById('cf-count');
  tbtns.forEach(function(t){ t.addEventListener('click',function(){ tbtns.forEach(function(x){ x.setAttribute('aria-pressed', x===t?'true':'false'); }); subj.value=t.dataset.t; msg.focus(); }); });
  subj.addEventListener('input',function(){ tbtns.forEach(function(x){ x.setAttribute('aria-pressed', x.dataset.t===subj.value?'true':'false'); }); });
  msg.addEventListener('input',function(){ cnt.textContent=msg.value.length+' / 2000'; });
  form.addEventListener('submit',function(e){
    e.preventDefault();
    st.className='cstatus'; form.classList.add('tried');
    if(!form.checkValidity()){ st.textContent=T('Merci de remplir tous les champs avec un e-mail valide.','Please fill in every field with a valid email.'); st.classList.add('err'); return; }
    if(!w3fReady){ st.textContent=T("Le formulaire n'est pas encore activé. Écrivez-moi à issaaziz.karambiri@ensiie.eu.",'The form is not active yet. Please email me at issaaziz.karambiri@ensiie.eu.'); st.classList.add('err'); return; }
    var data=Object.fromEntries(new FormData(form));
    data.subject='[Portfolio] '+data.subject; data.from_name='Portfolio IAK';
    sendBtn.disabled=true; st.textContent=T('Envoi en cours…','Sending…');
    fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)})
      .then(function(r){ return r.json(); })
      .then(function(j){ if(j.success){ st.textContent=T('Message envoyé. Je vous réponds vite.','Message sent. I will reply soon.'); st.classList.add('ok'); form.reset(); form.classList.remove('tried'); cnt.textContent='0 / 2000'; tbtns.forEach(function(x){ x.setAttribute('aria-pressed','false'); }); } else throw 0; })
      .catch(function(){ st.textContent=T("L'envoi a échoué. Écrivez-moi à issaaziz.karambiri@ensiie.eu.",'Sending failed. Please email me at issaaziz.karambiri@ensiie.eu.'); st.classList.add('err'); })
      .then(function(){ sendBtn.disabled=false; });
  });
  if(w3fReady && NOTIFY_VISITS){
    var seen=null; try{ seen=localStorage.getItem('iak-seen'); }catch(e){}
    if(!seen && /(github\.io|issakarambiri\.com)$/.test(location.hostname) && localStorage.getItem('iak-owner')!=='1' && !/[?&]proprio=/.test(location.search)){
      try{ localStorage.setItem('iak-seen','1'); }catch(e){}
      fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},
        body:JSON.stringify({access_key:W3F_KEY,subject:'Nouveau visiteur sur ton portfolio',from_name:'Portfolio IAK',
          message:'Une nouvelle personne consulte ton portfolio.\nDate : '+new Date().toLocaleString('fr-FR')+'\nVenue depuis : '+(document.referrer||'accès direct')+'\nAppareil : '+(/Mobi/.test(navigator.userAgent)?'mobile':'ordinateur')})}).catch(function(){});
    }
  }

  // Copy e-mail
  document.getElementById('copy-mail').addEventListener('click',function(){
    var b=this, el=document.getElementById('mail');
    function sel(){ var rg=document.createRange(); rg.selectNodeContents(el); var s=getSelection(); s.removeAllRanges(); s.addRange(rg); b.textContent=T('Adresse sélectionnée','Address selected'); }
    try{ navigator.clipboard.writeText(el.textContent).then(function(){ b.textContent=T('Copiée ✓','Copied ✓'); setTimeout(function(){b.textContent=T("Copier l'adresse",'Copy address');},1800); }, sel); }catch(e){ sel(); }
  });

  // ===== Contrôle du site : mode propriétaire, CV sur formulaire, protection, visiteurs fidèles =====
  (function(){
    var OWNER_HASH='ab3c07090426e705185698b5ae54cbea229fd57727dd085c34893ed24c39aebb';
    var html=document.documentElement, onGH=/(github\.io|issakarambiri\.com)$/.test(location.hostname);
    if(onGH && window.top!==window.self){ try{ window.top.location=window.self.location.href; }catch(e){ document.documentElement.innerHTML=''; return; } }
    function ls(k,v){ try{ if(v===undefined) return localStorage.getItem(k); if(v===null) localStorage.removeItem(k); else localStorage.setItem(k,v); }catch(e){ return null; } }
    function owner(){ return ls('iak-owner')==='1'; }
    function esc(t){ return String(t).replace(/[&<>"']/g,function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
    function w3f(subject,message,extra){
      var d={access_key:W3F_KEY,subject:subject,from_name:'Portfolio IAK',message:message};
      if(extra) for(var k in extra) d[k]=extra[k];
      return fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(d)}).then(function(r){ return r.json(); });
    }
    function toast(htmlStr,actions,ms){
      var old=document.querySelector('.iak-toast'); if(old) old.remove();
      var t=document.createElement('div'); t.className='iak-toast'; t.setAttribute('role','status');
      t.innerHTML='<div class="iak-toast-t">'+htmlStr+'</div>'+(actions||'')+'<button type="button" class="iak-toast-x" aria-label="'+T('Fermer','Close')+'">×</button>';
      document.body.appendChild(t); requestAnimationFrame(function(){ t.classList.add('on'); });
      function close(){ t.classList.remove('on'); setTimeout(function(){ t.remove(); },300); }
      t.querySelector('.iak-toast-x').addEventListener('click',close);
      if(ms) setTimeout(close,ms);
      return {el:t,close:close};
    }

    // --- Mode propriétaire : ?proprio=CODE active, ?proprio=off désactive ---
    var q=new URLSearchParams(location.search).get('proprio');
    function startProtect(){ if(!owner()) protect(); else html.classList.add('is-owner'); }
    if(q){
      history.replaceState(null,'',location.pathname+location.hash);
      if(q==='off'){ ls('iak-owner',null); ls('skipgc',null); startProtect(); toast(T('Mode propriétaire désactivé.','Owner mode off.'),'',3000); }
      else if(window.crypto&&crypto.subtle){
        crypto.subtle.digest('SHA-256',new TextEncoder().encode(q)).then(function(b){
          var h=Array.prototype.map.call(new Uint8Array(b),function(x){ return ('0'+x.toString(16)).slice(-2); }).join('');
          if(h===OWNER_HASH){ ls('iak-owner','1'); ls('skipgc','t'); html.classList.add('is-owner'); toast(T('Mode propriétaire activé sur cet appareil : pas de protection, pas de formulaire, tes visites ne sont pas comptées.','Owner mode on for this device.'),'',5000); }
          else startProtect();
        });
      } else startProtect();
    } else startProtect();

    // --- Protection contre la copie (désactivée en mode propriétaire) ---
    function protect(){
      html.classList.add('protect');
      function free(t){ return t && t.closest && t.closest('input,textarea,select,.bot-form,.cvg-box'); }
      document.addEventListener('contextmenu',function(e){ if(!owner()&&!free(e.target)) e.preventDefault(); });
      ['copy','cut'].forEach(function(ev){ document.addEventListener(ev,function(e){ if(!owner()&&!free(e.target)){ e.preventDefault(); toast(T('Le contenu de ce site est protégé. Pour toute demande, utilisez le formulaire de contact.','This content is protected. Please use the contact form for any request.'),'',3500); } }); });
      document.addEventListener('dragstart',function(e){ if(!owner()&&e.target.tagName==='IMG') e.preventDefault(); });
      document.addEventListener('keydown',function(e){
        if(owner()) return;
        var k=(e.key||'').toLowerCase(), mod=e.ctrlKey||e.metaKey;
        if((mod&&['s','u','p'].indexOf(k)>-1)||(mod&&e.shiftKey&&['i','j','c','s'].indexOf(k)>-1)||k==='f12'){ e.preventDefault(); }
        if(mod&&(k==='c'||k==='x'||k==='a')&&!free(e.target)) e.preventDefault();
      });
      document.addEventListener('keyup',function(e){
        if(owner()) return;
        if(e.key==='PrintScreen'){ try{ navigator.clipboard.writeText(''); }catch(x){} html.classList.add('shot'); setTimeout(function(){ html.classList.remove('shot'); },1500); toast(T("Les captures d'écran de ce site ne sont pas autorisées.",'Screenshots of this site are not allowed.'),'',3500); }
      });
      document.querySelectorAll('img').forEach(function(i){ i.setAttribute('draggable','false'); });
    }

    // --- Visites : compteur sur 30 jours, message aux visiteurs qui reviennent ---
    var visits=[]; try{ visits=JSON.parse(ls('iak-visits')||'[]'); }catch(e){ visits=[]; }
    var now=Date.now(), newSession=false;
    try{ if(!sessionStorage.getItem('iak-sess')){ sessionStorage.setItem('iak-sess','1'); newSession=true; } }catch(e){}
    if(newSession&&!owner()){ visits.push(now); }
    visits=visits.filter(function(t){ return now-t<30*864e5; }).slice(-50); ls('iak-visits',JSON.stringify(visits));
    var n=visits.length, who=null; try{ who=JSON.parse(ls('iak-cv')||'null'); }catch(e){}
    function ord(k){ return LANG==='en' ? k+(k%10==1&&k!=11?'st':k%10==2&&k!=12?'nd':k%10==3&&k!=13?'rd':'th') : k+'e'; }
    if(newSession&&!owner()&&n>=2){
      setTimeout(function(){
        var first=who&&who.name?' '+esc(who.name.split(' ')[0]):'';
        toast('<b>'+T('Content de vous revoir'+first+' !','Welcome back'+first+'!')+'</b><span>'+T("C'est votre "+ord(n)+" visite sur le portfolio d'Issa ces 30 derniers jours. Un stage à lui proposer ?","This is your "+ord(n)+" visit to Issa's portfolio in the last 30 days. Have an internship to offer?")+'</span>',
          '<div class="iak-toast-a"><a class="btn primary" href="#contact" data-propose="1">'+T('Proposer un stage','Offer an internship')+'</a><button type="button" class="btn ghost" data-later="1">'+T('Plus tard','Later')+'</button></div>');
        var t=document.querySelector('.iak-toast');
        t.querySelector('[data-propose]').addEventListener('click',function(){ var s=document.getElementById('cf-subject'); if(s){ s.value='Proposition de stage'; s.dispatchEvent(new Event('input')); } t.querySelector('.iak-toast-x').click(); });
        t.querySelector('[data-later]').addEventListener('click',function(){ t.querySelector('.iak-toast-x').click(); });
      },7000);
    }
    // Alerte pour Issa quand un visiteur revient (3e, 5e, 10e visite...), avec son identité s'il l'a donnée
    if(onGH&&w3fReady&&newSession&&!owner()&&[3,5,10,20].indexOf(n)>-1){
      w3f('Un visiteur revient sur ton portfolio ('+n+'e visite)',
        'Un visiteur consulte ton portfolio pour la '+n+'e fois ces 30 derniers jours.\n'+
        (who?('Visiteur identifié (formulaire CV) : '+who.name+' - '+who.org+' - '+who.email+'\n'):'Visiteur anonyme (il n\'a pas encore rempli le formulaire du CV).\n')+
        'Date : '+new Date().toLocaleString('fr-FR')+'\nVenu depuis : '+(document.referrer||'accès direct')+'\nAppareil : '+(/Mobi/.test(navigator.userAgent)?'mobile':'ordinateur')).catch(function(){});
    }

    // --- CV : formulaire obligatoire, informations vérifiées avant le téléchargement ---
    // Envoi d'un code par e-mail : renseigner les 3 identifiants EmailJS (gratuit) pour l'activer.
    var EMAILJS={service:'',template:'',key:''};
    var codeOn=!!(EMAILJS.service&&EMAILJS.template&&EMAILJS.key);
    var box=null, pending=null;
    function cvFile(v){ return 'cv/CV_Issa_KARAMBIRI'+(LANG==='en'?'_EN':'')+(v==='stage'?'_stage':'')+'.pdf'; }
    function download(v){ var a=document.createElement('a'); a.href=cvFile(v); a.download=a.href.split('/').pop(); document.body.appendChild(a); a.click(); a.remove(); }
    var DISPOSABLE='yopmail.com yopmail.fr yopmail.net cool.fr.nf jetable.fr.nf nospam.ze.tc nomail.xl.cx mega.zik.dj speed.1s.fr courriel.fr.nf moncourrier.fr.nf monemail.fr.nf monmail.fr.nf mailinator.com mailinator.net mailinator.org guerrillamail.com guerrillamail.net guerrillamail.org guerrillamail.biz guerrillamailblock.com sharklasers.com grr.la spam4.me pokemail.net 10minutemail.com 10minutemail.net 10minutemail.co.uk 10minemail.com 20minutemail.com temp-mail.org temp-mail.io tempmail.com tempmail.net tempmail.dev tempmailo.com tempr.email tmpmail.org tmpmail.net tmails.net throwawaymail.com trashmail.com trashmail.de trashmail.net trashmail.fr trash-mail.com mailnesia.com maildrop.cc getnada.com nada.email dispostable.com fakeinbox.com fakemail.net emailondeck.com mohmal.com mytemp.email mintemail.com mailcatch.com mailpoof.com moakt.com burnermail.io inboxkitten.com spamgourmet.com spambox.us spamdecoy.net discard.email discardmail.com einrot.com mvrht.com jetable.org jetable.com mail-temporaire.fr mail-temporaire.com email-temporaire.fr tempinbox.com emailfake.com fake-mail.net 33mail.com anonaddy.me getairmail.com harakirimail.com mailtemp.net minuteinbox.com crazymailing.com mail.tm mailsac.com tempail.com emltmp.com byom.de wegwerfmail.de luxusmail.org'.split(' ');
    var FAKE=/^(test|tests|testing|toto|titi|tata|azerty|qwerty|asdf|qsdf|aaa+|bbb+|xxx+|abc|abcd|admin|root|nom|prenom|nom prenom|name|fake|faux|nobody|anonyme|anonymous|none|null|n\/a|na|demo|exemple|example|user|lorem|ipsum|jean dupont|john doe|jane doe)$/i;
    var LOCALFAKE=/^(test|tests|fake|faux|toto|azerty|qwerty|asdf|aaa+|xxx+|abc|noreply|no-reply|nepasrepondre|example|exemple|null|none|spam)\d*$/i;
    var TYPO={'gmial.com':'gmail.com','gmal.com':'gmail.com','gmail.co':'gmail.com','gmail.fr':'gmail.com','gamil.com':'gmail.com','gnail.com':'gmail.com','hotmial.com':'hotmail.com','hotmal.com':'hotmail.com','hotmail.co':'hotmail.com','outlok.com':'outlook.com','outloo.com':'outlook.com','yaho.com':'yahoo.com','yahoo.f':'yahoo.fr'};
    function dohMX(dom){
      function q(url,h){ return fetch(url,{headers:h||{}}).then(function(r){ if(!r.ok) throw 0; return r.json(); }); }
      function mx(j){ return j.Status===0 && (j.Answer||[]).some(function(a){ return a.type===15 && !/^0 \.$/.test(a.data); }); }
      return q('https://dns.google/resolve?name='+encodeURIComponent(dom)+'&type=MX').then(mx)
        .catch(function(){ return q('https://cloudflare-dns.com/dns-query?name='+encodeURIComponent(dom)+'&type=MX',{accept:'application/dns-json'}).then(mx); })
        .catch(function(){ return null; }); // réseau indisponible : on ne bloque pas
    }
    function checkInfo(d){
      var L="A-Za-zÀ-ÖØ-öø-ÿ";
      var nm=d.name.replace(/\s+/g,' ');
      if(!new RegExp('^['+L+"'’-]{2,}( ["+L+"'’-]{1,})+$").test(nm) || FAKE.test(nm) || /(.)\1{3,}/i.test(nm) || nm.split(' ').some(function(w){ return FAKE.test(w); }))
        return Promise.resolve({f:'name',m:T('Indiquez votre vrai nom et prénom.','Please enter your real first and last name.')});
      if(d.org.length<2 || !/[A-Za-zÀ-ÿ]/.test(d.org) || FAKE.test(d.org) || /(.)\1{3,}/i.test(d.org))
        return Promise.resolve({f:'org',m:T("Indiquez le vrai nom de votre entreprise ou organisation.",'Please enter the real name of your company or organisation.')});
      var em=d.email.toLowerCase(), m=em.match(/^([a-z0-9._%+-]{1,64})@((?:[a-z0-9-]{1,63}\.)+[a-z]{2,24})$/);
      if(!m || /\.\.|^\.|\.@/.test(em)) return Promise.resolve({f:'email',m:T("Cette adresse e-mail n'est pas valide.",'This email address is not valid.')});
      var local=m[1], dom=m[2];
      if(TYPO[dom]) return Promise.resolve({f:'email',m:T('Vouliez-vous écrire @'+TYPO[dom]+' ?','Did you mean @'+TYPO[dom]+'?')});
      if(LOCALFAKE.test(local)) return Promise.resolve({f:'email',m:T('Merci d’indiquer votre vraie adresse e-mail.','Please enter your real email address.')});
      var parts=dom.split('.');
      for(var i=0;i<parts.length-1;i++){ if(DISPOSABLE.indexOf(parts.slice(i).join('.'))>-1) return Promise.resolve({f:'email',m:T('Les adresses e-mail temporaires ne sont pas acceptées.','Temporary email addresses are not accepted.')}); }
      return dohMX(dom).then(function(ok){ return ok===false ? {f:'email',m:T("Ce domaine e-mail n'existe pas ou ne reçoit pas de mails.",'This email domain does not exist or cannot receive mail.')} : {ok:true,dns:ok}; });
    }
    function ejs(p){
      return fetch('https://api.emailjs.com/api/v1.0/email/send',{method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({service_id:EMAILJS.service,template_id:EMAILJS.template,user_id:EMAILJS.key,template_params:p})}).then(function(r){ if(!r.ok) throw 0; });
    }
    function tries(){ var a=[]; try{ a=JSON.parse(ls('iak-cvtry')||'[]'); }catch(e){} var t=Date.now(); return a.filter(function(x){ return t-x<36e5; }); }
    function openGate(v){
      pending=v; if(box) box.remove();
      var opened=Date.now();
      box=document.createElement('div'); box.className='cvg'; box.innerHTML=
        '<div class="cvg-box" role="dialog" aria-modal="true" aria-labelledby="cvg-t">'+
        '<button type="button" class="cvg-x" aria-label="'+T('Fermer','Close')+'">×</button>'+
        '<b id="cvg-t">'+T('Télécharger mon CV','Download my CV')+'</b>'+
        '<form novalidate class="cvg-f1">'+
        '<label><span>'+T('Nom et prénom','Full name')+' *</span><input name="name" required autocomplete="name" maxlength="80"></label>'+
        '<label><span>'+T('E-mail professionnel','Work email')+' *</span><input name="email" type="email" required autocomplete="email" maxlength="120"></label>'+
        '<label><span>'+T('Entreprise ou organisation','Company or organisation')+' *</span><input name="org" required autocomplete="organization" maxlength="100"></label>'+
        '<label><span>'+T('Motif','Reason')+' *</span><select name="motif" required><option value="">'+T('Choisir…','Choose…')+'</option>'+
          ['Proposition de stage|Internship offer','Processus de recrutement|Recruitment process','Mise en relation ou réseau|Networking or referral','Autre|Other'].map(function(o){ var p=o.split('|'); return '<option value="'+p[0]+'">'+T(p[0],p[1])+'</option>'; }).join('')+'</select></label>'+
        '<label><span>'+T('Poste ou message (facultatif)','Position or message (optional)')+'</span><input name="note" maxlength="200"></label>'+
        '<label class="cvg-ok"><input type="checkbox" name="consent" required><span>'+T("J'accepte que ces informations soient transmises à Issa Aziz KARAMBIRI. ","I agree that these details are sent to Issa Aziz KARAMBIRI. ")+'<a href="#" data-privacy="1">'+T('Confidentialité','Privacy')+'</a></span></label>'+
        '<input type="text" name="website" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">'+
        '<button class="btn primary" type="submit">'+T(codeOn?'Recevoir mon code':'Télécharger le CV',codeOn?'Get my code':'Download the CV')+'</button>'+
        '<p class="cvg-st" aria-live="polite"></p></form></div>';
      document.body.appendChild(box); html.classList.add('modal-open');
      var inner=box.querySelector('.cvg-box'), f=box.querySelector('form'), st=box.querySelector('.cvg-st'), btn=f.querySelector('[type=submit]');
      function close(){ if(box){ box.remove(); box=null; } html.classList.remove('modal-open'); }
      function err(el,msg,field){ el.className='cvg-st err'; el.textContent=msg; if(field&&f[field]){ f[field].setCustomValidity(msg); f[field].focus(); var c=function(){ f[field].setCustomValidity(''); f[field].removeEventListener('input',c); }; f[field].addEventListener('input',c); } }
      box.querySelector('.cvg-x').addEventListener('click',close);
      box.addEventListener('click',function(e){ if(e.target===box) close(); });
      box.addEventListener('keydown',function(e){ if(e.key==='Escape') close(); });
      box.querySelector('[data-privacy]').addEventListener('click',function(e){ e.preventDefault(); openPrivacy(); });
      setTimeout(function(){ f.name.focus(); },50);
      function finish(d,verified){
        return w3f('[CV téléchargé] '+d.name+' ('+d.org+')',
          'Quelqu\'un vient de télécharger ton CV.\n\nNom : '+d.name+'\nE-mail : '+d.email+(verified?' (vérifié par code ✓)':' (format et domaine vérifiés)')+'\nEntreprise : '+d.org+'\nMotif : '+d.motif+'\nPoste ou message : '+(d.note||'-')+'\nCV : '+(pending==='stage'?'version stage':'version simple')+(LANG==='en'?' (anglais)':' (français)')+'\nVisites ces 30 derniers jours : '+n+'\nDate : '+new Date().toLocaleString('fr-FR'),
          {email:d.email,replyto:d.email})
          .then(function(j){
            if(!j||!j.success) throw 0;
            d.at=Date.now(); d.verified=!!verified; ls('iak-cv',JSON.stringify(d)); who=d;
            download(pending);
            if(codeOn) ejs({to_email:d.email,to_name:d.name,subject:T("Merci d'avoir téléchargé le CV d'Issa Aziz KARAMBIRI","Thank you for downloading Issa Aziz KARAMBIRI's CV"),
              message:T("Bonjour "+d.name+",\n\nMerci d'avoir téléchargé mon CV et de l'intérêt que vous portez à mon profil. Je reste disponible pour échanger avec vous, par retour de mail ou au +33 7 61 20 07 82.\n\nAu plaisir,\nIssa Aziz KARAMBIRI\nhttps://issakarambiri.com",
                "Hello "+d.name+",\n\nThank you for downloading my CV and for your interest in my profile. I would be glad to talk with you, by replying to this email or at +33 7 61 20 07 82.\n\nBest regards,\nIssa Aziz KARAMBIRI\nhttps://issakarambiri.com")}).catch(function(){});
          });
      }
      f.addEventListener('submit',function(e){
        e.preventDefault(); f.classList.add('tried'); st.className='cvg-st';
        if(f.website.value) return;
        ['name','email','org'].forEach(function(k){ f[k].setCustomValidity(''); });
        if(!f.checkValidity()){ err(st,T('Merci de remplir les champs obligatoires et de cocher la case.','Please fill in the required fields and tick the box.')); return; }
        if(Date.now()-opened<2500){ err(st,T('Un instant, merci de vérifier vos informations.','Please take a moment to check your details.')); return; }
        var tr=tries(); if(tr.length>=10){ err(st,T("Trop de tentatives. Réessayez dans une heure ou écrivez-moi à issaaziz.karambiri@ensiie.eu.",'Too many attempts. Try again in an hour or email me at issaaziz.karambiri@ensiie.eu.')); return; }
        tr.push(Date.now()); ls('iak-cvtry',JSON.stringify(tr));
        var d={name:f.name.value.trim().replace(/\s+/g,' '),email:f.email.value.trim().toLowerCase(),org:f.org.value.trim(),motif:f.motif.value,note:f.note.value.trim()};
        btn.disabled=true; st.textContent=T('Vérification de vos informations…','Checking your details…');
        checkInfo(d).then(function(r){
          if(!r.ok){ btn.disabled=false; err(st,r.m,r.f); return; }
          if(!codeOn){
            st.textContent=T('Un instant…','One moment…');
            return finish(d,false).then(function(){ st.className='cvg-st ok'; st.textContent=T('Merci ! Le téléchargement commence.','Thank you! Your download is starting.'); setTimeout(close,1600); });
          }
          // Code à 6 chiffres envoyé par e-mail
          var code=String(100000+(crypto.getRandomValues(new Uint32Array(1))[0]%900000)), sentAt=0, left=5;
          function send(){ sentAt=Date.now(); return ejs({to_email:d.email,to_name:d.name,subject:T('Votre code pour télécharger le CV d\'Issa Aziz KARAMBIRI','Your code to download Issa Aziz KARAMBIRI\'s CV'),
            message:T('Bonjour '+d.name+',\n\nVotre code de vérification : '+code+'\nIl est valable 15 minutes.\n\nMerci de votre intérêt pour mon profil.\nIssa Aziz KARAMBIRI','Hello '+d.name+',\n\nYour verification code: '+code+'\nIt is valid for 15 minutes.\n\nThank you for your interest in my profile.\nIssa Aziz KARAMBIRI')}); }
          return send().then(function(){
            inner.querySelector('form').remove();
            var f2=document.createElement('form'); f2.className='cvg-f2'; f2.noValidate=true;
            f2.innerHTML='<p>'+T('Un code à 6 chiffres vient d\'être envoyé à <strong>'+esc(d.email)+'</strong>. Saisissez-le pour télécharger le CV.','A 6-digit code was just sent to <strong>'+esc(d.email)+'</strong>. Enter it to download the CV.')+'</p>'+
              '<label><span>'+T('Code reçu par e-mail','Code from the email')+'</span><input name="code" inputmode="numeric" autocomplete="one-time-code" maxlength="6" pattern="[0-9]{6}" required class="cvg-code"></label>'+
              '<button class="btn primary" type="submit">'+T('Valider et télécharger','Verify and download')+'</button>'+
              '<div class="cvg-links"><button type="button" class="cvg-link" data-resend>'+T('Renvoyer le code','Resend code')+'</button><button type="button" class="cvg-link" data-back>'+T("Modifier l'adresse",'Change address')+'</button></div>'+
              '<p class="cvg-st" aria-live="polite"></p>';
            inner.appendChild(f2); var st2=f2.querySelector('.cvg-st'), b2=f2.querySelector('[type=submit]'); f2.code.focus();
            f2.querySelector('[data-back]').addEventListener('click',function(){ openGate(pending); });
            f2.querySelector('[data-resend]').addEventListener('click',function(){
              if(Date.now()-sentAt<30000){ err(st2,T('Patientez 30 secondes avant de renvoyer le code.','Please wait 30 seconds before resending.')); return; }
              send().then(function(){ st2.className='cvg-st ok'; st2.textContent=T('Nouveau code envoyé.','New code sent.'); },function(){ err(st2,T("L'envoi a échoué.",'Sending failed.')); });
            });
            f2.addEventListener('submit',function(e){
              e.preventDefault(); var v=f2.code.value.replace(/\D/g,'');
              if(Date.now()-sentAt>15*60000){ err(st2,T('Code expiré. Cliquez sur « Renvoyer le code ».','Code expired. Click “Resend code”.')); return; }
              if(v!==code){ left--; if(left<=0){ err(st2,T('Trop d\'essais. Recommencez.','Too many attempts. Please start again.')); setTimeout(function(){ openGate(pending); },1500); return; } err(st2,T('Code incorrect. Il vous reste '+left+' essai(s).','Wrong code. '+left+' attempt(s) left.')); return; }
              b2.disabled=true; st2.className='cvg-st'; st2.textContent=T('Un instant…','One moment…');
              finish(d,true).then(function(){ st2.className='cvg-st ok'; st2.textContent=T('Merci ! Le téléchargement commence. Un e-mail de confirmation vous a été envoyé.','Thank you! Your download is starting. A confirmation email is on its way.'); setTimeout(close,2200); })
                .catch(function(){ b2.disabled=false; err(st2,T("L'envoi a échoué. Réessayez.",'Sending failed. Please try again.')); });
            });
          });
        }).catch(function(){ btn.disabled=false; err(st,T("L'envoi a échoué. Réessayez, ou écrivez-moi à issaaziz.karambiri@ensiie.eu.",'Sending failed. Try again, or email me at issaaziz.karambiri@ensiie.eu.')); });
      });
    }
    document.addEventListener('click',function(e){
      var o=e.target.closest&&e.target.closest('.cv-opt'); if(!o) return;
      if(owner()) return;
      e.preventDefault();
      if(who&&who.email&&(who.verified||!codeOn)){ download(o.dataset.v); return; }
      openGate(o.dataset.v);
    },true);

    // --- Confidentialité ---
    function openPrivacy(){
      var p=document.createElement('div'); p.className='cvg cvg-priv'; p.innerHTML='<div class="cvg-box" role="dialog" aria-modal="true" aria-labelledby="pv-t"><button type="button" class="cvg-x" aria-label="'+T('Fermer','Close')+'">×</button><b id="pv-t">'+T('Confidentialité','Privacy')+'</b>'+
        T('<p><strong>Responsable :</strong> Issa Aziz KARAMBIRI, issaaziz.karambiri@ensiie.eu.</p><p><strong>Formulaires (contact et CV) :</strong> nom, e-mail, entreprise, motif et message, transmis par e-mail via le service Web3Forms. Ils servent uniquement à vous répondre, ne sont ni vendus ni partagés, et sont supprimés au plus tard 12 mois après le dernier échange. Pour éviter les fausses adresses, le domaine de votre e-mail est vérifié auprès d\'un service DNS public (Google ou Cloudflare), et un code de vérification ainsi qu\'un e-mail de remerciement peuvent vous être envoyés via le service EmailJS.</p><p><strong>Statistiques :</strong> mesure d\'audience anonyme avec GoatCounter, sans cookie publicitaire ni profilage. Une alerte par e-mail m\'indique les nouvelles visites et les visites répétées (date, provenance, type d\'appareil, et votre identité seulement si vous avez rempli le formulaire du CV).</p><p><strong>Sur votre appareil :</strong> le thème, la langue, le nombre de vos visites des 30 derniers jours et, si vous l\'avez rempli, le formulaire du CV, pour ne pas vous le redemander.</p><p><strong>Vos droits :</strong> accès, rectification et suppression sur simple demande à issaaziz.karambiri@ensiie.eu (RGPD).</p><p><strong>Contenu :</strong> les textes, photos et documents de ce site sont la propriété d\'Issa Aziz KARAMBIRI. Toute reproduction sans autorisation est interdite.</p>',
          '<p><strong>Controller:</strong> Issa Aziz KARAMBIRI, issaaziz.karambiri@ensiie.eu.</p><p><strong>Forms (contact and CV):</strong> name, email, company, reason and message, sent by email through Web3Forms. They are only used to reply to you, are never sold or shared, and are deleted at the latest 12 months after the last exchange. To prevent fake addresses, your email domain is checked with a public DNS service (Google or Cloudflare), and a verification code and a thank-you email may be sent to you through EmailJS.</p><p><strong>Analytics:</strong> anonymous audience measurement with GoatCounter, with no advertising cookies or profiling. An email alert tells me about new and repeat visits (date, source, device type, and your identity only if you filled in the CV form).</p><p><strong>On your device:</strong> theme, language, number of visits in the last 30 days and, if you filled it in, the CV form so you are not asked again.</p><p><strong>Your rights:</strong> access, correction and deletion on request at issaaziz.karambiri@ensiie.eu (GDPR).</p><p><strong>Content:</strong> the texts, photos and documents on this site belong to Issa Aziz KARAMBIRI. Any reproduction without permission is prohibited.</p>')+
        '<button type="button" class="btn ghost" data-forget="1">'+T('Effacer mes données sur cet appareil','Delete my data on this device')+'</button></div>';
      document.body.appendChild(p); html.classList.add('modal-open');
      function close(){ p.remove(); if(!document.querySelector('.cvg')) html.classList.remove('modal-open'); }
      p.querySelector('.cvg-x').addEventListener('click',close);
      p.addEventListener('click',function(e){ if(e.target===p) close(); });
      p.addEventListener('keydown',function(e){ if(e.key==='Escape') close(); });
      p.querySelector('[data-forget]').addEventListener('click',function(){ ['iak-cv','iak-visits','iak-seen'].forEach(function(k){ ls(k,null); }); who=null; this.textContent=T('Données effacées ✓','Data deleted ✓'); });
      p.querySelector('.cvg-x').focus();
    }
    document.addEventListener('click',function(e){ if(e.target.closest&&e.target.closest('[data-privacy-link]')){ e.preventDefault(); openPrivacy(); } });
  })();

  // ===== Effet caché : plusieurs clics rapides sur le logo IAK -> planche de Galton =====
  (function(){
    var logo=document.querySelector('.logo'); if(!logo) return;
    var html=document.documentElement;
    var clicks=[], running=false;
    logo.addEventListener('click',function(){
      var t=Date.now(); clicks=clicks.filter(function(x){ return t-x<500; }); clicks.push(t);
      if(clicks.length>=2 && !running){ clicks=[]; galton(); }
    });
    function galton(){
      running=true;
      var reduceM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
      var ov=document.createElement('div'); ov.className='galton'; ov.setAttribute('role','dialog'); ov.setAttribute('aria-label',T('Planche de Galton','Galton board'));
      ov.innerHTML='<canvas></canvas><div class="galton-txt"><span class="mono">'+T('Planche de Galton · théorème central limite','Galton board · central limit theorem')+'</span><p>'+T('Chaque bille choisit au hasard, à gauche ou à droite. Ensemble, elles dessinent une loi.<br><em>Derrière le bruit, une structure : c\'est ce que je cherche dans les données.</em>','Each ball goes left or right at random. Together, they draw a law.<br><em>Behind the noise, a structure: that is what I look for in data.</em>')+'</p></div><button type="button" class="galton-x" aria-label="'+T('Fermer','Close')+'">×</button>';
      document.body.appendChild(ov); html.classList.add('modal-open');
      requestAnimationFrame(function(){ ov.classList.add('on'); });
      var cv=ov.querySelector('canvas'), cx=cv.getContext('2d'), dpr=Math.min(window.devicePixelRatio||1,2), raf=0;
      var css=getComputedStyle(document.documentElement), gold=css.getPropertyValue('--gold').trim()||'#F2B84B', ink=css.getPropertyValue('--ink').trim()||'#EEF1F6', dim=css.getPropertyValue('--dim').trim()||'#5B6478', blue=css.getPropertyValue('--blue').trim()||'#5B8CFF';
      var ROWS=12, NMAX=420, N=0, W,H,dx,dy,x0,y0,yb,r,balls=[],bins=new Array(ROWS+1).fill(0),start=performance.now(),spawned=0,done=false,curveA=0;
      function size(){ var vw=innerWidth, vh=innerHeight; cv.width=vw*dpr; cv.height=vh*dpr; cv.style.width=vw+'px'; cv.style.height=vh+'px'; cx.setTransform(dpr,0,0,dpr,0,0);
        W=Math.min(560,vw-48); dx=W/(ROWS+1); dy=Math.min(dx*.9,(vh*.42)/ROWS); x0=vw/2; y0=Math.max(64,vh*.07); yb=Math.min(y0+dy*(ROWS+1)+Math.min(vh*.32,dx*7),vh-(ov.querySelector('.galton-txt').offsetHeight||110)-90); r=Math.max(1.5,dx/11); var avail=yb-(y0+dy*(ROWS+.8)); var cap=Math.floor(avail/(2*r+.6))*Math.max(1,Math.floor(dx*.86/(2*r+.6))); NMAX=Math.max(60,Math.floor(cap/0.2256*0.9)); }
      size(); N=reduceM?0:Math.min(420,NMAX); addEventListener('resize',size);
      function binX(k){ return x0+(k-ROWS/2)*dx; }
      function per(){ return Math.max(1,Math.floor(dx*.86/(2*r+.6))); }
      function stackY(n){ return yb-(Math.floor(n/per())+.5)*(2*r+.6); }
      function stackX(k,n){ var p=per(), i=n%p, w=(p-1)*(2*r+.6); return binX(k)-w/2+i*(2*r+.6); }
      if(reduceM){ var p=Math.pow(2,ROWS),C=1; for(var k=0;k<=ROWS;k++){ bins[k]=Math.round(Math.min(420,NMAX)*C/p); C=C*(ROWS-k)/(k+1); } done=true; curveA=1; }
      function draw(now){
        var vw=innerWidth, vh=innerHeight; cx.clearRect(0,0,vw,vh);
        // clous
        cx.fillStyle=dim; for(var i=0;i<ROWS;i++) for(var j=0;j<=i;j++){ cx.beginPath(); cx.arc(x0+(j-i/2)*dx, y0+(i+1)*dy, Math.max(1.2,r*.55), 0, 6.283); cx.fill(); }
        // séparateurs des cases
        cx.strokeStyle=dim; cx.globalAlpha=.35; cx.lineWidth=1; for(var k=0;k<=ROWS+1;k++){ var xx=binX(k)-dx/2; cx.beginPath(); cx.moveTo(xx,y0+dy*(ROWS+.6)); cx.lineTo(xx,yb); cx.stroke(); } cx.globalAlpha=1;
        cx.beginPath(); cx.moveTo(binX(0)-dx/2,yb); cx.lineTo(binX(ROWS)+dx/2,yb); cx.stroke();
        // nouvelles billes
        var el=now-start; while(spawned<N && spawned<el/6.5){ var path=[],kk=0; for(var s=0;s<ROWS;s++){ var rgt=Math.random()<.5?1:0; path.push(rgt); } balls.push({path:path,t0:now,k:0,land:false}); spawned++; }
        // billes en chute
        cx.fillStyle=gold;
        for(var b=0;b<balls.length;b++){ var o=balls[b]; if(o.land) continue;
          var ROWT=55, tt=(now-o.t0)/ROWT, row=Math.floor(tt), f=tt-row, k=0;
          if(row>=ROWS){ for(var q=0;q<ROWS;q++) k+=o.path[q];
            var n=bins[k], ty=stackY(n), fx=binX(k), fy=y0+dy*ROWS+ (tt-ROWS)*dy*1.6;
            if(fy>=ty){ o.land=true; o.k=k; o.n=n; bins[k]++; continue; }
            cx.beginPath(); cx.arc(fx,fy,r,0,6.283); cx.fill(); continue; }
          for(var q2=0;q2<row;q2++) k+=o.path[q2];
          var xa=x0+(k-row/2)*dx, xb=x0+(k+o.path[row]-(row+1)/2)*dx, ya=y0+row*dy, yb2=y0+(row+1)*dy;
          var x=xa+(xb-xa)*f, y=ya+(yb2-ya)*f - Math.sin(f*Math.PI)*dy*.35;
          cx.beginPath(); cx.arc(x,y,r,0,6.283); cx.fill(); }
        // billes posées
        cx.fillStyle=gold; cx.globalAlpha=.9; var cnt=new Array(ROWS+1).fill(0);
        for(var k2=0;k2<=ROWS;k2++){ for(var n2=0;n2<bins[k2];n2++){ cx.beginPath(); cx.arc(stackX(k2,n2),stackY(n2),r,0,6.283); cx.fill(); } }
        cx.globalAlpha=1;
        if(!done && spawned>=N && balls.every(function(o){ return o.land; })) done=true;
        // courbe de Gauss théorique
        if(done){ curveA=Math.min(1,curveA+.02);
          var tot=bins.reduce(function(a,b){ return a+b; },0), mu=ROWS/2, sg=Math.sqrt(ROWS)/2, hpb=(2*r+.6)/per();
          cx.strokeStyle=blue; cx.lineWidth=2; cx.globalAlpha=curveA; cx.beginPath();
          var x1=binX(0)-dx/2, x2=binX(ROWS)+dx/2, steps=120;
          for(var s2=0;s2<=steps;s2++){ var xs=x1+(x2-x1)*s2/steps, kv=(xs-x0)/dx+mu, dens=tot*Math.exp(-(kv-mu)*(kv-mu)/(2*sg*sg))/(sg*Math.sqrt(2*Math.PI)), ys=yb-dens*hpb*(s2/steps*0+1);
            if(s2===0) cx.moveTo(xs,ys); else cx.lineTo(xs,ys); }
          cx.stroke(); cx.fillStyle=ink; cx.font='500 13px "JetBrains Mono", monospace'; cx.textAlign='center';
          cx.fillText('n = '+tot+'   ·   N(μ, σ²)', x0, yb+26); cx.globalAlpha=1; }
        raf=requestAnimationFrame(draw);
      }
      raf=requestAnimationFrame(draw);
      function close(){ cancelAnimationFrame(raf); removeEventListener('resize',size); ov.classList.remove('on'); setTimeout(function(){ ov.remove(); html.classList.remove('modal-open'); running=false; },400); document.removeEventListener('keydown',key); }
      function key(e){ if(e.key==='Escape') close(); }
      document.addEventListener('keydown',key);
      ov.querySelector('.galton-x').addEventListener('click',close);
      ov.addEventListener('click',function(e){ if(e.target===ov||e.target===cv) close(); });
      ov.querySelector('.galton-x').focus();
    }
  })();

  // Lettre de motivation repliée
  (function(){ var b=document.getElementById('letter-btn'), l=document.getElementById('letter'); if(!b||!l) return;
    function lab(){ b.textContent = l.hidden ? T('Lire ma lettre de motivation','Read my cover letter') : T('Masquer la lettre','Hide the letter'); }
    b.addEventListener('click',function(){ l.hidden=!l.hidden; b.setAttribute('aria-expanded',String(!l.hidden)); lab(); if(!l.hidden) l.scrollIntoView({behavior:'smooth',block:'start'}); });
    langHooks.push(lab); })();
  if(LANG==='en') applyLang('en',false);
})();
