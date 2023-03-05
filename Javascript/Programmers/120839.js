// 가위 바위 보 
// https://school.programmers.co.kr/learn/courses/30/lessons/120839

function solution(rsp) {
  const win = [5, 2, 0];
  return [...rsp].map(x=>win[parseInt(x)%4]).join("");
}