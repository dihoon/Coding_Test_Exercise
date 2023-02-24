// 배열의 평균값
// https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
  return numbers.reduce((x,r)=>{return r + x},0)/numbers.length;
}