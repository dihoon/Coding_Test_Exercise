// 숨어있는 숫자의 덧셈 (2) 
// https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string) {
  const arr = my_string.match(/[0-9]+/g);
  if (!arr) return 0;
  return arr.reduce((r,x)=>r+parseInt(x),0);
}