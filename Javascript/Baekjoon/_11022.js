// A+B - 8
// https://www.acmicpc.net/problem/11022

const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 0 : "input.txt").toString().trim().split('\n');

let answer = [];

for (let i=0;i<input[0];i++){
    [a, b] = input[i+1].split(' ').map(function(x) {return parseInt(x);});

    answer.push(`Case #${i+1}: ${a} + ${b} = ${a+b}`);
}

console.log(answer.join('\n'));