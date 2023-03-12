// 가까운 수
// https://school.programmers.co.kr/learn/courses/30/lessons/120890

function solution(array, n) {
  return array.map(x=>[x, Math.abs(x-n)]).sort((a,b)=>a[1]-b[1] || a[0] - b[0])[0][0];
}