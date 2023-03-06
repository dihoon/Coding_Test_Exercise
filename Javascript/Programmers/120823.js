// 직각삼각형 출력하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120823

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    const num = line.split(" ");
    for (let i=0;i<num;i++){
        console.log("*".repeat(i+1));
    }
}).on('close', function () {
});