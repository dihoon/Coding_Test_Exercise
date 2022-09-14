// 사칙연산
// https://www.acmicpc.net/problem/10869

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split(" ");

var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(Math.trunc(a/b));
console.log(a%b);