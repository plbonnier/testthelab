# ChronoWilders

Créer un chronomètre avec JS

## Etape1 : Mise en place de l'archi

- Créer un fichier `index.html` et ajouter une div avec l'id chrono.
- Créer un fichier `chrono.js`

## Etape 2 : Propriétés

- Déclarer un objet `chrono` dans `chrono.js`
- Initialiser les propriétés `minutes`, `seconds` et `tenthOfSeconds` à `0`

## Etape 3 : méthodes

1.  **Méthode `init`**

    - Déclarer **une méthode `init`** qui va gérer la création et la configuration des éléments dans le DOM.

         <details>
         <summary>Besoin d'aide ? 🙂</summary>
         - Déclarer la méthode  dans l'objet chrono.

      > Exemple :

      ```js
      const chrono = {
        init: function () {},
      };
      ```

      - Cibler la div dans laquelle on va ajouter les éléments.
      - Créer et mettre en forme les 3 `div` : une pour les minutes, une pour les secondes et une pour les millisecondes.
      - Mettre en form les div précédemment crées.
      - Ajouter les propriètés de l'objet à l'intérieur du chaque div
      - Ajouter les élèments dans la div cible.
      </details>

2.  **Méthode `display`**

    - Déclarer une méthode `display` qui va permettre de mettre à jour les div contenant les minutes, les secondes et les millisecondes.
         <details>
         <summary>Besoin d'aide ? 🙂</summary>

           - Oops! le mot DRY ça vous parle ? 🤔

         </details>

3.  **Méthode `changeTheTime`**

    - Déclarer une méthode `changeTheTime` qui va gérer l'ajout d' 1/10 de seconde et éventullement modifier la valeur de secondes et de minutes

4.  **Méthode `start`**

    - Utiliser la fonction setInterval()\* permet de répéter le code de la méthode changeTheTime tous les x 1/1000 de secondes.

      (\*) [setInterval() method](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
