// function sayHello() {}; fonction nommé
// const sayHello = () => {}; // arrow funct
// const sayHello = function () {}; fontion annonyme
// const sayHello = () => {
//   return "hello";
// };
// const sayHello = (param) => param;
// sayHello("hello");
// declaration d'une fonction :
const sum = (a, b) => a + b;
// l'excution d'une fonction
// console.log(sum(5, 6));
const result = (param) => {
  return param(4, 8);
};
console.log(result(sum));
console.log("=========================================");
console.log("=========================================");
console.log("=========================================");
const array = ["toto", 12, 14, true, "blue"];
console.log(array.length);
console.log(array.indexOf("toto"));
console.log(array.indexOf(12));
console.log(array[3]);
// for (let i = 0; i < array.length; i++) {
//   console.log("type of line 25", typeof array[i]);
//   if (typeof array[i] === "number") {
//     array[i] *= 2;
//   }
// }
console.log(array);
const newArray = array.map((item, i) => {
  console.log(item, "=>", i);
  if (typeof item === "number") {
    return (item *= 2);
  } else {
    return item;
  }
});

console.log("lien 41 =>", array);
console.log("lien 42 =>", newArray);

// créer un nouveau tableau avec
// les elements d'array de type number
const newArray2 = [];
let j = 0;
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "number") {
    newArray2[j] = array[i];
    j++;
  }
}
console.log(newArray2);

// push
const arrayWithPush = [];
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "number") {
    arrayWithPush.push(array[i]);
  }
}
console.log("line 63", arrayWithPush);

// filter
const arrayWithFilter = array.filter((element) => typeof element === "number");
console.log("line 67", arrayWithFilter);

// pop
const arrayWithPop = array.pop();
console.log("arrayWithPop :>> ", arrayWithPop); // blue
console.log("array :>> ", array); // array :>>  [ 'toto', 12, 14, true ]

// shift
const newArrayWithShift = array.shift();
console.log("newArrayWithShift :>> ", newArrayWithShift);
console.log("array :>> ", array);

// sort
const arrayWithNumber = [12, 2, 5, 17];
arrayWithNumber.sort((a, b) => a - b);
console.log("arrayWithNumber :>> ", arrayWithNumber);
