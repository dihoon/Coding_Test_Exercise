// 수박수박수박수박수박수?
// https://school.programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
    return "수박".repeat(n/2) + '수'.repeat(n%2);
}