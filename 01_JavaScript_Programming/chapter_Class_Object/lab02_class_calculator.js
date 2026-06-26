class Calculator {

    subtraction(a, b) {
        console.log("Subtraction =", a - b);
    }

    multiplication(a, b) {
        console.log("Multiplication =", a * b);
    }

    division(a, b) {
        console.log("Division =", a / b);
    }

    modulus(a, b) {
        console.log("Modulus =", a % b);
    }

}

let cal = new Calculator();

cal.subtraction(20, 5);
cal.multiplication(20, 5);
cal.division(20, 5);
cal.modulus(20, 5);