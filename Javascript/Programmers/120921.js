// 문자열 밀기
// https://school.programmers.co.kr/learn/courses/30/lessons/120921

function solution(A, B) {
  const a = A.split("");
  const b = B.split("");
  let cnt = -1;
  
  for (let i=0;i<a.length;i++){
      cnt++;
      if (a.join("") === b.join("")) return cnt;
      else {
          a.unshift(a.pop());
      }
  }
  return -1;
}