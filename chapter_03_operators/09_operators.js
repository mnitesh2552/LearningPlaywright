// JavaScript Operators
// Run this file with: node chapter_03_operators/09_operators.js

console.log("===== Arithmetic Operators =====");
let a = 10;
let b = 3;

console.log("Addition (+):", a + b);
console.log("Subtraction (-):", a - b);
console.log("Multiplication (*):", a * b);
console.log("Division (/):", a / b);
console.log("Remainder (%):", a % b);
console.log("Exponentiation (**):", a ** b);
console.log("Increment (++):", ++a);
console.log("Decrement (--):", --b);
console.log("Unary plus (+):", +"25");
console.log("Unary negation (-):", -a);

console.log("\n===== Assignment Operators =====");
let x = 10;
console.log("Assignment (=):", x);

x += 5;
console.log("Addition assignment (+=):", x);
x -= 3;
console.log("Subtraction assignment (-=):", x);
x *= 2;
console.log("Multiplication assignment (*=):", x);
x /= 4;
console.log("Division assignment (/=):", x);
x %= 3;
console.log("Remainder assignment (%=):", x);
x **= 3;
console.log("Exponentiation assignment (**=):", x);

let bitValue = 5;
bitValue <<= 1;
console.log("Left shift assignment (<<=):", bitValue);
bitValue >>= 1;
console.log("Right shift assignment (>>=):", bitValue);
bitValue >>>= 1;
console.log("Unsigned right shift assignment (>>>=):", bitValue);
bitValue &= 3;
console.log("Bitwise AND assignment (&=):", bitValue);
bitValue |= 8;
console.log("Bitwise OR assignment (|=):", bitValue);
bitValue ^= 2;
console.log("Bitwise XOR assignment (^=):", bitValue);

let logicalValue = null;
logicalValue ??= "default value";
console.log("Nullish coalescing assignment (??=):", logicalValue);

let truthyValue = "existing value";
truthyValue &&= "changed because truthy";
console.log("Logical AND assignment (&&=):", truthyValue);

let falsyValue = "";
falsyValue ||= "changed because falsy";
console.log("Logical OR assignment (||=):", falsyValue);

console.log("\n===== Comparison Operators =====");
console.log("Equal (==):", 5 == "5");
console.log("Not equal (!=):", 5 != "6");
console.log("Strict equal (===):", 5 === "5");
console.log("Strict not equal (!==):", 5 !== "5");
console.log("Greater than (>):", 10 > 5);
console.log("Greater than or equal (>=):", 10 >= 10);
console.log("Less than (<):", 3 < 7);
console.log("Less than or equal (<=):", 3 <= 3);

console.log("\n===== Logical Operators =====");
console.log("Logical AND (&&):", true && false);
console.log("Logical OR (||):", true || false);
console.log("Logical NOT (!):", !true);
console.log("Nullish coalescing (??):", null ?? "fallback");

console.log("\n===== Bitwise Operators =====");
console.log("Bitwise AND (&):", 5 & 3);
console.log("Bitwise OR (|):", 5 | 3);
console.log("Bitwise XOR (^):", 5 ^ 3);
console.log("Bitwise NOT (~):", ~5);
console.log("Left shift (<<):", 5 << 1);
console.log("Sign-propagating right shift (>>):", -5 >> 1);
console.log("Zero-fill right shift (>>>):", -5 >>> 1);

console.log("\n===== String Operator =====");
console.log("Concatenation (+):", "Hello" + " " + "JavaScript");
let message = "Hello";
message += " Operators";
console.log("Concatenation assignment (+=):", message);

console.log("\n===== Conditional Operator =====");
const age = 18;
const canVote = age >= 18 ? "Yes" : "No";
console.log("Ternary/conditional (condition ? trueValue : falseValue):", canVote);

console.log("\n===== Relational Operators =====");
const student = { name: "Nitesh" };
console.log("in:", "name" in student);
console.log("instanceof:", [] instanceof Array);

console.log("\n===== Unary Operators =====");
console.log("typeof:", typeof student);
console.log("void:", void 0);

const temporary = { value: 100 };
console.log("delete before:", temporary);
delete temporary.value;
console.log("delete after:", temporary);

console.log("\n===== Object And Property Operators =====");
const user = {
  name: "Nitesh",
  address: {
    city: "Pune",
  },
  greet() {
    return "Hello";
  },
};

console.log("Property access (.):", user.name);
console.log("Property access ([]):", user["name"]);
console.log("Optional chaining (?.):", user.address?.city);
console.log("Optional chaining with function call (?.()):", user.greet?.());
console.log("new:", new Date().getFullYear());

console.log("\n===== Spread And Rest Syntax =====");
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log("Spread (...):", moreNumbers);

function sum(...values) {
  return values.reduce((total, value) => total + value, 0);
}
console.log("Rest (...):", sum(1, 2, 3, 4));

console.log("\n===== Comma Operator =====");
const commaResult = (1 + 2, 3 + 4);
console.log("Comma (,):", commaResult);
