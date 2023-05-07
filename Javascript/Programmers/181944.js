// 홀짝 구분하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181944

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', function (line) {
    input = line;
}).on('close', function () {
    if(parseInt(input) % 2 === 0) {
        console.log(`${input} is even`);
    } else {
        console.log(`${input} is odd`);
    }
});