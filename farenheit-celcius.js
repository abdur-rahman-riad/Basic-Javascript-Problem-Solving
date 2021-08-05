function farenheitToCelcius(farenheit) {
    let celcius = (farenheit - 32) * (5 / 9);
    celcius = celcius.toFixed(2);
    return celcius;
}

let givenFarenheit = 105;
let calculateTemp = farenheitToCelcius(givenFarenheit);
console.log(givenFarenheit + " degree Farenheit Equal to " + calculateTemp + " degree celcius");