// 외계행성의 나이
// https://school.programmers.co.kr/learn/courses/30/lessons/120834

function solution(age) {
  return age.toString().split("").map(x=>String.fromCharCode(x.charCodeAt()+49)).join("");
}