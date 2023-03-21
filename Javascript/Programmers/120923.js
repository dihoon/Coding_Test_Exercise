// 연속된 수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/120923

function solution(num, total) {
  return Array(num).fill(0).map((x,i)=>num-(num-1)+i+(total-num*(num+1)/2)/num);
}