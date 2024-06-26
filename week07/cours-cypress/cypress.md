# Test E2E (Cypress.io)

## Qu'est ce c'est Cypress ?

Cypress est un outil de test. Il permet de vérifier automatiquement si une application fonctionnent correctement. Avec Cypress, tu peux écrire des tests qui simulent les actions des utilisateurs, comme cliquer sur des boutons ou remplir des formulaires. Cet outil aide à trouver et corriger les bugs plus facilement et rapidement. Cypress est apprécié parce qu'il est facile à utiliser et fonctionne bien avec de nombreux navigateurs web.

## Qu'est ce qu'un test E2E ?

Un test E2E (End-to-End) vérifie l'intégralité du flux d'une application, du début à la fin, pour s'assurer que tout fonctionne correctement du point de vue de l'utilisateur final.

## Comment ça fonctionne concretement cypress ?

- d'abord il faut que le serveur de votre application tourne
- Ensuite installer cypress : `npm i cypress`
- Ensuite on va lancer cypress avec la commande `cypress open`
- un navigatuer va s'ouvrir
- choisir choisir test e2e
-
- un dossier cypress va etre rajouter qui contient :
  - un dossier support
  - un dossier fixture
