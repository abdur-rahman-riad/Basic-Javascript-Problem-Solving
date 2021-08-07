let randoms = Math.random() * 10;
let randomNumber = Math.round(randoms);
for (let i = 0; i <= 10; i++) {
    if (randomNumber == 5) {
        console.log("Random Number Match");
    }
    else {
        console.log(i);
    }
}
// console.log(randomNumber);