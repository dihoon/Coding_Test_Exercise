// 대소문자 바꿔서 출력하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181949

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', function (line) {
    input = line.split("");
}).on('close',function(){
    let str = "";
    for (let k in input){
        if (input[k].toUpperCase() === input[k]) {
            str += input[k].toLowerCase();
        } else {
            str += input[k].toUpperCase();
        }
    }
    console.log(str);
});