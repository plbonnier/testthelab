# GitHub Actions :

GitHub Actions est un outil efficace pour automatiser des workflows directement depuis ton dépôt GitHub, comme l'exécution automatique de tests logiciels dès que du code est `push` par exemple.

# Configuration initiale pour GitHub Actions :

1. Créer un dossier pour les workflows : À la racine de votre projet, créez un dossier nommé .github/workflows.

2. Créer un fichier de workflow : À l'intérieur du dossier workflows, créez un fichier YAML nommé, par exemple, ci.yml. Ce fichier contiendra la configuration de votre flux de travail. Un fihcier YAML est un format de données textuelles utilisé couramment pour la configuration et la représentation de données de manière structurée et lisible par les humains. Il est souvent utilisé pour configurer des logiciels et des systèmes, notamment dans les fichiers de configuration de CI/CD (Continuous Integration/Continuous Deployment) comme GitHub Actions, Docker Compose, etc.

# Configuration du workflow pour les tests

```yaml
name: Tests Automation

# Déclenche ce workflow à chaque push
on: [push]

jobs:
  test:
    # Utilise l'image d'environnement Ubuntu la plus récente
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        # Action pour cloner le dépôt github
        uses: actions/checkout@v2

      - name: Install Node.js
        uses: actions/setup-node@v2
        with:
          # Installer Node.js version 20
          node-version: "20"

      - name: Install dependencies
        # Installer les dépendances du projet
        run: npm install

      - name: Run Cypress tests
        # Exécuter les tests Cypress
        run: npm run cypress:run

      - name: Run Postman tests
        run: |
          npm install -g newman 
          newman run path/to/your/postman_collection.json --environment path/to/your/postman_environment.json
```
