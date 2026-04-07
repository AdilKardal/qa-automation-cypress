# Projet QA Automation avec Cypress

Ce projet contient des tests automatisés réalisés avec Cypress dans le cadre de mon apprentissage du métier de testeur QA.

## Objectif

L'objectif est de simuler des scénarios utilisateurs réels et de vérifier le bon fonctionnement d'un formulaire.

## Technologies utilisées

- Cypress
- JavaScript

## Scénarios testés

- ✔️ Saisie d’un email valide
- ✔️ Saisie d’un email invalide
- ✔️ Vérification d’un champ vide
- ✔️ Interaction avec une checkbox
- ✔️ Remplissage d’un formulaire 

---

## 🔍 Exemple de test

```javascript
cy.get('.action-email').type('test@test.com')
cy.get('.action-email').should('have.value', 'test@test.com')
