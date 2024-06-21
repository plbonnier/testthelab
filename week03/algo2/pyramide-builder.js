/*
Create a function `build` which returns a pyramid of `n` floors, from top to bottom, stored in a string array.

Example :

n = 5 :
[
    "    *    ",
    "   ***   ",
    "  *****  ",
    " ******* ",
    "*********"
]

If `n` is zero or negative, throw a RangeError.
If `n` is null or not a number, throw a TypeError.

*/
function build(n) {
    if (n<=0) {
        throw new RangeError();
    } else if (typeof n !== "number" || n === null) {
        throw new TypeError();
    } else {
        const pyramid =[];
        for (let i=1; i<=n; i++) {
            const spaces = " ".repeat(n-i);
            const stars = "*".repeat(2*i-i);
            pyramid.push(spaces + stars + spaces);
        }
        return pyramid;
    }
}
console.log(build(5));