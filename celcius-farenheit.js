function celciusToFarenheit(celciusValue) {
    let farenheit = (celciusValue * (9 / 5)) + 32;
    return farenheit;
}

let givenCelcius = 35;
let calculateTemp = celciusToFarenheit(givenCelcius);
console.log(givenCelcius + " degree Celcius equal to " + calculateTemp + " degree Farenhrit");