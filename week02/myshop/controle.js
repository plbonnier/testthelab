let age1 = prompt("Hello !");

if (typeof parseInt(age1) !== "number") {
  age1 = prompt("je veux un nombre");
} else if (age1 > 18) {
  alert("welcome in my App");
} else {
  alert("pas authorisé !");
}
