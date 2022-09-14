// 구구단
// https://www.acmicpc.net/problem/2739

const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : "input.txt").toString().trim();

for (let i=1;i<=9;i++){
    console.log(input + ' * ' + i + " = " + input*i);
}