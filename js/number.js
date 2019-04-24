// number data type
var a = 10;
console.log(a);
var b = 100;
console.log(b);
var a = 20;
console.log(a);
var c = 0x1E; // hex value of 30
console.log(c);
var d = 0.5;
console.log(d);

// addition
var sum = a + b;
console.log(sum);

// subtraction
var diff = d - c;
console.log(diff);

// multiplication
var mult = a * d;
console.log(mult);

// division
var divi = a / d;
console.log(divi);
var divi = b / a;
console.log(divi);

// modulus
var mod = b % a;
console.log(mod);
var mod = b % c;
console.log(mod);

var e = '20'; // not a number, but is a string
console.log(typeof e); // returns the type of variable e

console.log(a === e); // strict comparison // false
console.log(a == e); // loose comparison // truthy