// 빠른 A+B
// https://www.acmicpc.net/problem/15552

const fs = require('fs');
const input = fs.readFileSync(process.platform==="linux" ? 0 : "input.txt").toString().trim().split('\n');

let a, b;

let arr = Array.from({length:input[0]});

for (let i=0;i<input[0];i++){
    [a, b] = input[i+1].split(' ').map(x=>parseInt(x));
    arr[i] = a + b;
}

console.log(arr.join('\n'));