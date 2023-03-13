// 진료순서 정하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120835

function solution(emergency) {
  const dsc = [...emergency].sort((a, b) => b - a);
  return emergency.map((x) => dsc.indexOf(x) + 1);
}