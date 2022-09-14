// 킹, 퀸, 룩, 비숍, 나이트, 폰
// https://www.acmicpc.net/problem/3003

function solution(input_arr){
    for (var i=0;i<arr.length;i++){
        arr[i] -= input_arr[i];
    }
    return arr;
}

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split(" ");
const arr = [1,1,2,2,2,8];

console.log(solution(input).join(" "));
