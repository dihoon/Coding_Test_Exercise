// A+B - 7
// https://www.acmicpc.net/problem/11021

const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : "input.txt").toString().trim().split('\n');

let answer = [];

for(let i=0;i<input[0];i++){
    [a, b] = input[i+1].split(' ').map(x=>parseInt(x));
    answer.push(`Case #${i+1}: ${a+b}`);
}

console.log(answer.join('\n'));