// Demander le nom du joueur
// Stocker un nombre aléatoire entre 1 et 100

// Demander un numéro au joueur (entre 1 et 100)
// stockée le nombre des parties jouées
// créer une boucle qui s'exécute tant qu'une condition est à true

// on exécute les test si le typeof de numberEnteredbyUser est number

// Si le numéro du joueur est supérieur à la valeur stockée, enregistrez "C'est plus"

// Si le numéro du joueur est inférieur à la valeur stockée, enregistrez "C'est moins"

// Alerter l'utilisateur de sa victoire
let name = prompt("Quel est votre nom ?");
let numberToFind = Math.floor(Math.random() * 100) + 1;
console.log(name);
console.log(numberToFind);

let chooseNumber;
let numberOfTries = 1;

do {
    chooseNumber = parseInt(prompt("Entrez un numéro entre 1 et 100"));
    if (!isNaN(chooseNumber)) {
        if (numberToFind > chooseNumber) {
            alert("c'est plus");
            numberOfTries++;

        }
        else if (numberToFind < chooseNumber) {
            alert("c'est moins");
            numberOfTries++;

        }
        else
    {
            alert(`bravo ${name}, tu as trouvé le bon nombre. Tu as fais ${numberOfTries} tentatives`)
        }
    }
    else {
        prompt("Veuillez entrer un numéro entre 1 et 100.");
    }
} while (chooseNumber !== numberToFind)