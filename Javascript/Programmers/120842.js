// 2차원으로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/120842

function solution(num_list, n) {
  const result = [];
  for (let i=0;i<num_list.length/n;i++){
      result.push(num_list.slice(n*i, n*(1+i)));
  }
  return result;
}