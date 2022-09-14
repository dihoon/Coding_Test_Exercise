// 나머지
// https://www.acmicpc.net/problem/10430

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split(" ");

var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

console.log((a+b)%c);
console.log((a%c+b%c)%c);
console.log(a*b%c);
console.log(((a%c)*(b%c))%c);