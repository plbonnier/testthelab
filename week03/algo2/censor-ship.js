/*
Create a function `censor` which takes an array of sentences and a forbidden word as argument, then returns the array with the word censored.

A censored word is replaced with asterisks, example: "tacos" -> "*****".

Only a full word should be censored.

sentences: [
  "I love the smell of tacos in the morning.",
  "Where is my umbrella?",
  "The test is not a diagnosis of the disease psittacosis.",
  "Eat tacos every day."
]
forbidden word: "tacos"

result: [
  "I love the smell of ***** in the morning.",
  "Where is my umbrella?",
  "The test is not a diagnosis of the disease psittacosis.",
  "Eat ***** every day."
]

You can't use a loop!

Don't mutate the parameter.

*/

// function censor(array, word) {
//   const strings = array.join(" ").map((element) => element.word.replace(word, word.length * "*"));
//   const newArray = strings.split(" ");
//   return newArray;
// }
// console.log(censor([
//   "I love the smell of tacos in the morning.",
//   "Where is my umbrella?",
//   "The test is not a diagnosis of the disease psittacosis.",
//   "Eat tacos every day."
// ], "tacos"));

// function censor(array, word) {
//   const newStingArray = array.join(" ");
//   const newSentences = newStingArray.replace(word, "*")

//   const newArray = newSentences.split(" ");

//   return newArray;
// }

// console.log(censor([
//   "I love the smell of tacos in the morning.",
//   "Where is my umbrella?",
//   "The test is not a diagnosis of the disease psittacosis.",
//   "Eat tacos every day."
// ], "tacos"));

// const array = ["I love the smell of tacos in the morning.",
// "Where is my umbrella?",
// "The test is not a diagnosis of the disease psittacosis.",
// "Eat tacos every day."];
// const newStingArray = array.join(" ")

// console.log(newStingArray);

function censor(array, word) {
  return array.map((element) => element.replace(word, "*".repeat(word.length)));
}

function censor2(array, word) {
  return array.map((element) => element.split(" ").map((mot) => {
    if (mot === word) {
      return mot.replace(word, "*".repeat(word.length))
    } else {
      return mot;
    }
  }
  ).join(" ")
  );
}

console.log(censor([
  "I love the smell of tacos in the morning.",
  "Where is my umbrella?",
  "The test is not a diagnosis of the disease psittacosis.",
  "Eat tacos every day."
], "tacos"));
console.log("-------------------------------------------");
console.log(censor2([
  "I love the smell of tacos in the morning.",
  "Where is my umbrella?",
  "The test is not a diagnosis of the disease psittacosis.",
  "Eat tacos every day."
], "tacos"));

// const array = ["I love the smell of tacos in the morning."];
// const top = array.join(" ");
// console.log(top);
// const bottom = top.replace("tacos", "*".repeat("tacos".length));
// console.log(bottom);
// const newArray = bottom.split(" ");
// console.log(newArray);