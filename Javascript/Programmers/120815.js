// 피자 나눠 먹기 (2)
// https://school.programmers.co.kr/learn/courses/30/lessons/120815

function solution(n) {
  let num = 0;
  while (true) {
      num++;
      if (6*num % n === 0) break;
  }
  return num;
}