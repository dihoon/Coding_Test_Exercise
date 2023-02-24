// 짝수 홀수 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
  return num_list.reduce((r, x)=>{
      if (x % 2 === 0) r[0]++;
      else r[1]++;
      return r;
  },[0,0]);
}
