// 암호 해독 
// https://school.programmers.co.kr/learn/courses/30/lessons/120892

function solution(cipher, code) {
  return [...cipher].map((x,i)=> {
      if((i+1) % code !== 0) x = "";
      return x;
  }).join("");
}