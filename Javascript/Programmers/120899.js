// 가장 큰 수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/120899

function solution(array) {
  return array.reduce((r,x,i)=> {
      if(x>r[0]) return [x,i];
      return r;
  }, [0,0]);
}