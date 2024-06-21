// Implémentez l'algorithme suivant :
// Demander Quel est votre livre préféré ?

// SI le livre n'est pas Dune

// ALORS afficher oui bon ... personne n'est parfait

// SINON afficher aaahhh voilà quelqu'un de bien !
let book = prompt("Quel est ton mivre préféré ?").toLowerCase();
if (book !== "dune") {
    message ="oui bon ... personne n'est parfait";
} else {
    message ="aaahhh voilà quelqu'un de bien !"
}

alert(message);
