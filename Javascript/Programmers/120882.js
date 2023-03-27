// 등수 매기기
// https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score) {
  const arr = score.map(x=>(x[0]+x[1])/2);
  const sorted = [...arr].sort((a,b)=>b-a);
  return arr.map(x=>sorted.indexOf(x)+1);
}