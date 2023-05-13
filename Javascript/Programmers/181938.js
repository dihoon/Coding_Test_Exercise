// 두 수의 연산값 비교하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181938

function solution(a, b) {
  const [l, r] = [a,b].map(x=>String(x));
  const num1 = l+r;
  const num2 = 2*l*r;
  return num1 < num2 ? parseInt(num2) : parseInt(num1);
}