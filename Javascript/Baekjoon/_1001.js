// A-B
// https://www.acmicpc.net/problem/1001

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().split(" ");
var a = input[0];
var b = input[1];
console.log(a - b);