// Affiche l'objet document dans la console
console.log("document :>> ", document);

// Récupèrer l'élément body du document et l'affiche dans la console
const body = document.body;
console.log("body :>> ", body);

// Créer un élément h1, modifier son contenu et son style
const h1 = document.createElement("h1");
h1.innerHTML = "My App"; // Définir le contenu HTML de l'élément h1
h1.style.textAlign = "center"; // Centrer le texte
h1.style.fontSize = "1.5rem"; // Définir la taille de la police
h1.style.color = "blue"; // Définir la couleur du texte

// Créer un élément img et définir ses attributs src et alt
const img = document.createElement("img");
img.src = "rust.png"; // Chemin vers l'image
img.alt = "logo"; // Texte alternatif pour l'image

// Créer un élément p, modifier son style et son contenu
const p = document.createElement("p");
p.style.fontSize = "2.5rem"; // Définir la taille de la police
p.style.position = "absolute"; // Positionner l'élément
p.style.bottom = "-10px"; // Positionner l'élément
p.style.left = "10rem"; // Positionner l'élément
p.style.padding = "10px"; // Ajouter un padding
p.style.background = "white"; // Définir l'arrière-plan
p.textContent = "hello rust !"; // Définir le texte
// textContent =>  n'interprète pas les balises HTML, mais affiche le texte brut.
// p.innerHTML = "<h2>hello rust !</h2>"; // Définir le texte
// innerHTML => interprète et rend tout le code HTML qu'elle contient.

// Créer une div et définir son style
const div = document.createElement("div");
div.style.position = "relative"; // Positionner l'élément

// Créer un élément button, modifier son contenu et son style, et ajouter un écouteur d'événement
const btn = document.createElement("button");
btn.textContent = "click"; // Texte affiché sur le bouton
btn.style.fontSize = "2rem"; // Définir la taille de la police
btn.style.padding = "0px 20px"; // Ajouter un padding
btn.addEventListener("click", () => {
  // Afficher la couleur actuelle du texte de l'élément h1 dans la console
  console.log("h1.style.color :>> ", h1.style.color);
  // Changer la couleur du texte de l'élément h1 entre bleu et rouge lors du clic
  if (h1.style.color === "blue") {
    h1.style.color = "red";
  } else {
    h1.style.color = "blue";
  }
});

// Ajouter les éléments img et p à l'élément div
div.appendChild(img);
div.appendChild(p);
// Ajouter les éléments h1, div et btn au body du document
body.appendChild(h1);
body.appendChild(div);
body.appendChild(btn);
