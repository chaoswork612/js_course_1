function getRandom(min, max)
{
  return Math.random() * (max - min) + min;
}


let a = Math.round(getRandom(-10, 10));
let b = Math.round(getRandom(-10, 10));

console.log(a, b);

if (a >= 0 && b >= 0 && a > b || a == b)  {
    console.log(a - b);
} else if (a >= 0 && b >= 0 && a < b) {
    console.log(b - a);
} 
else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}