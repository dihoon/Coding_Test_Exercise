// 하샤드 수
// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
   return x % x.toString().split("").map(x => parseInt(x)).reduce((r, e) => r + e) === 0 ? true : false;
}