const reverseString = function(word) {
let splitWord = word.split("");
let reverseWord = splitWord.reverse();
let requiredString = reverseWord.join("");
return requiredString;
};


// Do not edit below this line
module.exports = reverseString;
