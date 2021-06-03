/*
    CIT 281 Project 2
    Name: Erika Koopmans
*/

// Returns a single, random, lowercase letter
const getRandomLetter = function() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[Math.floor(Math.random() * (alphabet.length+1))];
}

// Returns a random length string between minLength and maxLength
const getRandomString = function(minLength, maxLength) {
    let length = Math.floor(Math.random() * (maxLength - minLength) + minLength + 1);
    let result = "";
    for (let i = 0; i < length; i++) {
        result += getRandomLetter();
    }
    return result;
}

//Returns a string in ascending order
const getSortedString = function(string) { return string.split("").sort(); }

console.log(getSortedString(getRandomString(10, 20)));