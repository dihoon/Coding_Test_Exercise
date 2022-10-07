// JadenCase 문자열 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
    return [...s.toLowerCase()].map((x,i)=> i===0 || s[i-1]===' ' ? x.toUpperCase() : x).join("");
}