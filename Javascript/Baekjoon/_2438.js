// 별 찍기 - 1
// https://www.acmicpc.net/problem/2438

const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 0 : "input.txt").toString().trim();

for(let i=0;i<parseInt(input);i++){
    console.log('*'.repeat(i+1));
}