// 순서쌍의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/120836

function solution(n) {
  let count = 0;
  for (let i=1; i<=Math.sqrt(n);i++){
      if (n % i === 0) count++;
  }
  return Math.sqrt(n) % 1 === 0 ? 2*count-1 : count*2;
}