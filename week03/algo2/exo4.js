// Demander Etes vous fan de Star Wars ?
// SI l'utilisateur est un fan de Star Wars

// ALORS Demander Quel est votre perso préféré ?
//      SI le perso est Yoda ALORS afficher May the force be with you !

//      SINON SI le perso est Chewie ALORS afficher Arf, vous aimez les poils ...

//      SINON afficher De toute façon on les aime tous !

// SINON (pas fan de Star Wars) afficher Vous savez pas ce que vous perdez ...
const isStarWarsFan = confirm("Etes vous fan de Star Wars ?");
if (isStarWarsFan) {
    let character = prompt("Quel est votre perso préféré ?").toLowerCase();
    if (character === "Yoda".toLowerCase()) {
        message = "May the force be with you !";
    } else if (character === "Chewie".toLowerCase()) {
        message = "Arf, vous aimez les poils ...";
    } else {
        message = "De toute façon on les aime tous !";
    }
} else {
    message = "Vous savez pas ce que vous perdez ...";
}

alert(message);