// 삼각형의 완성조건 (1)
// https://school.programmers.co.kr/learn/courses/30/lessons/120889

function solution(sides) {
  const [c, a, b] =sides.sort((a, b)=>b-a);
  return c < a+b ? 1 : 2;
}