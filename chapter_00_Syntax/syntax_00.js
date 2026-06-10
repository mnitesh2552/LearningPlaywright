// JavaScript Syntax Reference
// This file shows common JavaScript syntax with short explanations and basic examples.

// 1. Single-line comment
// A single-line comment starts with two forward slashes.

/*
  2. Multi-line comment
  A multi-line comment starts with slash-star and ends with star-slash.
  It is useful for writing longer notes.
*/

// 3. Output
// console.log() prints a value to the console.
console.log("Hello, JavaScript!");

// 4. Variables
// let is used for values that can change.
let age = 20;
age = 21;

// const is used for values that should not be reassigned.
const country = "India";

// var is the old way to create variables. Prefer let and const in modern JavaScript.
var oldVariable = "I still work";

// 5. Data types
// JavaScript has strings, numbers, booleans, undefined, null, objects, arrays, symbols, and bigints.
const name = "Rahul"; // string
const marks = 85; // number
const isPassed = true; // boolean
let futureValue; // undefined
const emptyValue = null; // null
const bigNumber = 12345678901234567890n; // bigint

// 6. Strings
// Strings can use single quotes, double quotes, or backticks.
const singleQuote = 'Hello';
const doubleQuote = "Hello";
const templateString = `My name is ${name} and my age is ${age}`;

// 7. Arithmetic operators
// Used for basic math.
const sum = 10 + 5;
const difference = 10 - 5;
const product = 10 * 5;
const quotient = 10 / 5;
const remainder = 10 % 3;
const power = 2 ** 3;

// 8. Assignment operators
// Used to assign or update values.
let score = 10;
score += 5; // score = score + 5
score -= 2; // score = score - 2
score *= 3; // score = score * 3
score /= 2; // score = score / 2

// 9. Comparison operators
// Used to compare values. They return true or false.
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 8);
console.log(10 === 10); // strict equal
console.log(10 !== 5); // strict not equal

// 10. Logical operators
// && means AND, || means OR, ! means NOT.
const hasId = true;
const hasTicket = false;
console.log(hasId && hasTicket);
console.log(hasId || hasTicket);
console.log(!hasId);

// 11. if statement
// Runs code only when the condition is true.
if (age >= 18) {
  console.log("Adult");
}

// 12. if else statement
// Runs one block if true, another block if false.
if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// 13. else if statement
// Checks multiple conditions one by one.
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 40) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// 14. Ternary operator
// A short way to write simple if else logic.
const result = marks >= 40 ? "Pass" : "Fail";
console.log(result);

// 15. switch statement
// Useful when comparing one value with many possible cases.
const day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Another day");
}

// 16. for loop
// Repeats code a specific number of times.
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 17. while loop
// Repeats code while the condition is true.
let count = 1;
while (count <= 3) {
  console.log(count);
  count++;
}

// 18. do while loop
// Runs at least once, then repeats while the condition is true.
let number = 1;
do {
  console.log(number);
  number++;
} while (number <= 3);

// 19. break
// Stops a loop early.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// 20. continue
// Skips the current loop step and moves to the next one.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// 21. Function declaration
// A reusable block of code.
function greetUser(userName) {
  return `Hello, ${userName}`;
}
console.log(greetUser("Amit"));

// 22. Function expression
// A function stored inside a variable.
const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3));

// 23. Arrow function
// A shorter way to write functions.
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

// 24. Default parameter
// Gives a function parameter a default value.
function welcome(userName = "Guest") {
  console.log(`Welcome, ${userName}`);
}
welcome();

// 25. Array
// An array stores multiple values in one variable.
const fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); // first item

// 26. Array methods
// Common ways to work with arrays.
fruits.push("orange"); // add at end
fruits.pop(); // remove from end
fruits.unshift("grapes"); // add at start
fruits.shift(); // remove from start

// 27. for...of loop
// Used to loop through array values.
for (const fruit of fruits) {
  console.log(fruit);
}

// 28. Object
// An object stores data as key-value pairs.
const student = {
  studentName: "Priya",
  studentAge: 19,
  course: "JavaScript",
};
console.log(student.studentName);
console.log(student["course"]);

// 29. for...in loop
// Used to loop through object keys.
for (const key in student) {
  console.log(key, student[key]);
}

// 30. Destructuring
// Used to extract values from arrays or objects.
const [firstFruit, secondFruit] = fruits;
const { studentName, course } = student;
console.log(firstFruit, secondFruit, studentName, course);

// 31. Spread operator
// Expands array or object values.
const moreFruits = [...fruits, "pineapple"];
const updatedStudent = { ...student, city: "Delhi" };

// 32. Rest parameter
// Collects many arguments into an array.
function total(...numbers) {
  let answer = 0;
  for (const item of numbers) {
    answer += item;
  }
  return answer;
}
console.log(total(1, 2, 3, 4));

// 33. Optional chaining
// Safely reads nested object properties.
const user = {
  profile: {
    email: "user@example.com",
  },
};
console.log(user.profile?.email);

// 34. Nullish coalescing
// Uses the right value only when the left value is null or undefined.
const inputName = null;
const displayName = inputName ?? "Unknown User";
console.log(displayName);

// 35. try catch finally
// Handles errors without stopping the whole program immediately.
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("This always runs");
}

// 36. Class
// A class is a template for creating objects.
class Person {
  constructor(personName, personAge) {
    this.personName = personName;
    this.personAge = personAge;
  }

  introduce() {
    return `I am ${this.personName}`;
  }
}

const person1 = new Person("Neha", 22);
console.log(person1.introduce());

// 37. Inheritance
// A class can extend another class.
class Teacher extends Person {
  constructor(personName, personAge, subject) {
    super(personName, personAge);
    this.subject = subject;
  }

  teach() {
    return `${this.personName} teaches ${this.subject}`;
  }
}

const teacher1 = new Teacher("Ravi", 30, "Math");
console.log(teacher1.teach());

// 38. Promise
// A promise represents a value that may be available now, later, or never.
const myPromise = new Promise((resolve) => {
  resolve("Promise completed");
});

myPromise.then((message) => {
  console.log(message);
});

// 39. async and await
// async functions return promises. await waits for a promise to finish.
async function getMessage() {
  const message = await myPromise;
  console.log(message);
}
getMessage();

// 40. setTimeout
// Runs code once after a delay in milliseconds.
setTimeout(() => {
  console.log("Runs after 1 second");
}, 1000);

// 41. setInterval
// Runs code again and again after a delay. clearInterval stops it.
let timerCount = 0;
const timerId = setInterval(() => {
  timerCount++;
  console.log(timerCount);

  if (timerCount === 3) {
    clearInterval(timerId);
  }
}, 1000);

// 42. typeof
// Checks the type of a value.
console.log(typeof "hello");
console.log(typeof 100);
console.log(typeof true);

// 43. Template literal multi-line string
// Backticks can create strings on multiple lines.
const multiLineString = `This is line one
This is line two
This is line three`;
console.log(multiLineString);

// 44. Import and export syntax
// Used with modules. These lines are examples and should be used in separate module files.
// export const appName = "Syntax App";
// export default function startApp() {}
// import startApp, { appName } from "./app.js";

// 45. DOM syntax
// Used in browser JavaScript to select and update HTML elements.
// const heading = document.querySelector("h1");
// heading.textContent = "New Heading";
// heading.addEventListener("click", function () {
//   console.log("Heading clicked");
// });

// End of basic JavaScript syntax examples.
