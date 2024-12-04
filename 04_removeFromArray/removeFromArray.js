// we are given an array of items
const removeFromArray = function(array,...rmV) {
// we have to get the index positions of all items in the array and store them in a variable.

    let givenArray = array;
    let itterate = 0;
    let rmValues = rmV;
    let duplicates = [];
    let duplicateLength = duplicates.length;
    function getDuplicates() {
        for (n of givenArray){
            for (m of rmValues){
                if (n === m){
                    duplicates.push(n);  
                }
            }
        }
        return duplicates;
    }
    getDuplicates();
        for (n of duplicates) {
        let indexArray = givenArray.indexOf(duplicates[itterate]);
    givenArray.splice(indexArray,1);
     ++itterate;}
itterate = 0;
return givenArray
};
console.log(removeFromArray([1,2,3,4],3,2));
console.log(1,4);


// Do not edit below this line
module.exports = removeFromArray;


// get the index positions of required and remove the same from desired array.
// get desired array as output.
