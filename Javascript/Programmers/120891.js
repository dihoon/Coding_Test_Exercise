// 369게임
// https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
  return order.toString().replace(/[^369]/g, "").length;
}