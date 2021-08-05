function minutesToSecond(minutes) {
    const seconds = minutes * 60;
    return seconds;
}

let givenMinutes = 120;
let checkSeconds = minutesToSecond(givenMinutes);
console.log(givenMinutes + " Minutes Equal to " + checkSeconds + " Seconds");