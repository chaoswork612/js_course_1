let degreesInCelsius = prompt('Enter temperature in Celsius:');
function convertToFahrenheit(valueToConvert) {
    let degreesInFahrenheit = (9 / 5) * parseFloat(valueToConvert) + 32;
    return degreesInFahrenheit;
}

alert('The temperature in Fahrenheit is : ' + convertToFahrenheit(degreesInCelsius));