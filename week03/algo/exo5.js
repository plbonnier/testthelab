// - demander le prénom de l'utilisateur. Stocker le résultat dans une variable
// POUR DEBUG : on affiche la valeur de la variable dans la console

// - si le prénom est vide ou égal à "juste", afficher "vous n'avez pas de prénom ?!"

// - si le prénom contient moins de 8 lettres, afficher "vous avez un prénom court !"

// - sinon , afficher "votre prénom est long !"

const demande = prompt("Votre nom svp");
if (demande === "" || demande === "juste") {
  alert("vous n'avez pas de prenom?");
} else if (demande.length < 8) {
  alert("vous avez un prénom court !");
} else {
  alert("votre prénom est long !");
}
