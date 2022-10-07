// 나누어 떨어지는 숫자 배열
// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
    return [arr.filter(x=>x%divisor===0)].reduce((r,x)=>x.length === 0 ? [-1] : x.sort((a, b)=>a-b),[]);
}