// 문자열 겹쳐쓰기
// https://school.programmers.co.kr/learn/courses/30/lessons/181943

function solution(my_string, overwrite_string, s) {
  return my_string.substring(0, s) + overwrite_string + my_string.substring(s+overwrite_string.length);
}