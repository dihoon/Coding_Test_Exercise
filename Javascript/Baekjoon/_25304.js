// 영수증
// https://www.acmicpc.net/problem/25304

const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : "input.txt").toString().trim().split('\n');

let total = parseInt(input[0]);

let price;
let num;

let sum = 0;

for (let i=2;i<input.length;i++){
    [price, num] = input[i].split(' ').map(x=>parseInt(x));
    sum += price * num;
}

if (total === sum){
    console.log("Yes");
}else{
    console.log("No");
}