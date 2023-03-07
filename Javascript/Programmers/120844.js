// 배열 회전시키기 
// https://school.programmers.co.kr/learn/courses/30/lessons/120844

function solution(numbers, direction) {
  return direction === "right" ? numbers.splice(-1).concat(numbers) : numbers.splice(1).concat(numbers);
}