// 치킨 쿠폰
// https://school.programmers.co.kr/learn/courses/30/lessons/120884

function solution(chicken) {
  let cnt = 0;
  while (chicken > 9) {
      const service = Math.floor(chicken/10);
      cnt += service;
      chicken %= 10;
      chicken += service;
  }
  return cnt;
}