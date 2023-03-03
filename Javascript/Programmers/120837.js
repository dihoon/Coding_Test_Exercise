// 개미 군단
// https://school.programmers.co.kr/learn/courses/30/lessons/120837

function solution(hp) {
  let rest = hp;
  let count = 0;
  const ant = [5, 3, 1];
  for (let i=0; i<ant.length; i++){
      const num = parseInt(rest/ant[i]);
      count += num;
      rest -= num*ant[i];
  }
  return count;
}