var myNumber = 2063;
var myNmae = "Abdur Rahman";
var areYouSingle = true;

let myCgpa = 3.15;
const myDept = "CSE";
myCgpa = 3.25;

let num1 = 10;
let num2 = 2;
let summation = num1 + num2;
console.log("Summation is: " + summation);
let subtraction = num1 - num2;
console.log("Subtraction is: " + subtraction);
let multiplication = num1 * num2;
console.log("Multiplication is: " + multiplication);
let division = num1 / num2;
console.log("Division is: " + division);

let value1 = 10;
let value2 = 20;
if (value1 > value2) {
    console.log("Value-1 is Bigger");
}
else if (value1 < value2) {
    console.log("Value-2 is Bigger");
}
else if (value1 == value2) {
    console.log("Bother Value are Equal");
}
else if (value1 != value2) {
    console.log("Both Value are Different");
}
else if (value1 <= value2) {
    console.log("Value-1 is Less or Equal to Value-2");
}
else if (value >= value2) {
    console.log("Value-1 is Gretter or Equal to Value-2");
}
else {
    console.log("Unidenfied Value");
}

let marks1 = 80;
let marks2 = 70;
if ((marks1 >= 80 && marks1 <= 100) || marks2 >= 70 && marks2 < 80) {
    console.log("Engineering Confirm");
}
else {
    console.log("Engineering Geya Haat che");
}

let number = 7;
while (number < 20) {
    console.log(number);
    number++;
}

myArray = [23, 43, 21, 54, 67, 89];
console.log(myArray.length);
console.log(myArray);
myArray[3] = 50;
console.log(myArray);
myArray.push(60);
console.log(myArray);
myArray.push(75);
console.log(myArray);
myArray.pop();
console.log(myArray);

let arrayElements = [20, 25, 15, 45, 10, 30];
for (const elements of arrayElements) {
    console.log(elements);
}

for (let i = 0; i < arrayElements.length; i++) {
    console.log(arrayElements[i]);
}

let numbers = [50, 60, 70, 80, 90, 100, 10, 300, 20, 500];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 80) {
        console.log(numbers[i]);
    }
}

function threeNumbers(number1, number2, number3) {
    let firstMultiply = number1 * number2;
    let secondMultiply = firstMultiply * number3;
    return secondMultiply;
}
console.log(threeNumbers(5, 2, 3));

let myFamily = [
    { memberName: "Riad", age: 21 },
    { memberName: "Fahad", age: 18 },
    { memberName: "Rifat", age: 13 },
    { memberName: "Ariya", age: 2 }
];
myFamily[0].memberName = "Abdur Rahman";
myFamily[1].memberName = "Arifur Rahman";
myFamily[2].memberName = "Sheikh Sohidul";
myFamily[3].memberName = "Umme Salma Sultana";
console.log(myFamily);

function feetToInch(feet) {
    let inches = feet * 12;
    return inches;
}
console.log(feetToInch(5));

function centemeterToMeter(centemeter) {
    let meter = centemeter * 0.01;
    return meter;
}
console.log(centemeterToMeter(200));

function paperRequirements(firstBook, secondBook, thirdBook) {
    let firstBookPaper = 100;
    let secondBookPaper = 200;
    let thirdBookPaper = 300;

    let firstBookPaperQuantity = firstBook * firstBookPaper;
    let secondBookPaperQuantity = secondBook * secondBookPaper;
    let thirdBookPaperQuantity = thirdBookPaper * thirdBook;

    let totalPaperNeed = firstBookPaperQuantity + secondBookPaperQuantity + thirdBookPaperQuantity;
    return totalPaperNeed;
}
console.log(paperRequirements(5, 2, 1));


function bestFriend(friend) {
    for (let i = 0; i < friend.length; i++) {
        elements = friend[i];
    }
    return elements;
}
let friendsName = ['Riad', 'Abdur', 'Mohammad', 'Rahman'];
console.log(bestFriend(friendsName));