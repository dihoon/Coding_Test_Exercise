// 3진법 뒤집기
// https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
    const result = [];
    while(n/3 >= 1){
        result.push(n % 3);
        n = Math.floor(n/3);
    }
    result.push(n);
    return result.reverse().reduce((r,v,i)=>r + v*(3**i),0);
}