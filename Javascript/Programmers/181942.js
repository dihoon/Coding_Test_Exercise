// 문자열 섞기
// https://school.programmers.co.kr/learn/courses/30/lessons/181942

function solution(str1, str2) {
  let result = "";
  let cnt = 0;
  while (result.length !== str1.length + str2.length) {
      if (++cnt % 2 === 0) {
          result += str2[(cnt/2)-1];
      } else {
          result += str1[Math.floor(cnt/2)];
      }
  }
  return result;
}