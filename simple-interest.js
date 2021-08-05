function simpleInterestCalculation(principleAmount, interestRate, timeInYear) {
    const calculationInterest = principleAmount * (1 + (interestRate * timeInYear));
    return calculationInterest;
}

let givenPrincipleAmount = 200;
let givenInterestRate = 10;
let givenTimeInYear = 5;

let interestInPercentage = givenInterestRate / 100;

let simpleInterest = simpleInterestCalculation(givenPrincipleAmount, interestInPercentage, givenTimeInYear);
console.log("Interest of " + givenPrincipleAmount + " Taka With " + givenInterestRate + "% Inerest Rate in " + givenTimeInYear + " Year is: " + simpleInterest);