// 두 정수 사이의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
    if (a > b) [a, b] = [b, a];
    return (a+b)*(-a+b+1)/2;
}