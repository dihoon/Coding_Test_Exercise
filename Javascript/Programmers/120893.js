// 대문자와 소문자
// https://school.programmers.co.kr/learn/courses/30/lessons/120893

function solution(my_string) {
  return[...my_string].map(x=>{
      if (x.match(new RegExp(/[a-z]/))) return x.toUpperCase();
      else return x.toLowerCase();
  }).join("");
}