// 덧셈식 출력하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181947

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let num1;
let num2;

rl.on('line', function (line) {
    input = line.split(' ');
    num1 = Number(input[0]);
    num2 = Number(input[1]);
}).on('close', function () {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
});