function fibonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;

    let a = 0; // F(0)
    let b = 1; // F(1)
    let c; // This will hold the Fibonacci number we are calculating

    for (let i = 2; i <= num; i++) {
        c = a + b; // Calculate the next Fibonacci number
        a = b;     // Update a to the previous b
        b = c;     // Update b to the newly calculated Fibonacci number
    }

    return b; // b is the Fibonacci number we want
}

module.exports = fibonacci;
const fibonacci = require('./path/to/your/fibonacci');

console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55
