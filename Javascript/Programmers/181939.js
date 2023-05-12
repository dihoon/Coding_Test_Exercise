// 더 크게 합치기
// https://school.programmers.co.kr/learn/courses/30/lessons/181939

function solution(a, b) {
  const [l,r] = [String(a), String(b)];
  const left = Number(l+r);
  const right = Number(r+l);
  return left >= right ? left : right;
}