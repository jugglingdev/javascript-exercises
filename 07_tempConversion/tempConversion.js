const convertToCelsius = function(temp) {
  let result = (temp - 32) * .5556;

  return Math.round(result*10)/10;
};

const convertToFahrenheit = function(temp) {
  let result = (temp * 1.8) + 32;

  return Math.round(result*10)/10;
};

convertToCelsius(32);
convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
