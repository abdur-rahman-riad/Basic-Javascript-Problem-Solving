function countDown(number) {
    console.log(number);
    const newNumber = number - 1;
    if (newNumber > 0) {
        countDown(newNumber);
    }
}
countDown(5);

/* function loopFunction(number) {
    for (let i = number; i >= 1; i--) {
        console.log(i);
    }
}
loopFunction(5); */