const array = [10, 24, "toto", false];
const [a, b, c] = array;
console.log("a :>> ", a);
console.log("b :>> ", b);
console.log("c :>> ", c);
const newArray = [...array];
console.log("newArray :>> ", newArray);
const [a1, ...rest] = array;
console.log("rest :>> ", rest);
