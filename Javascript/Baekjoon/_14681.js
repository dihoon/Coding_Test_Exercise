// 사분면 고르기
// https://www.acmicpc.net/problem/14681

const fs = require("fs");
const input = fs.readFileSync(process.platform === "linux" ? 0 : "input.txt").toString().trim().split("\r").join("").split("\n");

let x = parseInt(input[0]);
let y = parseInt(input[1]);

if (x > 0 && y > 0){
    answer = 1;
}else if(x < 0 && y > 0){
    answer = 2;
}else if(x < 0 && y < 0){
    answer = 3;
}else if(x > 0 && y < 0){
    answer = 4;
}

console.log(answer);