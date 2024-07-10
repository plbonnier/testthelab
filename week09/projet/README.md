# Concept

Ce modèle est conçu pour servir de base à chaque projet P2/P3 suivant la stack React-Express-MySQL, telle qu'enseignée à la Wild Code School. Il est préconfiguré avec un ensemble d'outils qui aideront les étudiants à produire un code de qualité industrielle, plus facile à maintenir, tout en restant un outil pédagogique.

# Installation et utilisation

## Initialisation du projet

1. Exécutez la commande `npm install` à la racine de projet
2. Exécutez la commande `npm install` dans le dossier frontend
3. Exécutez la commande `npm install` dans le dossier backend
4. Créez des fichiers d'environnement `(.env)` à la fois dans backend et frontend : vous pouvez copier les fichiers `.env.sample` comme point de départ (ne les supprimez pas).
5. Exécutez la commande `npm run db:migrate` dans le dossier backend

# Commandes disponibles

- `db:migrate` : Run the database migration script
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server

# Consignes

1. Comprendre les scripts SQL

Prenez le temps de bien comprendre les scripts SQL fournis.
N'hésitez pas à créer des fausses données (fake data) pour remplir la base de données (vous pouvez rajouter les données dans le fichier schema.sql).
Lancer le projet et analyser l'application

2. Lancez le projet.

- Essayez de comprendre le comportement de l'application.

3. Créer les tests API avec Postman

- Créez des tests API en utilisant Postman.
- Générez un rapport des tests API.

4.  Créer les tests E2E avec Cypress

- Créez des tests de bout en bout (E2E) avec Cypress.
- Générez un rapport des tests E2E.

5. Générer un fichier CI pour les tests

- Générez un fichier de configuration d'intégration continue (CI) pour les tests Cypress et Postman (N'oubliez pas de créer votre propre repo pour la configuration de CI)
