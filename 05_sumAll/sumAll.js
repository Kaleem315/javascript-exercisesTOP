const sumAll = function(begin,end) {
let log = console.log;
let rangeFrom = 0;
let rangeTo = 0;
if (begin < end){
    rangeFrom = begin;
    rangeTo = end;
} else if(begin> end){
    rangeFrom = end;
    rangeTo = begin;
}

let range = [];
let sum = 0;
function getRange(rangeFrom,rangeTo) {
for (i = rangeFrom; i <= rangeTo; ++i ) {
    range.push(i);
}
} if ((Number.isInteger(begin) === true) && (Number.isInteger(end) === true) && (begin >= 0) && (end >= 0)){
getRange(rangeFrom,rangeTo);
for (n of range){
    sum += n;
}
} else {return 'ERROR'};
return sum;
};
console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
