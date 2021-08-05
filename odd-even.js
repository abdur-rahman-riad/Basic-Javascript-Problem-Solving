function isNumberEvenOdd(number) {
    let oddNumber = "Odd Number";
    let evenNumber = "Even Number";

    if (number % 2 == 0) {
        return evenNumber;
    }
    else {
        return oddNumber;
    }
}

let givenNumber = 20;
let checkEvenOdd = isNumberEvenOdd(givenNumber);
console.log(givenNumber + " is " + checkEvenOdd);