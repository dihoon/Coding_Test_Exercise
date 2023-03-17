// 잘라서 배열로 저장하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120913

function solution(my_str, n) {
  let result = [];
  for (let i=0;i<Math.ceil(my_str.length/n);i++){
      result.push(my_str.slice(n*i, n*(i+1)));
  }
  return result;
}