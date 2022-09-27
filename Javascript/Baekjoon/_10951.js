// A+B - 4
// https://www.acmicpc.net/problem/10951

const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : "input.txt").toString().trim().split("\n");

const answer = [];

for (let i=0;i<input.length;i++){
    [a, b] = input[i].split(' ').map(x=>parseInt(x));
    answer.push(a + b);
}

console.log(answer.join("\n"));