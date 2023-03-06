// 주사위의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/120845

function solution(box, n) {
  return box.map(x=>parseInt(x/n)).reduce((r,x)=>r*x);
}