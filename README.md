#  QA Automation avec Cypress

Ce repository contient plusieurs scénarios de tests automatisés réalisés avec Cypress dans le cadre de mon apprentissage du métier de testeur QA.

---

##  Objectif

Mettre en pratique les compétences en test logiciel en automatisant différents cas utilisateurs :
- interactions simples
- validation de formulaire
- gestion des erreurs

---

##  Technologies utilisées

- Cypress
- JavaScript

---

##  Contenu du projet

###  Tests Cypress (site d'exemple)

Tests réalisés sur un site de démonstration pour apprendre les bases :

- saisie de champs (email, textarea)
- interaction avec checkbox
- vérification avec assertions (`should`)
- gestion des sélecteurs CSS

👉 Objectif : comprendre Cypress et l’automatisation

---

###  Tests formulaire réel

Tests réalisés sur :
https://practice.expandtesting.com/form-validation

####  Cas valide
- remplissage complet du formulaire
- validation réussie
- vérification qu’aucun champ n’est invalide

####  Cas invalide
- numéro de téléphone incorrect
- détection des erreurs

####  Cas limite
- champ obligatoire vide
- blocage du formulaire

---

##  Stratégie de test

- Utilisation de `beforeEach` pour initialiser les tests
- Séparation des scénarios avec plusieurs `it()`
- Vérifications systématiques avec `should()`
- Utilisation de sélecteurs fiables (id, type)
- Tests des cas positifs et négatifs

---

##  Compétences démontrées

- Automatisation de tests end-to-end
- Analyse de comportement utilisateur
- Détection et validation d’erreurs
- Structuration de tests (bonnes pratiques)
- Debug et adaptation des sélecteurs
- Différence entre test fonctionnel et technique

---

##  Auteur

Adil Kardal
