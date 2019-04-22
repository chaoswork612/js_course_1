function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multipliction(a, b) {
    return a * b;
}

function division(a, b) {
    if (b != 0) {
        return a / b;
    } else {
        return "Division by zero";
    }
}

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "addition": 
            return addition(arg1, arg2);
        case "subtraction":
            return subtraction(arg1, arg2);
        case "multipliction":
            return multipliction(arg1, arg2);
        case "division":
            return division(arg1, arg2);
    }
}

console.log(mathOperation(5, 7, "addition"));
console.log(mathOperation(5, 4, "subtraction"));
console.log(mathOperation(5, 7, "multipliction"));
console.log(mathOperation(6, 3, "division"));
