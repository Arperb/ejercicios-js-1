
// Imagine you are building a compiler. 
// Before running any code, the compiler must check that 
// the parentheses in the program are balanced. 
// Every opening bracket must have a corresponding closing bracket. 
// We can approximate this using strings.

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:

// Open brackets are closed by the same type of brackets.
// Open brackets are closed in the correct order.
// Note that an empty string is also considered valid.
// Example1:

// Input: "((()))"
// Output: True

// Example2:
// Input: "[()]{}"
// Output: True

// Example3:
// Input: "({[)]"
// Output: False

//Example 1

let input = "((()))"



let isValid = function (input) {
    if (input === null || input.length <= 0) return true;
    let cArr = input.split('');
    let stack = [];
    for (var c of cArr) {
        if (c === '[') stack.push(']');
        else if (c === '{') stack.push('}');
        else if (c === '(') stack.push(')');
        else if (stack.length === 0 || c !== stack.pop()) return false;
    }
    if (stack.length === 0) return true;

};
console.log(isValid(input))


//Example 2

let input2 = "[()]{}"

console.log(isValid(input2))


//Example 3

let input3 = "({[)]"

console.log(isValid(input3))