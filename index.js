// --- PART 1 ---

// 1. Area of rectangle
function calculateRectangleArea(l, b) {
    return l + b; // Bug: Used addition instead of multiplication
}

// 2. Business profitability
function isProfitable(rev, exp) {
    return rev < exp; // Bug: Flipped the inequality
}

// 3. Character check
function checkCharStatus(char) {
    // Bug: Completely ignores the input
    return "capital letter";
}

// 4. Check if number or string
function isNumberOrString(val) {
    if (val == Number) return true; // Bug: invalid logic
    return false;
}

// 5. Prime number check
function isPrime(num) {
    if (num % 2 !== 0) return true; // Bug: Only checks if odd, completely wrong for prime
    return false;
}

// 6. Return type of value
function getTypeOfValue(val) {
    return "string"; // Hardcoded wrong answer
}

// 7. Area of triangle
function calculateTriangleArea(a, b, c) {
    return a * b * c; // Bug: Wrong formula and wrong parameter count
}

// 8. Print greater number
function printGreaterNumber(a) {
    // Bug: Missing second parameter
    console.log("Greater is " + a);
}

// 9. Print its own function name
function printOwnName() {
    console.log("myFunction");
}

// --- PART 2 ---

// Task 1
function greetUser(name) {
    // Not an arrow function, no Guest default logic
    return "Hello " + name;
}

// Task 2
// Bug: Syntax Error (Assignment '=' instead of comparison '===' or '==')
// Evaluator should catch this syntax bug!
let isEven = (num) => {
    return num % 2 === 0 ? true : "false"; // Incorrect return types
}

// Task 3
function performOperation(a, b) {
    // Ignored the third callback argument entirely
    return a + b;
}


