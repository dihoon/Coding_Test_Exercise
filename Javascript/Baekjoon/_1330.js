// 두 수 비교하기
// https://www.acmicpc.net/problem/1330

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split(" ");

var a = parseInt(input[0]);
var b = parseInt(input[1]);

if (a > b){
    console.log(">");
}else if (a < b){
    console.log("<");
}else{
    console.log("==");
}