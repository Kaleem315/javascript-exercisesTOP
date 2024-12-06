const convertToCelsius = function(tempF) {
  let toCelsius = Math.round(((tempF - 32)*(5/9))*10)/10;
  
  console.log(`conversion to celsius is ${toCelsius} degrees`);
  return toCelsius;
};

const convertToFahrenheit = function(tempC) {
  let toFarenheit = Math.round(((tempC*(9/5)) + 32)*10)/10;
  console.log(`conversion to farenheit is ${toFarenheit} degrees`);
  return toFarenheit;
};

console.log(convertToCelsius(98))
console.log(convertToFahrenheit(0))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


