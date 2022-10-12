// 문자열 다루기 기본
// https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
    return (s.length === 4 || s.length === 6) && (![...s].filter(x=>!Number.isInteger(+x)).length);
}