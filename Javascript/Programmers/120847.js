// 최댓값 만들기(1)
// https://school.programmers.co.kr/learn/courses/30/lessons/120847

function solution(numbers) {
  const [a, b] = numbers.sort((a, b) => b - a);
  return a * b;
}
