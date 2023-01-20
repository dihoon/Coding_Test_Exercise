// 짝수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/120831

function solution(n) {
  let total = 0;
  const nums = parseInt(n/2);
  console.log(nums);
  for (let i=0;i<nums;i++){
    total += 2*(i+1);
  }
  return total;
}