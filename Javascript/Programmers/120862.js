// 최댓값 만들기 (2)
// https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers) {
  const arr = numbers.sort((a, b)=>a-b);
  const mul1 = arr[0]*arr[1];
  const mul2 = arr[arr.length-1]*arr[arr.length-2];
  
  return mul1 > mul2 ? mul1 : mul2;
}