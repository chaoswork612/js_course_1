function power(val, pow) {
    if (pow > 1) {
        return val * power(val, pow - 1);
    } else if (val > 0 && pow == 0) {
        return 1;
    } else if (val == 0 && pow == 0) {
        return false;
    } else {
        return val;
    }
}
let a = Math.round(Math.random()*10);
let b = Math.round(Math.random()*10);

console.log(a, b);
console.log(power(a, b));