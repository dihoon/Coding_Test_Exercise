// 팩토리얼 
// https://school.programmers.co.kr/learn/courses/30/lessons/120848

function solution(n) {
  let num = 1;
  let result = 1;
  while (result*(num+1) <= n) {
      num++;
      result*=num;
  }
  return num;
}