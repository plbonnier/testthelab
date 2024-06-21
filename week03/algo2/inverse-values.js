/*
Create a function `inverse`, which given an array of numbers, return the additive inverse of each : each positive becomes negatives, and the negatives become positives.

You can assume that all values are numbers.

If the argument is an empty array or null, return an empty array.

Example:
* [1, 2, 3, 4, 5] -> [-1, -2, -3, -4, -5]
* [1, -2, 3, -4, 5] -> [-1, 2, -3, 4, -5]
* [] -> []

Don't mutate the parameter.

*/

function inverse(array) {
    if (array === null || array.length === 0) {
        return [];
    } else {
        if (array.every((element) => isNaN(element)=== false)) {
            const newArray = array.map((element) => element * -1);
            return newArray;
        } else {
            return "il faut que des chiffres";
        }
    }
}
console.log(inverse([1, 2, 3, 4, 5]));
console.log(inverse([1, -2, 3, -4, 5]));
console.log(inverse([]));