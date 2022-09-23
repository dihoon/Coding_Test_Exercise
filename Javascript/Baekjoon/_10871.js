// X보다 작은 수
// https://www.acmicpc.net/problem/10871

const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : "input.txt").toString().trim().split('\n');

x = parseInt(input[0].split(' ')[1]);

arr = input[1].split(' ');

console.log(arr.filter(value=>value<x).join(" "));