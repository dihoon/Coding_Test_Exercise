// 소인수분해
// https://school.programmers.co.kr/learn/courses/30/lessons/120852

function solution(n) {
  const result = [];
  let divisor = 2;
  
  while (n !== 1) {
      if (n % divisor === 0) {
          n /= divisor;
          if (!result.includes(divisor)) result.push(divisor);
      }else divisor++;
  }
  return result;
}