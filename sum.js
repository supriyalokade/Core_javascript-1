function calculateSum(n) {
    let sum = 0;
    let i = 1;

    // Do-while loop to calculate the sum from 1 to n
    do {
        sum += i;
        i++;
    } while (i <= n);

    return sum;
}

// Test the calculateSum function
const number = 5;  // Input your positive integer

console.log(`The sum of numbers from 1 to ${number} is: ${calculateSum(number)}`);
