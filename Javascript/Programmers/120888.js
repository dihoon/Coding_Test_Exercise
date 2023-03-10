// 중복된 문자 제거
// https://school.programmers.co.kr/learn/courses/30/lessons/120888

function solution(my_string) {
  const result = [];
  for (let c of [...my_string]){
      if (!result.includes(c)) {
          result.push(c);
      }
  }
  return result.join("");
}