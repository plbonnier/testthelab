function sayHello() {
  return "hello !";
}

console.log(sayHello());

function sayHello2(firstName, lastName) {
  return `Hello ${firstName} ${lastName}`;
}

console.log(sayHello2("Toto", "Dupont"));

const myFunc = function () {
  return "Hello my func";
};

console.log(myFunc());

// const myArrowFunc = () => {
//   return "Hello Arrow function";
// };
const myArrowFunc = () => "Hello Arrow function";
console.log(myArrowFunc());
const myArrowFuncWithParams = (firstName, lastName) =>
  `Hello ${firstName} ${lastName}`;
console.log(myArrowFuncWithParams("Titi", "Dupont2"));
console.log("=================================================");
