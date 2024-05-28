// Demander le nom du joueur
const userName = prompt("Votre nom svp !");
// Stocker un nombre aléatoire entre 1 et 100
const random = Math.floor(Math.random() * 100) + 1;

// Demander un numéro au joueur (entre 1 et 100)
let getNumberOfUser = parseInt(prompt("Choisissez un nombre entre 1 et 100"));
// stockée le nombre des parties jouées
let round = 1;
// créer une boucle qui s'exécute tant qu'une condition est à true
while (random !== getNumberOfUser) {
  // on exécute les test si le typeof de numberEnteredbyUser est number
  if (!isNaN(getNumberOfUser)) {
    // Si le numéro du joueur est supérieur à la valeur stockée, enregistrez "C'est plus"
    if (random > getNumberOfUser) {
      getNumberOfUser = parseInt(prompt("c'est + "));
    } else {
      // Si le numéro du joueur est inférieur à la valeur stockée, enregistrez "C'est moins"
      getNumberOfUser = parseInt(prompt("c'est - "));
    }
  }
  round++;
}

// Alerter l'utilisateur de sa victoire
alert(`Félicitation ${userName} ! vous avez gagné après ${round} round`);
