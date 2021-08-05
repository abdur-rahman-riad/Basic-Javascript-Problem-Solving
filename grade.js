console.log("Daffodil International Univeristy Grade System");

function gradeCalculation(marks) {
    let aPlus = "A+", aGrade = "A", aMinus = "A-", bPlus = "B+", bGrade = "B", bMinus = "B-", cPlus = "C+", cGrade = "C", dGrade = "D", fail = "F", unvalidMarks = "Unvalid Marks";
    if (marks >= 80 && marks <= 100) {
        return aPlus;
    }
    else if (marks >= 75 && marks < 80) {
        return aGrade;
    }
    else if (marks >= 70 && marks < 75) {
        return aMinus;
    }
    else if (marks >= 65 && marks < 70) {
        return bPlus;
    }
    else if (marks >= 60 && marks < 65) {
        return bGrade;
    }
    else if (marks >= 55 && marks < 60) {
        return bMinus;
    }
    else if (marks >= 50 && marks < 55) {
        return cPlus;
    }
    else if (marks >= 45 && marks < 50) {
        return cGrade;
    }
    else if (marks >= 40 && marks < 45) {
        return dGrade;
    }
    else if (marks >= 0 && marks < 40) {
        return fail;
    }
    else {
        return unvalidMarks;
    }
}

let givenMarks = 89;
let calculateGrade = gradeCalculation(givenMarks);
console.log("You Got " + calculateGrade + " in This Subject");