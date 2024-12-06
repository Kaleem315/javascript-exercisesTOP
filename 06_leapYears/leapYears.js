const leapYears = function(year) {
    let leapYear = 1
    let divisibleByFour = year/4;
    let divisibleByFourH = year/400;
    let divisibleByHundred = year/100;

    if (year>=400){
        if ((Number.isInteger(divisibleByHundred)===true) && (Number.isInteger(divisibleByFourH)===false)){
            leapYear = false;
        }  else if((Number.isInteger(divisibleByHundred)===true) && (Number.isInteger(divisibleByFourH)===true)){
            leapYear = true;
        } else if (Number.isInteger(divisibleByFour)===true){
            leapYear = true;
        } else {leapYear = false;}
        return leapYear
    } else {
        if (Number.isInteger(divisibleByFour)===true){
            leapYear = true;
        } else {leapYear = false;}
        return leapYear
    }
}; console.log(leapYears(3000))


// Do not edit below this line
module.exports = leapYears;
