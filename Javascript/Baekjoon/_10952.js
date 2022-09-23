// A+B - 5
// https://www.acmicpc.net/problem/10952

const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : "input.txt").toString().trim().split('\n');

let answer = [];

for (let i=0;i<input.length-1;i++){
    [a, b] = input[i].split(' ').map(x => parseInt(x));
    answer.push(a + b);
}

console.log(answer.join("\n"));