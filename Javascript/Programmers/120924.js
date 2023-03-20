// 다음에 올 숫자
// https://school.programmers.co.kr/learn/courses/30/lessons/120924

function solution(common) {
  const last = common[common.length-1];
  if (common[2]-common[1] === common[1]-common[0]){
      const d = common[1] - common[0];
      return last + d;
  } 
  if (common[2]/common[1] === common[1]/common[0]){
      const r = common[1]/common[0];
      return last*r;
  }
}