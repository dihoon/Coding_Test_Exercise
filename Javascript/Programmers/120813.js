// 짝수는 싫어요
// https://school.programmers.co.kr/learn/courses/30/lessons/120813

function solution(n) {
  return Array(Math.ceil(n / 2)).fill().map((x,i)=>2*i+1);
}
