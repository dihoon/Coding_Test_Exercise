// 시험 성적
// https://www.acmicpc.net/problem/9498

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let score = parseInt(input);
let grade;

if (score >= 90 && score <= 100){
    grade = 'A';
}else if(score >= 80 && score < 90){
    grade = 'B';
}else if(score >= 70 && score < 80){
    grade = 'C';
}else if(score >= 60 && score < 70){
    grade = 'D';
}else{
    grade = 'F';
}
console.log(grade);