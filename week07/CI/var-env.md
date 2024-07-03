# Variables d'environnement

Pour ajouter des variables d'environnement spécifiques à Cypress et Postman dans votre workflow GitHub Actions, vous pouvez utiliser les fonctionnalités de GitHub Actions pour définir des secrets ou des variables d'environnement.

# Ajouter des variables d'environnement

Pour configurer des variables d'environnement dans votre workflow, vous pouvez les définir dans la section env de votre fichier YAML de workflow.

```yaml
jobs:
  test:
    runs-on: ubuntu-latest

    env:
      CYPRESS_BASE_URL: https://google.fr
      POSTMAN_API_KEY: ${{ secrets.POSTMAN_API_KEY }}
```

Pour utiliser un secret GitHub, comme POSTMAN_API_KEY, vous devez d'abord le configurer dans les paramètres de votre GitHub (Settings > Secrets > New repository secret).
