// 숨어있는 숫자의 덧셈 (1)
// https://school.programmers.co.kr/learn/courses/30/lessons/120851

function solution(my_string) {
  return my_string.split("").reduce((r,x)=>{
      const num = parseInt(x);
      if (num % 1 === 0) r += num;
      return r;
  }, 0);
}