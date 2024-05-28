// Implémentez l'algorithme suivant :
// Demander Quel est votre livre préféré ?
const book = prompt("Quel est votre livre préféré ?").toLowerCase();
// SI le livre n'est pas Dune
if (book !== "Dune".toLowerCase()) {
  // ALORS afficher oui

  alert("bon ... personne n'est parfait");
} else {
  // SINON afficher aaahhh voilà quelqu'un de bien !

  alert("aaahhh voilà quelqu'un de bien !");
}
