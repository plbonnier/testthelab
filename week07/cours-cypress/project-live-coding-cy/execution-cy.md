# Exécution Cypress UI :

- `cypress open` lance l'interface utilisateur graphique de Cypress (Cypress Test Runner).
- Utile pour le développement interactif, le débogage et l'exécution de tests de manière visuelle.
- Options de base

  - `--project <path>`
    Ouvre Cypress avec un chemin de projet spécifique.

    **Exemple : cypress open --project /path/to/your/project**

  - `--config <config>`
    Redéfinit les options de configuration pour l'exécution actuelle.

    **Exemple : cypress open --config baseUrl=http://localhost:3000,viewportWidth=1280**

  - `--env <env>`
    Définit des variables d'environnement pour l'exécution des tests.

    **Exemple : cypress open --env username=admin,password=secret**

  - `--port <port>`
    Spécifie le port sur lequel Cypress doit être lancé.

    **Exemple : cypress open --port 8080**

- Options avancées

  - `--browser <browser>`
    Ouvre Cypress avec un navigateur spécifique.

    **Exemple : cypress open --browser chrome**

  - `--config-file <configFile>`
    Spécifie un fichier de configuration différent du cypress.json par défaut.

    **Exemple : cypress open --config-file cypress-staging.json**

  - `--global`
    Ouvre Cypress en ignorant les plugins spécifiques au projet et en utilisant une configuration globale.

    **Exemple : cypress open --global**

  - `--detached`
    Lance Cypress en mode détaché, sans bloquer le terminal.

    **Exemple : cypress open --detached**

# Excution Cypress CLI :

- `cypress run` permet d'exécuter des tests en mode headless, sans interface graphique.
- Principalement utilisé dans les environnements d'intégration continue (CI).
- Options de base

  - `--spec <path>`
    Exécute un ou plusieurs fichiers de test spécifiés.

    **Exemple : cypress run --spec cypress/integration/my-test.js**

  - `--headed`
    Lance les tests dans une fenêtre de navigateur visible, utile pour le débogage en mode headless.

    **Exemple : cypress run --headed**

  - `--browser <browser>`
    Spécifie le navigateur à utiliser pour l'exécution des tests.

    **Exemple : cypress run --browser chrome**

  - `--record`
    Enregistre l'exécution des tests sur le tableau de bord Cypress.
    Nécessite un projet configuré avec Cypress Dashboard.

    **Exemple : cypress run --record**

- Options avancées

  - `--env <env>`
    Définit des variables d'environnement pour l'exécution des tests.

    **Exemple : cypress run --env apiUrl=http://localhost:3000**

  - `--key <record-key>`
    Utilisé avec --record pour spécifier la clé de projet du tableau de bord Cypress.

    **Exemple : cypress run --record --key 123456**

  - `--parallel`
    Exécute les tests en parallèle, nécessitant une configuration préalable sur Cypress Dashboard.

    **Exemple : cypress run --record --parallel**

  - `--group <name>`
    Spécifie un nom de groupe pour l'exécution des tests, utile pour l'organisation sur le tableau de bord.

    **Exemple : cypress run --record --group frontend-tests**

  - `--ci-build-id <id>`
    Identifiant unique pour le build CI, aidant à relier les exécutions de tests aux builds CI spécifiques.

    **Exemple : cypress run --ci-build-id ci-build-123**
