function isLeapYear(year) {
    let yesLeapYear = "Yes! Leap Year";
    let noLeapYear = "No! Not Leap Year";

    if (year % 4 == 0) {
        return yesLeapYear;
    }
    else if (year % 100 == 0) {
        return noLeapYear;
    }
    else if (year % 400 == 0) {
        return yesLeapYear;
    }
    else {
        return noLeapYear;
    }
}

let givenYear = 4292;
let checkLeapYear = isLeapYear(givenYear);
console.log(givenYear + " is Leap Year ? --- " + checkLeapYear);
