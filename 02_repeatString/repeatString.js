const repeatString = function(word,repeattimes) {
let givenWord = "";
if(repeattimes < 0){
    givenWord = 'ERROR'
} else for(let i=0; i<repeattimes; ++i){
    givenWord += word;
}
return givenWord;
};

// Do not edit below this line
module.exports = repeatString;
