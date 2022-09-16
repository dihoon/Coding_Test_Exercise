// 합
// https://www.acmicpc.net/problem/8393

const fs = require('fs');
const input = fs.readFileSync(process.platform==="linux" ? 0 : "input.txt").toString().trim();

let num = parseInt(input);

console.log(num*(num+1)/2);