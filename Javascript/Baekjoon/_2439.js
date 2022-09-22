// 별 찍기 - 2
// https://www.acmicpc.net/problem/2439

const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : "input.txt").toString();

for(let i=0;i<input;i++){
    console.log(" ".repeat(input-i-1)+'*'.repeat(i+1));
}