// 홀짝에 따라 다른 값 반환하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181935

function solution(n) {
  const arr = Array.from({length : n}).map((x,i)=>i+1);
  if (n % 2 === 0) {
      return arr.reduce((r,x,i)=>{
          if (i % 2 === 1) return r + x**2;
          else return r;
      },0);
  } else {
      return arr.reduce((r,x,i)=>{
          if (i % 2 === 0) {
              return r + x;
          }
          else return r;
      },0);
  }
}
