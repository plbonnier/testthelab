const array1 = [10, 20, 30, 40, 50];

// for (let i = 0; i < array1.length; i++) {
//   console.log(i, "=", array1[i]);
//   array1[i] = array1[i] * 2;
//   console.log("array1 from loop", array1);
// }
const newArray = [];
array1.forEach((element, i) => {
  console.log("element from ForEach", element);
  newArray[i] = element * 5;
});

console.log(array1);
console.log(newArray);

console.log("========================");

const obj = {
  firstName: "toto",
  lastName: "dupont",
  age: 25,
  isAdmin: false,
};
console.log(obj["firstName"]);
for (const key in obj) {
  console.log(key);
  console.log(obj[key]);
}
