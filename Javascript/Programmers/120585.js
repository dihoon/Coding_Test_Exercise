// 머쓱이보다 키 큰 사람
// https://school.programmers.co.kr/learn/courses/30/lessons/120585

function solution(array, height) {
  return array.reduce((r,x)=>{return r + (x > height ? 1 : 0)},0);
}