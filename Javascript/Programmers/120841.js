// 점의 위치 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120841

function solution(dot) {
  const [x, y] = [...dot];

  if (x > 0 && y > 0) return 1;
  else if (x < 0 && y > 0) return 2;
  else if (x < 0 && y < 0) return 3;
  else if (x > 0 && y < 0) return 4;
}
