//The comma operator in JavaScript allows multiple expressions to be evaluated in a single statement, returning the result of the last expression. It is generally used to execute multiple expressions where only one is expected, such as in a loop or an assignment statement. Each expression is evaluated from left to right, but only the value of the final expression is returned.

let x = (10, 20, 30);  // Only 30 will be assigned to x

console.log(x);  // Output: 30
