// 인덱스 바꾸기
// https://school.programmers.co.kr/learn/courses/30/lessons/120895

function solution(my_string, num1, num2) {
  const arr = my_string.split("");
  [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
  return arr.join("");
}