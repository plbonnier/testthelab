/*
Create a function `getLikes` which receives an array of names, and returns:
* [] => "Be the first to like this"
* ["Cartman"] => "Cartman likes this"
* ["Kenny", "Cartman"] => "Kenny and Cartman like this"
* ["Stan", "Kyle", "Kenny", "Cartman"] => "Stan and 3 other people like this"

*/
function getLikes(array) {
    if (array === null || array.length === 0) {
        return "Be the first to like this";
    } else if (array.length === 1) {
        return `${array[0]} likes this`;
    } else if (array.length === 2) {
        return `${array[0]} and ${array[1]} likes this`;
    } else {
        return `${array[0]} and ${array.length - 1} other people like this`;
    }
}

console.log(getLikes([]));
console.log(getLikes(["Cartman"]));
console.log(getLikes(["Kenny", "Cartman"]));
console.log(getLikes(["Stan", "Kyle", "Kenny", "Cartman"]));
console.log(getLikes(["------------------------------------"]));

function getLikes2(array) {
    if (array === null || array.length === 0) {
        return "Be the first to like this";
    } else {
        const [likers1, likers2, ...rest] = array;
        if (!likers2) {
            return `${likers1} likes this`;
        } else if (likers1 && likers2) {
            return `${likers1} and ${likers2} like this`;
        }
        else if (likers2 && rest) {
            return `${likers1} and ${rest.length + 1} other people like this`;
        }
    }
}
console.log(getLikes2([]));
console.log(getLikes2(["Cartman"]));
console.log(getLikes2(["Kenny", "Cartman"]));
console.log(getLikes2(["Stan", "Kyle", "Kenny", "Cartman"]));