const generateNumbers = (num1, num2) => {
    let result = [];
    for (let i = num1 + 1; i <= num2; i++) {
        result.push(i);
    }
    return result;
}

const num1 = 10;
const num2 = 25;

console.log(generateNumbers(num1, num2).join(', '));
