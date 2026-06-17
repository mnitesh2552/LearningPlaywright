let a = 10;
let b = 25;
let c = 15;

let max = (a > b)
    ? ((a > c) ? a : c)
    : ((b > c) ? b : c);

console.log("Maximum number is:", max);
let num1 = 10;

let num2 = 25;

let num3 = 15;

let max2 = (num1 > num2)

    ? ((num1 > num3) ? num1 : num3)

    : ((num2 > num3) ? num2 : num3);

console.log("Maximum number is:", max2);