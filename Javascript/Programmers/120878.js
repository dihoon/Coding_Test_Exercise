// 유한소수 판별하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120878

function solution(a, b) {
  let d = b;
  while (a % b !== 0) {
      [a, b] = [b, a%b];
  }
  d /= b;
  while (true) {
      if (d % 2 === 0) d /= 2;
      else if (d % 5 === 0) d /= 5;
      else if (d === 1) return 1;
      else return 2;
  }
}