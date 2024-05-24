// var firstName = "toto";
const firstName = "tata";
// lastName = "titi";
let age = 20;
age = 30;
console.log(firstName);
console.log(window);
console.log(age);

console.log("Je m'appelle " + firstName + " et j'ai " + age + " ans");
console.log(`Je m'appelle ${firstName} et j'ai ${age} ans !`);

console.log(typeof age);
const test = null;
console.log(typeof test);
console.log(age > 35);
console.log(age === 35);
console.log(age === "30"); // false
console.log(age == "30"); // true
let isActive;
console.log(isActive); // undefinded
// console.log(first); // not definded
const age2 = 55;
console.log(age > 25 && age2 > 54); // true
console.log(age > 25 && age2 > 56); // false
console.log(age > 35 && age2 > 54); // false
console.log(age > 35 || age2 > 54); // true
console.log(age > 25 || age2 > 56); // true
isActive = true;
console.log(!isActive);
// declarer un objet

const obj = {
  firstNameObj: "tonton",
  lastNameObj: "Dupont",
  age: 25,
};
console.log(obj);
console.log(obj.firstNameObj);
console.log(obj.lastNameObj);
obj.firstNameObj = "Youssef";
obj.lastNameObj = "Dupont 2";
console.log(obj.firstNameObj);
console.log(obj.lastNameObj);
obj.isAdmin = true;
console.log(obj);
const array = ["toto", 20, true];
console.log(array);
console.log(array.length);
console.log(array[0]);
console.log(array[2]);
array[3] = false;
array[0] = "dupont";
array[4] = obj;
array[5] = [10, 20, 30];
console.log(array);
console.log("==================================================");
