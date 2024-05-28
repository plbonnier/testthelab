// Demander Etes vous fan de Star Wars ?
const isFan = confirm("Etes vous fan de Star Wars ?");
// SI l'utilisateur est un fan de Star Wars
if (isFan) {
  // ALORS Demander Quel est votre perso préféré ?
  const inputValue = prompt("Quel est votre perso préféré ?");
  //      SI le perso est Yoda ALORS afficher May the force be with you !
  if (inputValue.toLowerCase() === "Yoda".toLowerCase()) {
    alert("May the force be with you !");
    //      SINON SI le perso est Chewie ALORS afficher Arf, vous aimez les poils ...
  } else if (inputValue.toLowerCase() === "Chewie".toLowerCase()) {
    alert("Arf, vous aimez les poils ...");
  } else {
    //      SINON afficher De toute façon on les aime tous !

    alert("De toute façon on les aime tous !");
  }
} else {
  // SINON (pas fan de Star Wars) afficher

  alert("Vous savez pas ce que vous perdez ...");
}
