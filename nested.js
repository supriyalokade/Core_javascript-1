const checkNumber = (num) => {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

const num = 5; // Change this number to test

console.log(checkNumber(num));
