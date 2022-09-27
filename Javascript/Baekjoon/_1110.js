// 더하기 사이클
// https://www.acmicpc.net/problem/1110

const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : "input.txt").toString().trim();

let newNum;
let cnt = 0;

newNum = input;

do {
    if (newNum.length === 1){
        newNum = '0' + newNum;
    }
    [a, b] = [newNum[0], newNum[1]].map(x=>parseInt(x));
    newNum = newNum[1] + (a + b >= 10 ? a + b - 10 : a + b);
    cnt++;
}
while(parseInt(newNum) !== parseInt(input));

console.log(cnt);