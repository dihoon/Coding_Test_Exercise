// 곱셈 
// https://www.acmicpc.net/problem/2588

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

var a = parseInt(input[0]);
var b = input[1];
var sum = 0;
var value;

for (var i=0;i<3;i++){
    value = a * parseInt(b[2-i]);
    console.log(value);
    sum += value*10**(i);
}
console.log(sum);