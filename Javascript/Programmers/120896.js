// 한 번만 등장한 문자
// https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
  const set = new Set(s.split(""));
  const result = [];
  for (let c of [...set]){
      if ([...s].filter(x=>x===c).length === 1) result.push(c);
  }
  return result.length === 0 ? "" : result.sort().join("");
}